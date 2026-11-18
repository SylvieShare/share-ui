export const contentFitContext = Symbol('share-content-fit')

export function contentFit(naturalWidth, availableWidth, minimum = .5) {
  const min = Number.isFinite(minimum) && minimum > 0 ? Math.min(1, minimum) : .5
  if (!(naturalWidth > 0) || !(availableWidth > 0)) return { scale: 1, wrapping: false }
  const scale = Math.max(min, Math.min(1, availableWidth / naturalWidth))
  return { scale, wrapping: naturalWidth * min > availableWidth + .25 }
}
