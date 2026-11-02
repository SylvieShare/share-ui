import { createApp, h, ref } from 'vue'
import { BlurBackdrop, BaseTile, AppModal } from '../../dist/share-ui.js'
import '../../dist/share-ui.css'
createApp({ setup() {
  const radius = ref(8), open = ref(false), opened = ref(false), clicks = ref(0), glass = ref(true)
  return () => h('main', [
    h('button', { onClick: () => radius.value = 16 }, 'Radius 16'),
    h('button', { onClick: () => radius.value = 0 }, 'Radius 0'),
    h('button', { onClick: () => glass.value = false }, 'Solid surface'),
    h('button', { onClick: () => { opened.value = false; open.value = true } }, 'Open modal'),
    h('div', { style: 'position:relative;height:160px' }, [
      h('button', { onClick: () => clicks.value++ }, 'Background action'),
      h('p', 'Ordinary content behind the blurred surface'),
      h(BlurBackdrop, { radius: radius.value, class: 'tested-backdrop' }),
    ]),
    h('output', { 'aria-label': 'Clicks' }, String(clicks.value)),
    h(BaseTile, { surface: glass.value ? 'glass' : 'solid', class: 'tested-glass' }, () => 'Glass surface'),
    opened.value && h('p', { role: 'status' }, 'Modal opened'),
    open.value && h(AppModal, { ariaLabel: 'Shared blur modal', onOpened: () => opened.value = true, onClose: () => open.value = false }, () => h('button', { onClick: () => open.value = false }, 'Close modal')),
  ])
} }).mount('#app')
