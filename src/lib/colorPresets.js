export const PRESET_COLORS = [
  '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
  '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
  '#8b5cf6', '#7c5cff', '#a855f7', '#d946ef', '#ec4899', '#f43f5e',
  '#f87171', '#fbbf24', '#4ade80', '#38bdf8', '#c084fc', '#94a3b8',
]

export function isValidHexColor(value) {
  return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(value || '').trim())
}

export function randomPreset(colors = PRESET_COLORS) {
  return colors[Math.floor(Math.random() * colors.length)]
}
