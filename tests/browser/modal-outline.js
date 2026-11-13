import { createApp, h, ref } from 'vue'
import { AppModal, AppModalFrame } from '../../dist/share-ui.js'
import '../../dist/share-ui.css'

createApp({ setup() {
  const opened = ref(null)
  return () => [
    ...['modal', 'frame'].flatMap(kind => [true, false].map(outlined => h('button', {
      onClick: () => { opened.value = { kind, outlined } },
    }, `${kind} ${outlined ? 'default' : 'borderless'}`))),
    opened.value && h(opened.value.kind === 'frame' ? AppModalFrame : AppModal, {
      ...(opened.value.outlined ? {} : { outlined: false }),
      ...(opened.value.kind === 'frame' ? { title: 'Example' } : { ariaLabel: 'Example' }),
      onClose: () => { opened.value = null },
    }, () => h('p', 'Modal content')),
  ]
} }).mount('#app')
