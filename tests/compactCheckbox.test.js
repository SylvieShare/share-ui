import { describe, expect, it } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import CompactCheckbox from '../src/components/CompactCheckbox.vue'

describe('CompactCheckbox sizes', () => {
  it('renders mixed state with an independent 48px touch target',async()=>{
    const html=await renderToString(createSSRApp(CompactCheckbox,{label:'Select all',size:22,hitSize:48,indeterminate:true}))
    expect(html).toContain('aria-checked="mixed"')
    expect(html).toContain('--checkbox-hit-padding:13px')
    expect(html).toContain('share-compact-checkbox--mixed')
    expect(html).toContain('M2.5 6h7')
  })
  it.each([18, 24])('keeps selection and accessibility at %i px', async size => {
    const html = await renderToString(createSSRApp(CompactCheckbox, {
      label: 'Выбрать элемент', modelValue: true, disabled: true,
      ...(size === 18 ? {} : { size }),
    }))
    expect(html).toContain(`--checkbox-size:${size}px`)
    expect(html).toContain('aria-checked="true"')
    expect(html).toContain('aria-label="Выбрать элемент"')
    expect(html).toContain('disabled')
    expect(html).toContain('share-compact-checkbox__tick')
  })
})
