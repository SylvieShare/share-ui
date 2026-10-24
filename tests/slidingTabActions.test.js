import {createSSRApp,h} from 'vue'
import {renderToString} from 'vue/server-renderer'
import {expect,it} from 'vitest'
import SlidingTabs from '../src/components/SlidingTabs.vue'
it('keeps tab actions beside navigation buttons without nesting interactive controls',async()=>{
 const html=await renderToString(createSSRApp({render:()=>h(SlidingTabs,{tabs:[{key:'a',title:'First',id:'tab-a',panelId:'panel'}],modelValue:'a',maxTabWidth:180},{'tab-actions':({tab})=>h('button',{'aria-label':`Rename ${tab.title}`},'Edit')})}))
 expect(html).toContain('role="tab"')
 expect(html).toContain('aria-selected="true"')
 expect(html).toContain('aria-controls="panel"')
 expect(html).toContain('--sliding-tab-max-width:180px')
 expect(html).toMatch(/<\/button>[\s\S]*<button aria-label="Rename First"/)
 expect(html).not.toMatch(/<button[^>]*>[\s\S]*?<button[^>]*>[\s\S]*?<\/button>[\s\S]*?<\/button>/)
})
