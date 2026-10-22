import {createSSRApp,h} from 'vue'
import {renderToString} from 'vue/server-renderer'
import {expect,it} from 'vitest'
import BaseTile from '../src/components/BaseTile.vue'
const render=props=>renderToString(createSSRApp({render:()=>h(BaseTile,props,()=>h('button','Action'))}))
it('keeps the default solid surface and its content unchanged',async()=>{
 const html=await render({framed:true});expect(html).not.toContain('base-tile--glass');expect(html).toContain('base-tile--framed');expect(html).toContain('<button>Action</button>')
})
it('combines the glass surface with framing, tint and interaction without replacing slots',async()=>{
 for(const props of [{framed:true},{tint:true,interactive:true}]){
  const html=await render({...props,surface:'glass'});expect(html).toContain('base-tile--glass');expect(html).toContain('backdrop-filter:blur(14px)');expect(html).toContain('<button>Action</button>');expect(html).not.toContain('surface="glass"')
 }
})
