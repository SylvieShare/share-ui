import { describe, expect, it } from 'vitest'
import { acquirePageScrollLock, isTopOverlay, registerOverlay, unregisterOverlay } from '../src/internal/overlayStack.js'
import { isTopFloating, registerFloating, unregisterFloating } from '../src/internal/floatingState.js'

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

  it('shares ordering with floating overlays and restores the underlying owner', () => {
    const drawer = registerOverlay(Symbol('drawer'))
    const popover = Symbol('popover')
    registerFloating(popover)
    expect(isTopOverlay(drawer)).toBe(false)
    expect(isTopFloating(popover)).toBe(true)
    const modal = registerOverlay(Symbol('modal'))
    expect(isTopFloating(popover)).toBe(false)
    unregisterOverlay(modal)
    unregisterFloating(popover)
    expect(isTopOverlay(drawer)).toBe(true)
    unregisterOverlay(drawer)
  })

  it('supports scroll-lock acquisition without a document', () => {
    expect(() => acquirePageScrollLock()()).not.toThrow()
  })
})
