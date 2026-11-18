import { createApp, h, onMounted, reactive } from 'vue'
import FitContent from '../../src/components/FitContent.vue'
import '../../dist/share-ui.css'
const state = reactive({ width: 160, count: 4, visible: true, mounts: 0, clicks: 0 })
window.fitState = state
const Probe = { setup() { onMounted(() => { state.mounts++ }); return () => h('button', { onClick: () => state.clicks++, style: 'width:36px;height:36px;flex:none' }, 'Action') } }
createApp({ render: () => h('main', { style: 'padding:20px' }, [h('div', { style: { width: `${state.width}px`, display: state.visible ? 'block' : 'none' } }, [
  h(FitContent, { ref: value => { window.fitComponent = value } }, { default: () => h('div', { class: 'row' }, [
    ...Array.from({ length: state.count }, (_, n) => h('span', { class: 'box', key: n }, n + 1)),
    h(FitContent, { inline: true }, { default: () => h(Probe) }),
  ]) }),
])]) }).mount('#app')
const style = document.createElement('style')
style.textContent = '.row{display:flex;flex-wrap:var(--fit-content-wrap,wrap);gap:8px}.box{display:block;flex:none;width:42px;height:42px;background:#8970c8}'
document.head.append(style)
