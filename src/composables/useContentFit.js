import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { contentFit } from '../lib/contentFit.js'

export function useContentFit(root, content, minimum) {
  const scale = ref(1), wrapping = ref(false)
  let frame = 0, observer, mutations, stopped = false
  let width = 0, contentWidth = 0, contentHeight = 0

  function refresh() {
    const host = root.value, body = content.value
    if (stopped || !host?.isConnected || !body || !(host.clientWidth > 0)) return
    width = host.clientWidth
    body.style.width = 'max-content'
    body.style.whiteSpace = 'nowrap'
    body.style.setProperty('--fit-content-wrap', 'nowrap')
    const natural = body.offsetWidth
    const fit = contentFit(natural, width, minimum())
    host.style.setProperty('--fit-content-natural-width', `${natural}px`)
    if (fit.wrapping) {
      body.style.width = `${width / fit.scale}px`
      body.style.whiteSpace = 'normal'
      body.style.setProperty('--fit-content-wrap', 'wrap')
    }
    const styles = getComputedStyle(body)
    contentWidth = parseFloat(styles.width) || body.offsetWidth
    contentHeight = parseFloat(styles.height) || body.offsetHeight
    body.style.transform = `scale(${fit.scale})`
    host.style.height = `${Math.ceil(contentHeight * fit.scale)}px`
    host.dataset.fitReady = ''
    host.dataset.fitScale = String(fit.scale)
    host.dataset.fitWrapping = String(fit.wrapping)
    scale.value = fit.scale
    wrapping.value = fit.wrapping
  }

  function schedule() {
    if (stopped || frame) return
    frame = requestAnimationFrame(() => { frame = 0; refresh() })
  }

  onMounted(() => {
    refresh()
    observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === root.value) {
          if (!entry.contentRect.width) { width = 0; continue }
          if (Math.abs(entry.contentRect.width - width) > 1) schedule()
        } else if (Math.abs(entry.contentRect.width - contentWidth) > 1 || Math.abs(entry.contentRect.height - contentHeight) > 1) schedule()
      }
    })
    observer.observe(root.value)
    observer.observe(content.value)
    mutations = new MutationObserver(records => {
      if (records.some(record => record.type !== 'attributes' || record.target !== content.value)) schedule()
    })
    mutations.observe(content.value, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['class', 'width', 'height'] })
    document.fonts?.ready.then(schedule)
    document.fonts?.addEventListener('loadingdone', schedule)
  })
  watch(minimum, schedule)
  onBeforeUnmount(() => {
    stopped = true
    if (frame) cancelAnimationFrame(frame)
    observer?.disconnect()
    mutations?.disconnect()
    document.fonts?.removeEventListener('loadingdone', schedule)
  })
  return { scale, wrapping, refresh }
}
