import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import ActionButton from '../src/components/ActionButton.vue'
it('defaults to a non-submitting button and disables a busy operation', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(ActionButton, { loading: true, loadingLabel: 'Wait' }, () => 'Run') }))
  expect(html).toContain('type="button"')
  expect(html).toContain('disabled')
  expect(html).toContain('aria-busy="true"')
  expect(html).toContain('Run')
})
