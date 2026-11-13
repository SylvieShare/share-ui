import {createSSRApp,h} from 'vue'
import {renderToString} from 'vue/server-renderer'
import {expect,it} from 'vitest'
import BaseTile from '../src/components/BaseTile.vue'
const render=props=>renderToString(createSSRApp({render:()=>h(BaseTile,props,()=>h('button','Action'))}))
it('can remove the neutral outline while keeping a standalone surface',async()=>{
 expect(await render({})).toContain('base-tile--outlined')
 const html=await render({outlined:false,interactive:true})
 expect(html).not.toContain('base-tile--outlined');expect(html).toContain('base-tile--interactive');expect(html).toContain('<button>Action</button>')
})
it('keeps the default solid surface and its content unchanged',async()=>{
 const html=await render({framed:true});expect(html).not.toContain('base-tile--glass');expect(html).toContain('base-tile--framed');expect(html).toContain('<button>Action</button>')
})
it('combines the glass surface with framing, tint and interaction without replacing slots',async()=>{
 for(const props of [{framed:true},{tint:true,interactive:true}]){
  const html=await render({...props,surface:'glass'});expect(html).toContain('base-tile--glass');expect(html).toContain('backdrop-filter:blur(14px)');expect(html).toContain('<button>Action</button>');expect(html).not.toContain('surface="glass"')
 }
})

it('supports a stronger accent frame while clamping its width',async()=>{
 expect(await render({framed:true,frameWidth:2})).toContain('--tile-frame-width:2px')
 expect(await render({framed:true,frameWidth:99})).toContain('--tile-frame-width:4px')
 expect(await render({framed:true})).toContain('--tile-frame-width:1px')
})

it('supports detached elevated surfaces without changing the default or slot content',async()=>{
 expect(await render({})).not.toContain('base-tile--elevated')
 for(const props of [{outlined:false},{outlined:true,interactive:true},{framed:true,interactive:true}]){
  const html=await render({...props,elevated:true})
  expect(html).toContain('base-tile--elevated');expect(html).toContain('<button>Action</button>');expect(html).not.toContain('elevated="')
 }
})
