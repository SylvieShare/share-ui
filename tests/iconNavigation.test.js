import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import IconNavigation from '../src/components/IconNavigation.vue'
import { compactNavigationRects, navigationFocusKey, navigationSelectionRect } from '../src/lib/iconNavigation.js'

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

it('can reduce the item height while retaining its caption width', async () => {
  const render = props => renderToString(createSSRApp({ render: () => h(IconNavigation, { items, label: 'Sections', ...props }) }))
  expect(await render({})).toContain('--icon-navigation-height:56px')
  const rectangular = await render({ size: 56, height: 48 })
  expect(rectangular).toContain('--icon-navigation-size:56px')
  expect(rectangular).toContain('--icon-navigation-height:48px')
  expect(await render({ radius: 8 })).toContain('--icon-navigation-radius:8px')
  expect(await render({ radius: 0 })).toContain('--icon-navigation-radius:0px')
  expect(await render({ radius: 'var(--r-md)' })).toContain('--icon-navigation-radius:var(--r-md)')
  expect(await render({})).not.toContain('--icon-navigation-radius:')
})

it('offers a pill appearance without changing selection semantics or the default', async () => {
  const render = props => renderToString(createSSRApp({ render: () => h(IconNavigation, { items, modelValue:'build', label:'Sections', ...props }) }))
  const pill = await render({pill:true})
  expect(pill).toContain('share-icon-navigation--pill')
  expect(pill).toContain('aria-pressed="true"')
  expect(await render({})).not.toContain('share-icon-navigation--pill')
})

it('supports inline labels and a continuous compact selection without committing it', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(IconNavigation, {
    items: items.filter(item => !item.disabled), modelValue: 'build', label: 'Sections',
    layout: 'compact', size: 44, height: 48, selection: [.6, .4], animate: false,
  }) }))
  expect(html).toContain('share-icon-navigation--compact')
  expect(html).toContain('--icon-navigation-selection:0.6')
  expect(html).toContain('--icon-navigation-selection:0.4')
  expect(html.match(/aria-current="page"/g)).toHaveLength(1)
  expect(html).toContain('share-icon-navigation--instant')
  const inline = await renderToString(createSSRApp({ render: () => h(IconNavigation, {
    items, modelValue: 'build', label: 'Sections', layout: 'inline', iconSize: 28, labelSize: 14,
  }) }))
  expect(inline).toContain('share-icon-navigation--inline')
  expect(inline).toContain('--icon-navigation-icon-size:28px')
  expect(inline).toContain('--icon-navigation-label-size:14px')
})

it('keeps other buttons stationary while selection crosses the compact midpoint', () => {
  const layout = { width: 334, start: 4, end: 4, gap: 2, minimum: 44, selected: 84, maximum: 148 }
  const frames = [0, .49, .5, .51, 1].map(p => compactNavigationRects([1-p,p,0,0,0,0,0,0], layout))
  for (const frame of frames.slice(1)) expect(frame[2]).toEqual(frames[0][2])
  expect(frames[3][0].width - frames[1][0].width).toBeCloseTo(-.8)
  expect(navigationSelectionRect([{x:4,y:4,width:84,height:48},{x:90,y:4,width:44,height:48}], [.5,.5]))
    .toEqual({x:47,y:4,width:64,height:48})
  expect(compactNavigationRects([], layout)).toEqual([])
})
