import { describe, expect, it } from 'vitest'
import { dateUnavailable, dateValue, monthDays, moveDate, parseDate } from '../src/lib/calendar.js'

describe('calendar dates', () => {
  it('returns explicit booleans for disabled attributes, including no bounds', () => {
    expect(dateUnavailable('2026-10-03')).toBe(false)
    expect(dateUnavailable('2026-10-03', '2026-10-03', '2026-10-03')).toBe(false)
    expect(dateUnavailable('2026-10-02', '2026-10-03')).toBe(true)
    expect(dateUnavailable('2026-10-04', '', '2026-10-03')).toBe(true)
    expect(dateUnavailable('2025-02-29')).toBe(true)
  })
  it('rejects impossible and ambiguous dates and preserves date-only values', () => {
    for (const value of ['2025-02-29', '2024-13-01', '0000-01-01', '01.02.2024', '2024-2-1', '']) expect(parseDate(value)).toBeNull()
    for (const value of ['2024-02-29', '2026-10-03', '0099-01-01']) expect(dateValue(parseDate(value))).toBe(value)
  })
  it('clamps the same day when changing month and supports leap years', () => {
    expect(moveDate('2024-01-31', 0, 1)).toBe('2024-02-29')
    expect(moveDate('2025-01-31', 0, 1)).toBe('2025-02-28')
    expect(moveDate('2024-12-31', 1)).toBe('2025-01-01')
    expect(moveDate('2024-02-29', 0, 12)).toBe('2025-02-28')
  })
  it('includes adjacent month days in a Monday-first six-week grid', () => {
    const days = monthDays(2026, 9)
    expect(days).toHaveLength(42)
    expect(days[0]).toEqual({ value: '2026-09-28', day: 28, outside: true })
    expect(days[3]).toEqual({ value: '2026-10-01', day: 1, outside: false })
    expect(parseDate(days.at(-1).value).getDay()).toBe(0)
  })
})
