import { describe, it, expect } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import BlurBackdrop from '../src/components/BlurBackdrop.vue'
import { blurFilter, backdropBlurStyle, applyBackdropBlur } from '../src/lib/blur.js'

describe('shared blur effects', () => {
  it('supports pixel radii, CSS variables, zero and safe numeric bounds', () => {
    expect(blurFilter(16)).toBe('blur(16px)')
    expect(blurFilter('var(--chrome-blur)')).toBe('blur(var(--chrome-blur))')
    expect(blurFilter(0)).toBe('blur(0px)')
    expect(blurFilter(-4)).toBe('blur(0px)')
    expect(blurFilter(Infinity)).toBe('blur(0px)')
  })
  it('keeps the standard property outside CSS minification and preserves unrelated styles', () => {
    const properties = new Map([['opacity', '.5']])
    const target = { style: { setProperty: (name, value) => properties.set(name, value) } }
    applyBackdropBlur(target, 6)
    expect(properties.get('backdrop-filter')).toBe('blur(6px)')
    expect(properties.get('-webkit-backdrop-filter')).toBe('blur(6px)')
    expect(properties.get('opacity')).toBe('.5')
    applyBackdropBlur(target, 0)
    expect(properties.get('backdrop-filter')).toBe('blur(0px)')
    expect(() => applyBackdropBlur(null, 8)).not.toThrow()
  })
  it('renders a decorative surface with inline standard and prefixed filters', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(BlurBackdrop, { radius: 'var(--chrome-blur)', class: 'consumer-surface' }) }))
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('consumer-surface')
    expect(html).toContain('backdrop-filter:blur(var(--chrome-blur))')
    expect(html).toContain('-webkit-backdrop-filter:blur(var(--chrome-blur))')
    expect(backdropBlurStyle(8)).toEqual({ 'backdrop-filter': 'blur(8px)', '-webkit-backdrop-filter': 'blur(8px)' })
  })
})
