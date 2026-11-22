import { describe, expect, it } from 'vitest'
import selectorParser from 'postcss-selector-parser'
import { canShowHoverHint, installPointerInput, pointerHoverCss } from '../src/lib/pointerInput.js'

const attribute = 'data-share-no-hover'

function fixture(pointerCanHover) {
  const attributes = new Set()
  const root = {
    hasAttribute: name => attributes.has(name),
    toggleAttribute: (name, enabled) => enabled ? attributes.add(name) : attributes.delete(name),
  }
  const host = Object.assign(new EventTarget(), {
    document: { documentElement: root },
    matchMedia: () => ({ matches: pointerCanHover }),
  })
  function pointer(name, type) {
    host.dispatchEvent(Object.assign(new Event(name), { pointerType: type }))
  }
  return { host, pointer, noHover: () => root.hasAttribute(attribute) }
}

describe('pointer input', () => {
  it('uses the actual mouse and touch or pen input on a hybrid viewport', () => {
    const { host, pointer, noHover } = fixture(true)
    const remove = installPointerInput(host)
    expect(noHover()).toBe(false)
    pointer('pointerdown', 'touch')
    pointer('pointerup', 'touch')
    expect(noHover()).toBe(true)
    pointer('pointermove', 'mouse')
    expect(noHover()).toBe(false)
    pointer('pointerdown', 'pen')
    pointer('pointercancel', 'pen')
    expect(noHover()).toBe(true)
    remove()
    expect(noHover()).toBe(false)
  })

  it('keeps keyboard hints and ignores focus from tapping a button', () => {
    expect(canShowHoverHint({ pointerType: 'mouse' })).toBe(true)
    expect(canShowHoverHint({ pointerType: 'touch' })).toBe(false)
    expect(canShowHoverHint({ type: 'focus', currentTarget: { matches: s => s === ':focus-visible' } })).toBe(true)
    expect(canShowHoverHint({ type: 'focus', currentTarget: { matches: () => false } })).toBe(false)
  })

  it('guards only hover, including nested selectors, without repeating the gate', () => {
    const plugin = pointerHoverCss(selectorParser)
    const rule = { selector: '.card:hover > .item:is(:hover,:active),.card:not(:hover),[title=":hover"],.item:focus-visible' }
    const gate = ':where(:not(:root[data-share-no-hover], :root[data-share-no-hover] *))'
    plugin.Rule(rule)
    const result = `.card:hover${gate} > .item:is(:hover${gate},:active),.card:not(:hover${gate}),[title=":hover"],.item:focus-visible`
    expect(rule.selector).toBe(result)
    plugin.Rule(rule)
    expect(rule.selector).toBe(result)
  })
})
