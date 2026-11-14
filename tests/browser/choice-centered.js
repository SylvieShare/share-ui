import { createApp, h } from 'vue'
import { ChoiceCard } from '../../dist/share-ui.js'
import '../../dist/share-ui.css'
const width = Number(new URLSearchParams(location.search).get('width')) || 320
createApp({render: () => h('main', {style:{width:width+'px',display:'grid',gap:'12px'}}, [false,true].flatMap(centered => ['', 'Short explanation'].map(description =>
  h(ChoiceCard,{layout:'inline',centered,selectionIndicator:'outline',label:'Centered choice',description,'data-centered':String(centered)},
    {icon:()=>h('svg',{viewBox:'0 0 24 24'},[h('path',{d:'M3 12h18',stroke:'currentColor'})])})
))) }).mount('#app')
