import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it, vi } from 'vitest'
import ColorPresetPicker from '../src/components/floating/ColorPresetPicker.vue'
vi.stubGlobal('document', { removeEventListener() {} })
vi.stubGlobal('window', { removeEventListener() {} })
it('renders an accessible split color trigger with a replaceable icon, preserving the default swatch', async () => {
  const render = props => renderToString(createSSRApp({ render: () => h(ColorPresetPicker, { modelValue: '#22c55e', ariaLabel: 'Area color', ...props }, { icon: () => h('svg', { 'data-custom-icon': '' }) }) }))
  const button = await render({ variant: 'button' })
  expect(button).toContain('cpp-button-color')
  expect(button).toContain('data-custom-icon')
  expect(button).toContain('aria-haspopup="dialog"')
  expect(button).toContain('aria-expanded="false"')
  expect(button).toContain('aria-label="Area color"')
  expect(button).toContain('background:#22c55e')
  const swatch = await render({})
  expect(swatch).toContain('cpp-swatch')
  expect(swatch).not.toContain('cpp-button-color')
})
