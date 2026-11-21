const ignored = 'input, textarea, select, [contenteditable], [data-share-drawer-no-swipe]'
const edgeWidth = 48
const directionSlop = 8

export function createDrawerSwipe({ enabled, width, update, commit, opening = false }) {
  let gesture = null

  function reset() { gesture = null }
  function cancel() {
    if (gesture?.locked) update(null)
    reset()
  }
  function start(event) {
    cancel()
    const touch = event.touches[0]
    if (event.touches.length !== 1 || !enabled()
      || (opening && touch.clientX > edgeWidth) || event.target?.closest?.(ignored)) return
    gesture = { x: touch.clientX, y: touch.clientY, lastX: touch.clientX, time: event.timeStamp }
  }
  function move(event) {
    if (!gesture) return
    if (event.touches.length !== 1 || !enabled()) { cancel(); return }
    const touch = event.touches[0]
    const dx = touch.clientX - gesture.x
    const dy = touch.clientY - gesture.y
    const distance = opening ? dx : -dx
    if (!gesture.locked) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < directionSlop) return
      if (distance <= Math.abs(dy) * 1.15) { cancel(); return }
      gesture.locked = true
    }
    if (event.cancelable) event.preventDefault()
    if (opening) event.stopPropagation()
    const elapsed = event.timeStamp - gesture.time
    if (elapsed > 0) {
      gesture.velocity = (touch.clientX - gesture.lastX) / elapsed * (opening ? 1 : -1)
      gesture.time = event.timeStamp
      gesture.lastX = touch.clientX
    }
    update((opening ? 0 : width()) + dx)
  }
  function end(event) {
    if (!gesture?.locked || !enabled() || event.changedTouches.length !== 1) { cancel(); return }
    const dx = event.changedTouches[0].clientX - gesture.x
    const distance = opening ? dx : -dx
    const threshold = opening ? Math.min(64, width() * 0.22) : Math.max(64, width() * 0.25)
    const flick = opening && distance >= 24 && gesture.velocity > 0.35 && event.timeStamp - gesture.time < 80
    reset()
    if (opening) event.stopPropagation()
    if (distance >= threshold || flick) commit()
    else update(null)
  }
  return { start, move, end, cancel, reset }
}
