import { describe, expect, it, vi } from 'vitest'
import AppDrawer from '../src/components/overlay/AppDrawer.vue'
import AppSidebar from '../src/components/navigation/AppSidebar.vue'
import AppShell from '../src/components/navigation/AppShell.vue'
import { createDrawerSwipe } from '../src/internal/drawerSwipe.js'

it('keeps drawer and existing navigation defaults', () => {
  expect(AppDrawer.props.modelValue.default).toBe(false)
  expect(AppDrawer.props.width.default).toBe(288)
  expect(AppDrawer.props.closeLabel.default).toBe('Close')
  expect(AppDrawer.props.showClose.default).toBe(true)
  expect(AppDrawer.props.swipeToClose.default).toBe(false)
  expect(AppSidebar.props.position.default).toBe('fixed')
  expect(AppSidebar.props.mobileBreakpoint.default).toBe(768)
  expect(AppShell.props.mobileBreakpoint.default).toBe(768)
  expect(AppSidebar.props.position.validator('embedded')).toBe(true)
})

it.each([AppSidebar, AppShell])('supports matching shell/sidebar breakpoints', component => {
  for (const breakpoint of [0, 600, 640, 768, 1200]) expect(component.props.mobileBreakpoint.validator(breakpoint)).toBe(true)
  for (const breakpoint of [-1, 601, '600']) expect(component.props.mobileBreakpoint.validator(breakpoint)).toBe(false)
})

describe('optional drawer swipe', () => {
  function setup(enabled = true) {
    const close = vi.fn()
    const swipe = createDrawerSwipe({ enabled: () => enabled, width: () => 288, close })
    const touch = (x, y) => ({ touches: [{ clientX: x, clientY: y }], changedTouches: [{ clientX: x, clientY: y }], cancelable: true, preventDefault: vi.fn() })
    return { close, swipe, touch }
  }
  it('closes leftward horizontal swipes and preserves vertical gestures, taps and right swipes', () => {
    const { swipe, touch, close } = setup()
    for (const [x, y] of [[80, 280], [210, 80], [230, 100], [500, 80]]) {
      swipe.start(touch(250, 80)); swipe.move(touch(x, y)); swipe.end(touch(x, y))
    }
    expect(close).not.toHaveBeenCalled()
    swipe.start(touch(250, 80))
    const move = touch(100, 90)
    swipe.move(move); expect(move.preventDefault).toHaveBeenCalledOnce()
    swipe.end(move); expect(close).toHaveBeenCalledOnce()
  })
  it('locks the vertical axis and cancels multi-touch/opt-out/disabled gestures', () => {
    const { swipe, touch, close } = setup()
    swipe.start(touch(250, 80)); swipe.move(touch(250, 100)); swipe.end(touch(50, 100))
    swipe.start(touch(250, 80)); swipe.move({ touches: [{}, {}] }); swipe.end(touch(50, 80))
    swipe.start({ ...touch(250, 80), target: { closest: () => ({}) } }); swipe.end(touch(50, 80))
    expect(close).not.toHaveBeenCalled()
    const disabled = setup(false)
    disabled.swipe.start(disabled.touch(250, 80)); disabled.swipe.end(disabled.touch(50, 80))
    expect(disabled.close).not.toHaveBeenCalled()
  })
})
