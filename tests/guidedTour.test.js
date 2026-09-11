import { effectScope } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useGuidedTour } from '../src/composables/useGuidedTour.js'
import { tourGeometry } from '../src/lib/tourGeometry.js'
const scopes = []
function setup(options) {
  const scope = effectScope(); scopes.push(scope)
  return scope.run(() => useGuidedTour(options))
}
afterEach(() => { scopes.splice(0).forEach(scope => scope.stop()); vi.useRealTimers() })
describe('guided tour lifecycle', () => {
  it('rolls back each step, back navigation and disposal', async () => {
    const cleanup = vi.fn()
    const tour = setup()
    await tour.start([{ id: 'one', enter: ({ onCleanup }) => onCleanup(cleanup) }, { id: 'two' }])
    await tour.next(); expect(cleanup).toHaveBeenCalledTimes(1)
    await tour.previous(); scopes[0].stop()
    expect(cleanup).toHaveBeenCalledTimes(2)
  })
  it('cancels a late action without advancing the new run', async () => {
    let resolve
    const cleanup = vi.fn()
    const tour = setup()
    const pending = tour.start([{ enter: async ({ onCleanup }) => {
      await new Promise(done => { resolve = done }); onCleanup(cleanup)
    } }])
    await tour.start([{ id: 'new' }]); resolve(); await pending
    expect(tour.step.value.id).toBe('new'); expect(tour.busy.value).toBe(false)
    expect(cleanup).toHaveBeenCalledOnce()
  })
  it('keeps failed persistence retryable and never saves on stop', async () => {
    const onFinish = vi.fn().mockRejectedValueOnce(new Error('offline')).mockResolvedValueOnce()
    const tour = setup({ onFinish })
    await tour.start([{ id: 'one' }]); await tour.next()
    expect(tour.active.value).toBe(true); expect(tour.error.value).toBeTruthy()
    await tour.retry(); expect(tour.active.value).toBe(false)
    expect(onFinish).toHaveBeenNthCalledWith(2, 'completed')
    await tour.start([{ id: 'one' }]); tour.stop(); expect(onFinish).toHaveBeenCalledTimes(2)
  })
  it('fails on missing targets instead of silently passing them', async () => {
    vi.useFakeTimers()
    const tour = setup()
    const pending = tour.start([{ target: () => null }])
    await vi.runAllTimersAsync(); await pending
    expect(tour.error.value?.message).toBe('target-unavailable')
    expect(tour.busy.value).toBe(false)
  })
})
it('keeps mobile cards inside the visual viewport and away from a bottom target', () => {
  const result = tourGeometry({ left: 12, right: 300, top: 400, bottom: 450, width: 288, height: 50 },
    { width: 320, height: 480, top: 10 }, { width: 360, height: 240 }, true)
  expect(result.card.top).toBe('22px'); expect(result.card.left).toBe('12px')
  expect(result.masks).toHaveLength(4)
})
it('dismisses a pending UI action and ignores its eventual completion', async () => {
  let resolve
  const onFinish = vi.fn().mockResolvedValue()
  const cleanup = vi.fn()
  const tour = setup({ onFinish })
  const pending = tour.start([{ enter: async ({ onCleanup }) => {
    onCleanup(cleanup)
    await new Promise(done => { resolve = done })
  } }])
  await tour.dismiss()
  expect(tour.active.value).toBe(false)
  expect(cleanup).toHaveBeenCalledOnce()
  expect(onFinish).toHaveBeenCalledWith('dismissed')
  resolve(); await pending
  expect(tour.active.value).toBe(false)
})
