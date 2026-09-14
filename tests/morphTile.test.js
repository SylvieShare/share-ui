import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import MorphTile from '../src/components/MorphTile.vue'
import BaseTile from '../src/components/BaseTile.vue'
import TileAccentStrip from '../src/components/TileAccentStrip.vue'
const render = (component, props, slots) => renderToString(createSSRApp({ render: () => h(component, props, slots) }))
it('renders the same optional header on a surface and an embedded morph preview', async () => {
  for (const embedded of [false, true]) {
    const html = await render(MorphTile, { embedded, title: 'Resources', showEdit: true, editLabel: 'Edit' }, { default: () => 'Content', aside: () => h('button', 'Reset') })
    expect(html).toContain('aria-label="Edit: Resources"')
    expect(html).toContain('morph-tile-pencil')
    expect(html).toContain('Reset')
    expect(html.includes('base-tile ')).toBe(!embedded)
  }
})
it('supports a title without editing and content without a header', async () => {
  expect(await render(MorphTile, { title: 'Read only' }, () => 'Body')).not.toContain('morph-tile-pencil')
  expect(await render(MorphTile, {}, () => 'Body')).not.toContain('class="morph-tile-header"')
})
it('disables the edit trigger while the preview is revealed', async () => {
  const html = await render(MorphTile, { title: 'Resources', showEdit: true, editLabel: 'Edit', editFade: true })
  expect(html).toContain('disabled')
  expect(html).toContain('morph-tile-pencil--hidden')
})
it('composes an optional standalone strip without adding one to BaseTile', async () => {
  expect(await render(BaseTile, {}, () => 'Body')).not.toContain('tile-accent-strip')
  expect(await render(BaseTile, {}, () => h(TileAccentStrip))).toContain('aria-hidden="true"')
})
