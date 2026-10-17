import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import IconToggleButton from '../src/components/IconToggleButton.vue'
import SectionLabel from '../src/components/SectionLabel.vue'
it('renders a labelled, coloured pressed state and a disabled off state with a stable slash path', async () => {
  const render = props => renderToString(createSSRApp({ render: () => h(IconToggleButton, { label: 'Toggle', color: 'var(--success)', ...props }, { icon: () => h('svg', { 'data-icon': 'example' }) }) }))
  const on = await render({ modelValue: true })
  expect(on).toContain('aria-pressed="true"')
  expect(on).toContain('aria-label="Toggle"')
  expect(on).toContain('--icon-toggle-color:var(--success)')
  expect(on).toContain('data-icon="example"')
  expect(on).toContain('pathLength="1"')
  const off = await render({ modelValue: false, disabled: true })
  expect(off).toContain('aria-pressed="false"')
  expect(off).toContain('disabled')
  expect(off).not.toContain('share-icon-toggle--on')
})
it('places a full section border before its title with an explicit content inset', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(SectionLabel, { title: 'Title', border: true, borderPosition: 'before', inset: 14 }) }))
  expect(html).toContain('share-section-label--before')
  expect(html).toContain('padding-inline:14px')
})
