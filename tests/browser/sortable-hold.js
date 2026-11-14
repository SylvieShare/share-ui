import { createApp, h, ref } from 'vue'
import { isSortableGestureActive, reorderByDrop, useSortable } from '../../dist/share-ui.js'
import '../../dist/share-ui.css'
const params = new URLSearchParams(location.search)
const visual = params.has('visual')
const table = params.has('table')
const app = createApp({ setup() {
  const items = ref([{ uid: 'one' }, { uid: 'two' }, { uid: 'three' }])
  const drops = [], clicks = []
  const sortable = useSortable({ activationDelay: table ? undefined : 350, groups: { rows: { items, layout: table ? 'list' : 'grid', hitTest: params.has('nearest') ? 'nearest' : undefined } }, getKey: item => item.uid,
    onDrop: result => { drops.push(result.toIndex); items.value = reorderByDrop(items.value, result.fromIndex, result.toIndex) },
  })
  window.holdSort = { active: isSortableGestureActive, dragging: () => sortable.dragging.value, target: () => sortable.targetIndex.value, keys: () => items.value.map(item => item.uid), drops, clicks, unmount: () => app.unmount() }
  const contents = item => visual ? [h('span', { id: `label-${item.uid}` }, item.uid), ...(params.has('image') ? [h('img', { alt: item.uid, width: 40, height: 40, src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" fill="green"/%3E%3C/svg%3E' })] : []), h('svg', { width: 56, height: 56, viewBox: '0 0 56 56' }, [
    h('defs', [
      h('clipPath', { id: `clip-${item.uid}` }, [h('path', { d: 'M28 4 L49 16 L49 40 L28 52 L7 40 L7 16 Z' })]),
      h('filter', { id: `glow-${item.uid}` }, [h('feGaussianBlur', { stdDeviation: 1.8 })]),
      h('linearGradient', { id: `gradient-${item.uid}` }, [h('stop', { 'stop-color': 'var(--sort-alias)' }), h('stop', { offset: 1, 'stop-color': 'var(--sort-color)' })]),
      h('path', { id: `shape-${item.uid}`, d: 'M28 4 L49 16 L49 40 L28 52 L7 40 L7 16 Z' }),
    ]),
    h('use', { href: `#shape-${item.uid}`, fill: '#0d0e15' }),
    h('g', { 'clip-path': `url(#clip-${item.uid})` }, [h('rect', { x: 0, y: 8, width: 56, height: 48, fill: `url(#gradient-${item.uid})`, style: `filter:url("#glow-${item.uid}")` })]),
  ])] : item.uid
  const rows = () => sortable.displayItems('rows').map((item, index) => h(table ? 'tr' : 'button', {
    id: `row-${item.uid}`, 'aria-labelledby': visual ? `label-${item.uid}` : undefined,
    'data-sortable-key': item.uid, 'data-sortable-slot': index, class: { 'sortable-placeholder': sortable.isSource(item) }, style: 'height:110px;touch-action:auto;user-select:none;font:inherit',
    onPointerdown: event => sortable.startDrag(event, item, 'rows', index),
    onClick: () => { if (!sortable.shouldSuppressClick()) clicks.push(item.uid) },
  }, table ? [h('td', { style: 'width:200px' }, contents(item)), h('td', { style: 'width:80px' }, index)] : contents(item)))
  return () => h('main', { style: 'height:2400px;padding:20px;font-family:monospace;--sort-color:rgb(36, 180, 120);--sort-alias:var(--sort-color)' },
    table ? h('table', { 'data-sortable-container': 'rows' }, [h('tbody', rows())])
      : h('div', { 'data-sortable-container': 'rows', style: 'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;max-width:520px' }, rows()))
} })
app.mount('#app')
