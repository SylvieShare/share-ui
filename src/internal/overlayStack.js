const stack = []
export const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
let scrollLockCount = 0
let previousHtmlOverflow = ''

export function registerOverlay(token = Symbol('share-overlay')) {
  stack.push(token)
  return token
}

export function unregisterOverlay(token) {
  const index = stack.lastIndexOf(token)
  if (index >= 0) stack.splice(index, 1)
}

export function isTopOverlay(token) {
  return stack.at(-1) === token
}

export function focusFirst(root) {
  if (!root) return
  const first = [...root.querySelectorAll(FOCUSABLE_SELECTOR)]
    .find(element => element.getClientRects().length > 0)
  ;(first || root).focus?.({ preventScroll: true })
}

export function trapTabKey(event, root) {
  if (event.key !== 'Tab' || !root) return
  const focusable = [...root.querySelectorAll(FOCUSABLE_SELECTOR)]
    .filter(element => element.getClientRects().length > 0)
  if (!focusable.length) {
    event.preventDefault()
    root.focus?.({ preventScroll: true })
    return
  }
  const first = focusable[0]
  const last = focusable.at(-1)
  if (event.shiftKey && (document.activeElement === first || !root.contains(document.activeElement))) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && (document.activeElement === last || !root.contains(document.activeElement))) {
    event.preventDefault()
    first.focus()
  }
}

export function restoreFocus(element) {
  if (element instanceof HTMLElement && element.isConnected) element.focus({ preventScroll: true })
}

export function acquirePageScrollLock() {
  if (typeof document === 'undefined') return () => {}
  if (scrollLockCount === 0) {
    previousHtmlOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
  }
  scrollLockCount += 1
  let released = false
  return () => {
    if (released) return
    released = true
    scrollLockCount = Math.max(0, scrollLockCount - 1)
    if (scrollLockCount === 0) document.documentElement.style.overflow = previousHtmlOverflow
  }
}

const blurRecords = new WeakMap()

export function acquireBackgroundBlur(target, { blur = '8px', duration = '300ms' } = {}) {
  if (!target) return () => {}
  let record = blurRecords.get(target)
  if (!record) {
    record = {
      count: 0,
      filter: target.style.filter,
      transition: target.style.transition,
    }
    blurRecords.set(target, record)
  }
  record.count += 1
  target.style.transition = `filter ${duration} ease`
  target.style.filter = `blur(${blur})`
  let released = false
  return () => {
    if (released) return
    released = true
    record.count = Math.max(0, record.count - 1)
    if (record.count > 0) return
    target.style.filter = record.filter
    target.style.transition = record.transition
    blurRecords.delete(target)
  }
}
