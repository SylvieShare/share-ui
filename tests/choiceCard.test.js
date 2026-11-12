import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import ChoiceCard from '../src/components/ChoiceCard.vue'

it.each([false, true])('supports outline selection without a redundant checkmark (selected: %s)', async selected => {
  const html = await renderToString(createSSRApp({ render: () => h(ChoiceCard, {
    label: 'Outlined choice', selectionIndicator: 'outline', modelValue: selected,
  }) }))
  expect(html).toContain('share-choice-card--outlined-selection')
  expect(html).toContain(`aria-pressed="${selected}"`)
  expect(html).not.toContain('share-choice-card__check')
})

it('supports semantic tint and centered icon content without requiring an explanation', async () => {
  const html = await renderToString(createSSRApp({ render: () => h(ChoiceCard, {
    layout: 'icon', label: 'Colored choice', tinted: true, centered: true, color: 'var(--success)',
  }) }))
  expect(html).toContain('share-choice-card--tinted')
  expect(html).toContain('share-choice-card--centered')
  expect(html).toContain('aria-label="Colored choice"')
  expect(html).not.toContain('aria-describedby=')
})

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
