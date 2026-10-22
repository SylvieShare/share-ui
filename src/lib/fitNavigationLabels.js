// Measure the actual shaped text, including fractional glyph widths. Reset to
// the CSS font first so wider buttons can grow back to their normal font size.
export function fitNavigationLabels(buttons) {
  const labels = []
  for (const button of buttons) {
    const label = button.querySelector('.share-icon-navigation__label')
    if (!label) continue
    label.style.fontSize = ''
    labels.push({ button, label })
  }
  if (!labels.length) return
  const range = document.createRange()
  const measurements = labels.map(({ button, label }) => {
    const style = getComputedStyle(button)
    const available = button.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
    range.selectNodeContents(label)
    return { label, available, natural: range.getBoundingClientRect().width, base: parseFloat(getComputedStyle(label).fontSize) }
  })
  for (const { label, available, natural, base } of measurements) {
    if (available <= 0 || natural <= available || !base) continue
    range.selectNodeContents(label)
    let low = 0, high = base
    while (high - low > .01) {
      const size = (low + high) / 2
      label.style.fontSize = `${size}px`
      if (range.getBoundingClientRect().width <= available) low = size
      else high = size
    }
    label.style.fontSize = `${Math.floor(low * 100) / 100}px`
  }
  range.detach?.()
}
