import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import StatBar from '../src/components/StatBar.vue'

it('renders a compact accessible meter and limits the secondary segment to the remaining space', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(StatBar, {
    size: 'compact', label: 'Progress', percent: 75, tempPercent: 40,
  }) }))
  expect(html).toContain('stat-bar--compact')
  expect(html).toContain('role="meter"')
  expect(html).toContain('aria-label="Progress"')
  expect(html).toContain('aria-valuenow="75"')
  expect(html).toMatch(/class="stat-bar-temp"[^>]*style="[^"]*left:75%;width:25%/)
  expect(html).not.toContain('stat-bar--decorated')
})
