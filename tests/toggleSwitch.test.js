import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import ToggleSwitch from '../src/components/ToggleSwitch.vue'

const render = props => renderToString(createSSRApp({ render: () => h(ToggleSwitch, { label: 'Option', ...props }, { default: () => h('span', { 'data-row-content': '' }, 'Whole row') }) }))
it('exposes a single labelled switch for a raised full row with a trailing track', async () => {
  const html = await render({ block: true, surface: 'raised', trackPlacement: 'end', modelValue: false })
  expect(html.match(/role="switch"/g)).toHaveLength(1)
  expect(html).toContain('aria-label="Option"')
  expect(html).toContain('aria-checked="false"')
  expect(html).toContain('share-toggle-switch--raised')
  expect(html).toContain('share-toggle-switch--block')
  expect(html).toContain('share-toggle-switch--trailing-track')
  expect(html).toContain('data-row-content')
})
it('keeps the default surface and existing active/disabled semantics', async () => {
  const html = await render({ modelValue: true, disabled: true })
  expect(html).toContain('share-toggle-switch--active')
  expect(html).toContain('aria-checked="true"')
  expect(html).toContain('disabled')
  expect(html).not.toContain('share-toggle-switch--raised')
  expect(html).not.toContain('share-toggle-switch--block')
})
