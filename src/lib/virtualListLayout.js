export function virtualListOffsets(items, keyOf, estimate, measured) {
  const offsets = [0]
  for (const item of items) offsets.push(offsets.at(-1) + (measured.get(keyOf(item)) || Math.max(1, estimate(item))))
  return offsets
}

export function virtualListRange(offsets, scrollTop, height, overscan = 6) {
  const count = offsets.length - 1
  if (!count) return { start: 0, end: 0 }
  const find = position => {
    let low = 0, high = count
    while (low < high) {
      const middle = (low + high) >>> 1
      if (offsets[middle + 1] <= position) low = middle + 1
      else high = middle
    }
    return Math.min(low, count - 1)
  }
  const top = Math.max(0, Math.min(scrollTop, offsets[count] - height))
  return { start: Math.max(0, find(top) - overscan), end: Math.min(count, find(top + height) + overscan + 1) }
}
