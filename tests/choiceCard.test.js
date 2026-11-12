import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import ChoiceCard from '../src/components/ChoiceCard.vue'

it.each(['stacked', 'inline', 'icon'])('exposes the choice and its explanation in the %s layout', async layout => {
  const html = await renderToString(createSSRApp({
    render: () => h(ChoiceCard, {
      layout, label: 'Option', description: 'Explanation', modelValue: true,
    }, { icon: () => h('svg', { 'data-option-icon': '' }) }),
  }))
  expect(html).toContain('aria-label="Option"')
  expect(html).toContain('aria-pressed="true"')
  const descriptionId = html.match(/aria-describedby="([^"]+)"/)?.[1]
  expect(descriptionId).toBeTruthy()
  const descriptionAttrs = html.match(/<span\b([^>]+)>Explanation<\/span>/)?.[1]
  expect(descriptionAttrs).toContain(`id="${descriptionId}"`)
  expect(html).toContain('data-option-icon')
})
