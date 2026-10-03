import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import TimelineGroup from '../src/components/TimelineGroup.vue'
import SectionLabel from '../src/components/SectionLabel.vue'

describe('timeline presentation', () => {
  it('renders identity, content and a full-width footer in reading order', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(TimelineGroup, { sticky: true, railWidth: '25%', color: 'var(--success)' }, {
      identity: () => h('strong', 'Identity'), default: () => h('p', 'Event body'), footer: () => h('form', 'Editor'),
    }) }))
    expect(html.indexOf('Identity')).toBeLessThan(html.indexOf('Event body'))
    expect(html.indexOf('Event body')).toBeLessThan(html.indexOf('Editor'))
    expect(html).toContain('share-timeline-group__footer')
    expect(html).toContain('--timeline-rail-width:25%')
    expect(html).toContain('--timeline-color:var(--success)')
    expect(html).toContain('share-timeline-group--sticky')
  })
  it('does not create an empty editor area or require a separator', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(TimelineGroup, { separated: false }, { default: () => 'Content' }) }))
    expect(html).not.toContain('share-timeline-group__footer')
    expect(html).not.toContain('share-timeline-group--separated')
    expect(html).toContain('Content')
  })
  it('lets a section line connect its title and trailing count without changing defaults', async () => {
    const render = line => renderToString(createSSRApp({ render: () => h(SectionLabel, { title: 'History', line }, { actions: () => h('span', '12') }) }))
    const html = await render(true)
    expect(html.indexOf('History')).toBeLessThan(html.indexOf('share-section-label__line'))
    expect(html.indexOf('share-section-label__line')).toBeLessThan(html.indexOf('>12<'))
    expect(await render(false)).not.toContain('share-section-label__line')
  })
})
