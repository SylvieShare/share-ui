import { computed, nextTick, onScopeDispose, ref, shallowRef } from 'vue'

// UI-only actions receive an abort signal and register synchronous rollback immediately.
export function useGuidedTour({ onFinish = async () => {} } = {}) {
  const active = ref(false)
  const busy = ref(false)
  const error = shallowRef(null)
  const index = ref(0)
  const steps = shallowRef([])
  const target = shallowRef(null)
  const step = computed(() => steps.value[index.value] || null)
  let controller = null
  let cleanups = []
  let retryAction = null
  let saving = false
  let run = 0

  function clearStep() {
    controller?.abort()
    controller = null
    for (const cleanup of cleanups.reverse()) {
      try { cleanup() } catch { /* All registered rollback actions must run. */ }
    }
    cleanups = []
    target.value = null
  }

  async function go(next) {
    if (busy.value || !active.value || next < 0 || next >= steps.value.length) return
    clearStep()
    index.value = next
    busy.value = true
    error.value = null
    const current = new AbortController()
    controller = current
    const context = {
      signal: current.signal,
      onCleanup(fn) {
        if (current.signal.aborted) fn()
        else cleanups.push(fn)
      },
    }
    retryAction = () => go(next)
    try {
      await step.value?.enter?.(context)
      await nextTick()
      if (current.signal.aborted) return
      const resolve = step.value?.target
      if (resolve) {
        const deadline = Date.now() + 3000
        while (!current.signal.aborted) {
          const element = resolve()
          if (element?.isConnected && element.getClientRects().length) {
            target.value = element
            const positions = []
            for (let node = element.parentElement; node; node = node.parentElement) {
              positions.push([node, node.scrollLeft, node.scrollTop])
            }
            context.onCleanup(() => {
              for (const [node, left, top] of positions) {
                node.scrollLeft = left
                node.scrollTop = top
              }
            })
            element.scrollIntoView?.({ block: 'center', inline: 'nearest', behavior: 'instant' })
            break
          }
          if (Date.now() >= deadline) throw new Error('target-unavailable')
          await new Promise(resolve => setTimeout(resolve, 50))
        }
      }
    } catch (cause) {
      if (!current.signal.aborted) {
        error.value = cause
        clearStep()
        busy.value = false
      }
    } finally {
      if (controller === current) busy.value = false
    }
  }

  function stop() {
    run += 1
    saving = false
    clearStep()
    active.value = false
    busy.value = false
    error.value = null
  }

  async function start(flow) {
    stop()
    steps.value = flow
    if (!flow.length) return
    active.value = true
    await go(0)
  }

  async function finish(reason) {
    if (saving || !active.value) return
    if (busy.value) clearStep()
    saving = true
    busy.value = true
    error.value = null
    const currentRun = run
    retryAction = () => finish(reason)
    try {
      await onFinish(reason)
      if (run === currentRun) stop()
    } catch (cause) {
      if (active.value && run === currentRun) error.value = cause
    } finally {
      if (run === currentRun) { saving = false; busy.value = false }
    }
  }

  const next = () => index.value === steps.value.length - 1 ? finish('completed') : go(index.value + 1)
  const previous = () => go(index.value - 1)
  const dismiss = () => finish('dismissed')
  const retry = () => retryAction?.()
  onScopeDispose(stop)
  return { active, busy, error, index, steps, step, target, start, stop, next, previous, dismiss, retry }
}
