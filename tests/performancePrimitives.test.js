import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import { StatBar, IconPicker, DetailSection, ContentRow, OptionList } from '../src/index.js'
import { virtualListOffsets, virtualListRange } from '../src/lib/virtualListLayout.js'
const render = (component, props, slots) => renderToString(createSSRApp({ render: () => h(component, props, slots) }))
it('clamps meter segments and exposes its value', async () => {
  const html = await render(StatBar, { percent: 120, tempPercent: 50, label: 'Capacity' })
  expect(html).toContain('aria-valuenow="100"')
  expect(html).toContain('aria-label="Capacity"')
  expect(html).not.toContain('class="stat-bar-temp"')
})
it('exposes selected and disabled icon options', async () => {
  const html = await render(IconPicker, { label: 'Icon', modelValue: 'a', options: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta', disabled: true }] })
  expect(html).toContain('aria-pressed="true"')
  expect(html).toContain('aria-label="Beta"')
  expect(html).toContain('disabled')
})
it('links a collapsible heading to its hidden content', async () => {
  const html = await render(DetailSection, { label: 'Details', collapsible: true, defaultOpen: false }, () => 'Body')
  expect(html).toContain('aria-expanded="false"')
  expect(html).toContain('aria-controls=')
  expect(html).toContain('display:none')
})
it('renders a selectable row on one root with slotted content', async () => {
  const html = await render(ContentRow, { title: 'Item', interactive: true, selected: true }, { icon: () => 'ICON', metric: () => 'METRIC' })
  expect(html).toContain('role="button"'); expect(html).toContain('tabindex="0"'); expect(html).toContain('aria-current="true"')
  expect(html).toContain('ICON'); expect(html).toContain('METRIC')
  expect((html.match(/class="oli /g) || []).length).toBe(1)
})
it('provides stable option IDs for combobox keyboard navigation', async () => {
  const html = await render(OptionList, { id: 'options', options: [{ value: 'a', label: 'Alpha' }], activeIndex: 0 })
  expect(html).toContain('id="options-0"'); expect(html).toContain('role="option"'); expect(html).toContain('aria-selected="true"')
})
it('windows a long list and measures variable-height groups without losing the end', () => {
  const rows = Array.from({ length: 2000 }, (_, id) => ({ id }))
  const offsets = virtualListOffsets(rows, row => row.id, () => 70, new Map([[0, 38], [1, 140]]))
  expect(offsets.slice(0, 4)).toEqual([0, 38, 178, 248])
  const first = virtualListRange(offsets, 0, 640, 6)
  expect(first.end - first.start).toBeLessThan(25)
  const last = virtualListRange(offsets, 999999, 640, 6)
  expect(last.end).toBe(2000)
  expect(last.end - last.start).toBeLessThan(25)
  expect(virtualListRange([0], 10, 640)).toEqual({ start: 0, end: 0 })
})
