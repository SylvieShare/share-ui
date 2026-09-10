import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import SectionList from '../src/components/SectionList.vue'
import ActionMenu from '../src/components/floating/ActionMenu.vue'

const render = (props, slots) => renderToString(createSSRApp({ render: () => h(SectionList, props, slots) }))

describe('SectionList composition', () => {
  it('keeps wrapped menu rows directly inside the sortable list and the footer outside it', async () => {
    const html = await render({ title: 'Entries', listAttrs: { 'data-sortable-container': 'entries' } }, {
      default: () => [1, 2].map(key => h(ActionMenu, { key, block: true }, { trigger: () => h('article', { 'data-sortable-key': key }, `Row ${key}`) })),
      footer: () => h('button', 'Add entry'),
    })
    expect(html).toContain('base-tile');
    expect(html).toContain('aria-label="Entries"');
    expect(html).toContain('data-sortable-container="entries"');
    expect(html.match(/class="ram-custom-trigger/g)).toHaveLength(2);
    expect(html.indexOf('share-section-list__footer')).toBeGreaterThan(html.indexOf('Row 2'));
  })

  it('supports an embedded group and custom body without nested surfaces or unused rows', async () => {
    const html = await render({ embedded: true, compact: true }, {
      body: () => h('table', [h('tbody', [h('tr', [h('td', 'Table row')])])]),
      default: () => h('div', 'Unused row'),
    });
    expect(html).toContain('<section');
    expect(html).not.toContain('base-tile');
    expect(html).toMatch(/<table[ >]/);
    expect(html).not.toContain('Unused row');
    expect(html).not.toContain('share-section-list__header');
  })

  it('preserves keyed slot rows and sorting attributes with transitions', async () => {
    const html = await render({ transitionName: 'entry', listAttrs: { 'data-sortable-container': 'animated' } }, {
      default: () => [h('article', { key: 'first' }, 'First'), h('article', { key: 'second' }, 'Second')],
    });
    expect(html).toContain('data-sortable-container="animated"');
    expect(html.indexOf('First')).toBeLessThan(html.indexOf('Second'));
  })
})
