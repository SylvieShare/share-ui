import {createApp,h,ref} from 'vue'
import {FormTextInput,FormTextarea,FormSelect,FormNumberInput,ToggleSwitch,CompactCheckbox,MultiToggle,AddButton} from '../../dist/share-ui.js'
import '../../dist/share-ui.css'
createApp({setup(){const name=ref(''), number=ref(12), checked=ref(false), calls=ref(0)
return ()=>h('main',{style:'padding:24px;max-width:700px;display:grid;gap:14px'},[
h(FormTextInput,{value:name.value,'onUpdate:value':v=>name.value=v,'aria-label':'Name'}),
h(FormTextInput,{value:'','aria-label':'Invalid',invalid:true}),
h(FormTextarea,{value:'','aria-label':'Notes'}),
h(FormSelect,{value:'a','aria-label':'Choice'},{default:()=>[h('option',{value:'a'},'Alpha')]}),
h(FormNumberInput,{value:number.value,live:true,onChange:v=>{number.value=v;calls.value++},'aria-label':'Number'}),
h(ToggleSwitch,{modelValue:checked.value,'onUpdate:modelValue':v=>checked.value=v,label:'Toggle'}),
h(CompactCheckbox,{modelValue:checked.value,'onUpdate:modelValue':v=>checked.value=v,label:'Check'}),
h(MultiToggle,{modelValue:'a',options:[{value:'a',label:'Alpha'},{value:'b',label:'Beta'}]}),
h(AddButton,{label:'Add entry'}),h('output',{'data-testid':'value'},String(number.value)),h('output',{'data-testid':'calls'},String(calls.value))])}}).mount('#app')
