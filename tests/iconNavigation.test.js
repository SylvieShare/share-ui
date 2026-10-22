import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import IconNavigation from '../src/components/IconNavigation.vue'
import { navigationFocusKey } from '../src/lib/iconNavigation.js'

const items = [{ key: 'build', label: 'Build', icon: { render: () => h('svg') } }, { key: 'hidden', label: 'Hidden', disabled: true }, { key: 'settings', label: 'Full settings', shortLabel: 'Settings', divider: true, dividerLabel: 'Tools', attrs: { 'data-target': 'settings' } }]
it('keeps full accessible names, visible captions, consumer targets and group separators in both orientations', async () => {
  for (const orientation of ['vertical', 'horizontal']) {
    const html = await renderToString(createSSRApp({ render: () => h(IconNavigation, {items, orientation, modelValue: 'settings', label: 'Sections'}) }))
    expect(html).toContain('aria-label="Full settings"')
    expect(html.replace(/<!--[\s\S]*?-->/g, '')).toContain('>Settings</span>')
    expect(html).toContain('aria-current="page"')
    expect(html).toContain('data-target="settings"')
    expect(html).toContain(`aria-orientation="${orientation === 'vertical' ? 'horizontal' : 'vertical'}"`)
    expect(html).toContain('disabled')
  }
})
it('skips disabled buttons, wraps and moves focus only on its own axis', () => {
  expect(navigationFocusKey(items, 'build', 'ArrowDown', 'vertical')).toBe('settings')
  expect(navigationFocusKey(items, 'settings', 'ArrowDown', 'vertical')).toBe('build')
  expect(navigationFocusKey(items, 'build', 'ArrowLeft', 'horizontal')).toBe('settings')
  expect(navigationFocusKey(items, 'build', 'ArrowDown', 'horizontal')).toBeNull()
  expect(navigationFocusKey(items, 'build', 'End', 'vertical')).toBe('settings')
  expect(navigationFocusKey([], 'build', 'Home', 'vertical')).toBeNull()
})
it('can retain the current section while its panel is collapsed', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(IconNavigation, {items, active:false, modelValue:'build', label:'Sections'}) }))
  expect(html).not.toContain('aria-current="page"')
  expect(html).not.toContain('aria-pressed="true"')
})
