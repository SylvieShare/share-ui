import { describe, expect, it } from 'vitest'
import { isTopOverlay, registerOverlay, unregisterOverlay } from '../src/internal/overlayStack.js'

describe('overlay stack', () => {
  it('only treats the last registered overlay as topmost', () => {
    const first = registerOverlay(Symbol('first'))
    const second = registerOverlay(Symbol('second'))
    expect(isTopOverlay(first)).toBe(false)
    expect(isTopOverlay(second)).toBe(true)
    unregisterOverlay(second)
    expect(isTopOverlay(first)).toBe(true)
    unregisterOverlay(first)
  })
})
