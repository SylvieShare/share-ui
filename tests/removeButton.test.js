import { describe, expect, it } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import RemoveButton from '../src/components/RemoveButton.vue'

const render = props => renderToString(createSSRApp(RemoveButton, { label: 'Удалить запись', ...props }))
describe('RemoveButton icons', () => {
  it('keeps the existing cross by default', async () => {
    const html = await render({})
    expect(html).toContain('share-remove-button__cross')
    expect(html).not.toContain('<svg')
  })
  it('renders a decorative trash icon with the same accessible button contract', async () => {
    const html = await render({ icon: 'trash', variant: 'boxed', disabled: true })
    expect(html).toContain('<svg')
    expect(html).not.toContain('share-remove-button__cross')
    expect(html).toContain('aria-label="Удалить запись"')
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('type="button"')
    expect(html).toContain('disabled')
    expect(html).toContain('share-remove-button--boxed')
  })
})
