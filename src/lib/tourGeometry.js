const px = value => `${Math.round(value)}px`
const box = (left, top, width, height) => ({ left: px(left), top: px(top), width: px(Math.max(0, width)), height: px(Math.max(0, height)) })
const clamp = (value, min, max) => Math.max(min, Math.min(value, max))

export function tourGeometry(target, viewport, cardSize, mobile = false) {
  const { width, height, left = 0, top = 0 } = viewport
  const right = left + width, bottom = top + height
  const cardWidth = Math.min(cardSize.width, width - 24)
  const cardHeight = Math.min(cardSize.height, height - 24)
  let rect = null
  if (target && target.width > 0 && target.height > 0) {
    const x = clamp(target.left - 5, left, right)
    const y = clamp(target.top - 5, top, bottom)
    const r = clamp(target.right + 5, left, right)
    const b = clamp(target.bottom + 5, top, bottom)
    if (r > x && b > y) rect = { left: x, top: y, right: r, bottom: b, width: r - x, height: b - y }
  }
  const masks = rect ? [
    box(left, top, width, rect.top - top), box(left, rect.bottom, width, bottom - rect.bottom),
    box(left, rect.top, rect.left - left, rect.height), box(rect.right, rect.top, right - rect.right, rect.height),
  ] : [box(left, top, width, height)]
  let x = left + (width - cardWidth) / 2
  let y = top + (height - cardHeight) / 2
  if (rect) {
    x = clamp(rect.left, left + 12, right - cardWidth - 12)
    y = rect.bottom + 14 + cardHeight <= bottom - 12 ? rect.bottom + 14 : rect.top - cardHeight - 14
    if (y < top + 12 && rect.right + cardWidth + 14 <= right - 12) { x = rect.right + 14; y = rect.top }
    y = clamp(y, top + 12, bottom - cardHeight - 12)
  }
  if (mobile) {
    x = left + (width - cardWidth) / 2
    // Choose the opposite end of the screen from the highlighted object.
    y = rect && rect.top > top + height / 2 ? top + 12 : bottom - cardHeight - 12
  }
  return { rect, masks, spotlight: rect ? box(rect.left, rect.top, rect.width, rect.height) : {},
    card: { left: px(x), top: px(y), maxHeight: px(height - 24) } }
}
