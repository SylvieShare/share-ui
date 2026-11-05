import { afterEach, describe, expect, it, vi } from 'vitest'
import { useContainerMorph } from '../src/composables/useContainerMorph.js'

const rect = { left: 10, top: 20, width: 100, height: 60 }
const element = () => ({ style: { removeProperty: vi.fn() }, offsetWidth: 100, getBoundingClientRect: () => rect })
afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals() })

describe('consumer morph timing', () => {
  it('reads durations at play time and completes closing at the selected duration', () => {
    vi.useFakeTimers()
    let duration = 300
    const morph = useContainerMorph({ open: () => duration, close: 200 })
    const el = element(), done = vi.fn()
    morph.playOpen(el, rect)
    expect(el.style.transition).toContain('left 300ms')
    vi.advanceTimersByTime(320)
    expect(morph.morphing.value).toBe(false)
    duration = 180
    morph.playOpen(el, rect)
    expect(el.style.transition).toContain('left 180ms')
    morph.playClose(el, rect, {}, done)
    vi.advanceTimersByTime(199)
    expect(done).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1)
    expect(done).toHaveBeenCalledOnce()
  })

  it('honours reduced motion during opening and closing', () => {
    vi.useFakeTimers()
    vi.stubGlobal('window', { matchMedia: () => ({ matches: true }) })
    const morph = useContainerMorph(), el = element(), done = vi.fn()
    morph.playOpen(el, rect)
    expect(el.style.transition).toContain('left 0ms')
    morph.playClose(el, rect, {}, done)
    vi.advanceTimersByTime(0)
    expect(done).toHaveBeenCalledOnce()
  })
})
