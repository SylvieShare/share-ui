import { createApp, h, ref } from 'vue'
import { isSortableGestureActive, reorderByDrop, useSortable } from '../../dist/share-ui.js'
import '../../dist/share-ui.css'
const app = createApp({ setup() {
  const items = ref([{ uid: 'one' }, { uid: 'two' }, { uid: 'three' }])
  const drops = [], clicks = []
  const sortable = useSortable({ activationDelay: 350, groups: { rows: { items, layout: 'grid' } }, getKey: item => item.uid,
    onDrop: result => { drops.push(result.toIndex); items.value = reorderByDrop(items.value, result.fromIndex, result.toIndex) },
  })
  window.holdSort = { active: isSortableGestureActive, dragging: () => sortable.dragging.value, keys: () => items.value.map(item => item.uid), drops, clicks, unmount: () => app.unmount() }
  return () => h('main', { style: 'height:2400px;padding:20px' }, h('div', { 'data-sortable-container': 'rows', style: 'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;max-width:520px' }, items.value.map((item, index) => h('button', {
    'data-sortable-key': item.uid, 'data-sortable-slot': index, style: 'height:110px;touch-action:auto;user-select:none',
    onPointerdown: event => sortable.startDrag(event, item, 'rows', index),
    onClick: () => { if (!sortable.shouldSuppressClick()) clicks.push(item.uid) },
  }, item.uid))))
} })
app.mount('#app')
