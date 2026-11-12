export function navigationFocusKey(items, current, key, orientation) {
  const enabled = items.filter(item => !item.disabled)
  if (!enabled.length) return null
  const index = Math.max(0, enabled.findIndex(item => item.key === current))
  const next = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight'
  const previous = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft'
  if (key === 'Home') return enabled[0].key
  if (key === 'End') return enabled.at(-1).key
  if (key === next) return enabled[(index + 1) % enabled.length].key
  if (key === previous) return enabled[(index + enabled.length - 1) % enabled.length].key
  return null
}

// Distribute the selected width continuously, including across a swipe midpoint.
export function compactNavigationRects(weights, { width, start, end, gap, minimum, selected, maximum }) {
  if (!weights.length) return []
  const extra = selected - minimum
  const base = Math.max(minimum, (width - start - end - gap * (weights.length - 1) - extra) / weights.length)
  let x = start
  return weights.map(weight => {
    const rect = { x, y: start, width: Math.min(maximum, base + extra * weight) }
    x += rect.width + gap
    return rect
  })
}

export function navigationSelectionRect(rects, weights) {
  if (!rects.length) return null
  return weights.reduce((sum, weight, index) => {
    const rect = rects[index]
    if (rect) for (const key of ['x', 'y', 'width', 'height']) sum[key] += (rect[key] || 0) * weight
    return sum
  }, { x: 0, y: 0, width: 0, height: 0 })
}
