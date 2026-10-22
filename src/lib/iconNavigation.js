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
