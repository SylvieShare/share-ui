import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { FormActionButtons, LoadingIndicator, LoadingState, SkeletonBlock } from '../src/index.js'

describe('loading primitives', () => {
  it('announces the supplied label once and supports visible labels and sizes', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(LoadingIndicator, { label: 'Loading sheet', size: 'lg', showLabel: true }) }))
    expect(html).toContain('role="status"')
    expect(html).toContain('aria-label="Loading sheet"')
    expect(html).toContain('--loading-size:104px')
    expect(html).toMatch(/aria-hidden="true"[^>]*>Loading sheet<\/span>/)
  })
  it('supports compact regions and small inline indicators', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(LoadingState, { label: 'Fetching', compact: true }) }))
    expect(html).toContain('aria-busy="true"')
    expect(html).toContain('share-loading--inline')
    expect(html).toContain('--loading-size:32px')
    expect((html.match(/role="status"/g) || []).length).toBe(1)
  })
  it('keeps form submission disabled and shows its pending label', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(FormActionButtons, { loading: true, loadingText: 'Saving' }) }))
    expect(html).toContain('aria-busy="true"')
    expect(html).toContain('disabled')
    expect(html).toContain('Saving')
    expect(html).toContain('--loading-size:16px')
  })
  it('keeps skeleton shapes decorative and preserves caller dimensions', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(SkeletonBlock, { width: '32px', height: '32px', round: true }) }))
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('share-skeleton--round')
    expect(html).toContain('width:32px;height:32px')
    expect(html).not.toContain('role="status"')
  })
})
