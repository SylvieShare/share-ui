import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import AvatarFrame from '../src/components/AvatarFrame.vue'
const render = (props, slot) => renderToString(createSSRApp({ render: () => h(AvatarFrame, props, slot) }))
it('renders decorative images in a fixed frame without a duplicate accessible image', async () => {
  const html = await render({ src:'/portrait.png', size:32 })
  expect(html).toContain('--avatar-frame-size:32px')
  expect(html).toContain('aria-hidden="true"')
  expect(html).toContain('alt="" draggable="false"')
  expect(html).not.toContain('role="img"')
})
it('supports named frames and independent crop settings', async () => {
  const html = await render({ src:'/wide.png', size:'var(--person-size)', radius:8, fit:'contain', position:'center top', label:'Alex' })
  expect(html).toContain('role="img" aria-label="Alex"')
  expect(html).toContain('--avatar-frame-size:var(--person-size)')
  expect(html).toContain('--avatar-frame-radius:8px')
  expect(html).toContain('--avatar-frame-fit:contain')
  expect(html).toContain('--avatar-frame-position:center top')
})
it('uses the caller fallback when no source is available', async () => {
  const html = await render({}, () => h('b','A'))
  expect(html).toContain('avatar-frame-fallback')
  expect(html).toContain('<b>A</b>')
  expect(html).not.toContain('<img')
})
