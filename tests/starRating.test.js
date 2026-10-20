import { createSSRApp,h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect,it } from 'vitest'
import StarRating from '../src/components/StarRating.vue'
const render=props=>renderToString(createSSRApp({render:()=>h(StarRating,{label:'Rating',...props})}))
it('renders one roving radio tab stop with localized options',async()=>{const html=await render({modelValue:3,optionLabels:['One','Two','Three','Four','Five']});expect(html).toContain('role="radiogroup"');expect(html.match(/role="radio"/g)).toHaveLength(5);expect(html.match(/tabindex="0"/g)).toHaveLength(1);expect(html).toContain('aria-label="Three" aria-checked="true"')})
it('renders a fractional read-only score without interactive controls',async()=>{const html=await render({modelValue:3.7,readonly:true,valueLabel:'3.7 out of 5'});expect(html).toContain('role="img"');expect(html).toContain('aria-label="3.7 out of 5"');expect(html).toContain('width:70');expect(html).not.toContain('<button')})
it('disables each editable option',async()=>{const html=await render({disabled:true});expect(html).toContain('aria-disabled="true"');expect(html.match(/ disabled/g)).toHaveLength(5)})
