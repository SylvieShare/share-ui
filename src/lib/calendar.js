export function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(0)
  date.setFullYear(year, month - 1, day)
  date.setHours(12, 0, 0, 0)
  return year > 0 && date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null
}

export function dateValue(date) {
  return `${String(date.getFullYear()).padStart(4, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function dateUnavailable(value, min = '', max = '') {
  return Boolean(!parseDate(value) || (min && value < min) || (max && value > max))
}

export function moveDate(value, days = 0, months = 0) {
  const date = parseDate(value)
  if (!date) return value
  const day = date.getDate()
  date.setDate(1)
  date.setMonth(date.getMonth() + months)
  const last = new Date(date)
  last.setMonth(last.getMonth() + 1, 0)
  const end = last.getDate()
  date.setDate(Math.min(day, end) + days)
  return dateValue(date)
}

export function monthDays(year, month, weekStartsOn = 1) {
  const first = new Date(0)
  first.setFullYear(year, month, 1)
  first.setHours(12, 0, 0, 0)
  const offset = (first.getDay() - weekStartsOn + 7) % 7
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(first)
    date.setDate(index - offset + 1)
    return { value: dateValue(date), day: date.getDate(), outside: date.getMonth() !== month }
  })
}
