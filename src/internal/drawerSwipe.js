// Gesture recognition only; vertical scrolling and taps keep their native behavior.
export function createDrawerSwipe({ enabled, width, close }) {
  let origin = null
  let axis = null
  function cancel() { origin = null; axis = null }
  function start(event) {
    cancel()
    if (!enabled() || event.touches.length !== 1) return
    if (event.target?.closest?.('input, textarea, select, [contenteditable], [data-share-drawer-no-swipe]')) return
    origin = { x: event.touches[0].clientX, y: event.touches[0].clientY }
  }
  function move(event) {
    if (!origin) return
    if (event.touches.length !== 1 || !enabled()) return cancel()
    const dx = event.touches[0].clientX - origin.x
    const dy = event.touches[0].clientY - origin.y
    if (!axis && Math.max(Math.abs(dx), Math.abs(dy)) >= 10) {
      axis = Math.abs(dx) > Math.abs(dy) * 1.5 ? 'horizontal' : 'vertical'
    }
    if (axis === 'horizontal' && dx < 0 && event.cancelable) event.preventDefault()
  }
  function end(event) {
    if (origin && enabled() && event.changedTouches.length === 1) {
      const dx = event.changedTouches[0].clientX - origin.x
      const dy = event.changedTouches[0].clientY - origin.y
      if (axis !== 'vertical' && -dx >= Math.max(64, width() * 0.25) && -dx > Math.abs(dy) * 1.5) close()
    }
    cancel()
  }
  return { start, move, end, cancel }
}
