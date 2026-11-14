import {createApp,h} from 'vue'
import {ActionButton} from '../../dist/share-ui.js'
import '../../dist/share-ui.css'
const colors=['color-mix(in srgb,var(--info) 88%,var(--text-1))','var(--warning)','color-mix(in srgb,var(--danger) 75%,var(--text-1))']
createApp({render:()=>h('main',{style:'background:var(--surface);padding:20px;display:flex;gap:8px'},colors.map((color,index)=>h(ActionButton,{variant:'secondary',iconOnly:true,'aria-label':`Action ${index}`,style:{'--action-button-bg':'var(--surface-active)','--action-button-fg':color,'--action-button-hover-bg':`color-mix(in srgb,${color} 7%,var(--surface-active))`,'--action-button-hover-fg':color}}, {icon:()=>h('svg',{viewBox:'0 0 24 24',width:18,height:18},h('path',{d:'M4 12h16M12 4v16',stroke:'currentColor'}))}))) }).mount('#app')
