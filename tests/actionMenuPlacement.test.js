import { describe, expect, it } from 'vitest'
import { computeActionMenuPlacement } from '../src/lib/actionMenuPlacement.js'

const viewport = { viewportWidth: 360, viewportHeight: 640 }

describe('computeActionMenuPlacement', () => {
  it('clamps a menu to both horizontal viewport edges', () => {
    const leftEdge = computeActionMenuPlacement({
      ...viewport,
      triggerRect: { left: 2, right: 32, top: 100, bottom: 130 },
      popoverWidth: 200,
      popoverHeight: 120,
      originX: 17,
      originY: 130,
    })
    const rightEdge = computeActionMenuPlacement({
      ...viewport,
      triggerRect: { left: 340, right: 370, top: 100, bottom: 130 },
      popoverWidth: 200,
      popoverHeight: 120,
      originX: 355,
      originY: 130,
    })

    expect(leftEdge.left).toBe(8)
    expect(rightEdge.left).toBe(152)
  })

  it('opens above a low trigger and limits tall content', () => {
    const placement = computeActionMenuPlacement({
      ...viewport,
      triggerRect: { left: 150, right: 180, top: 390, bottom: 420 },
      popoverWidth: 200,
      popoverHeight: 700,
      originX: 165,
      originY: 420,
    })

    expect(placement.opensAbove).toBe(true)
    expect(placement.maxHeight).toBe(376)
    expect(placement.top).toBe(8)
  })
})
