/** Keep real filter declarations in inline styles: CSS optimizers can discard
 * the standard backdrop-filter when a prefixed declaration follows it. */
export function blurFilter(radius = 8) {
  const length = typeof radius === 'number'
    ? `${Number.isFinite(radius) ? Math.max(0, radius) : 0}px`
    : String(radius ?? '').trim() || '0px'
  return `blur(${length})`
}

export function backdropBlurStyle(radius = 8) {
  const value = blurFilter(radius)
  return { 'backdrop-filter': value, '-webkit-backdrop-filter': value }
}

/** For animated overlays; unrelated inline styles and transition ownership stay intact. */
export function applyBackdropBlur(element, radius = 8) {
  if (!element?.style) return
  for (const [name, value] of Object.entries(backdropBlurStyle(radius))) {
    element.style.setProperty(name, value)
  }
}
