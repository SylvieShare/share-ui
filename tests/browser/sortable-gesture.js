import { createApp, h, ref } from 'vue'
import { isSortableGestureActive, useSortable } from '../../dist/share-ui.js'
import '../../dist/share-ui.css'
const app = createApp({ setup() {
  const items = ref([{ uid: 'one' }, { uid: 'two' }])
  const sortable = useSortable({ groups: { rows: { items } }, getKey: item => item.uid })
  return () => h('div', { 'data-sortable-container': 'rows' }, items.value.map((item, index) => h('div', { 'data-sortable-key': item.uid }, [
    h('button', { style: 'touch-action:none;margin:20px;padding:20px', onPointerdown: event => sortable.startDrag(event, item, 'rows', index) }, item.uid),
  ])))
} })
app.mount('#app')
window.sortableGesture = { active: isSortableGestureActive, unmount: () => app.unmount() }
