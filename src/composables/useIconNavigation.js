import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { compactNavigationRects, navigationSelectionRect } from '../lib/iconNavigation.js'
import { fitNavigationLabels } from '../lib/fitNavigationLabels.js'

export function useIconNavigation(props) {
  const element = ref(null), measured = ref([]), width = ref(0), ready = ref(false), buttons = new Map()
  const compact = computed(() => props.layout === 'compact')
  const weights = computed(() => {
    if (!props.active) return props.items.map(() => 0)
    const values = props.selection?.length === props.items.length
      ? props.selection.map(value => Number.isFinite(Number(value)) ? Math.max(0, Math.min(1, Number(value))) : 0)
      : props.items.map(item => item.key === props.modelValue ? 1 : 0)
    const total = values.reduce((sum, value) => sum + value, 0)
    return total ? values.map(value => value / total) : values
  })
  const rects = computed(() => compact.value
    ? compactNavigationRects(weights.value, { width: width.value, start: 4, end: 4, gap: 2,
      minimum: props.size, selected: props.selectedSize, maximum: props.maxSize })
      .map(rect => ({ ...rect, height: props.height ?? props.size }))
    : measured.value)
  const indicatorStyle = computed(() => {
    const rect = navigationSelectionRect(rects.value, weights.value)
    return { transform: `translate(${rect?.x || 0}px, ${rect?.y || 0}px)`,
      width: `${rect?.width || 0}px`, height: `${rect?.height || 0}px`,
      opacity: props.active && rect?.width ? 1 : 0 }
  })
  function itemStyle(index) {
    return { '--icon-navigation-selection': weights.value[index] || 0,
      width: compact.value ? `${rects.value[index]?.width || props.size}px` : undefined }
  }
  let observer, fonts, disposed = false
  function setButton(key, node) {
    const old = buttons.get(key)
    if (old === node) return
    if (old) observer?.unobserve(old)
    if (node) {
      buttons.set(key, node)
      if (!compact.value) observer?.observe(node)
    } else buttons.delete(key)
  }
  function measure() {
    if (!element.value) return
    if (compact.value) { width.value = element.value.clientWidth; return }
    if (props.layout === 'stacked' && !props.contentSized) fitNavigationLabels(buttons.values())
    const next = props.items.map(item => {
      const node = buttons.get(item.key)
      return node ? { x: node.offsetLeft, y: node.offsetTop, width: node.offsetWidth, height: node.offsetHeight } : null
    })
    if (JSON.stringify(next) !== JSON.stringify(measured.value)) measured.value = next
  }
  function reveal(node) {
    const root = element.value
    if (!root || !node) return
    const vertical = props.orientation === 'vertical'
    const start = vertical ? node.offsetTop : node.offsetLeft
    const extent = vertical ? node.offsetHeight : node.offsetWidth
    const scroll = vertical ? root.scrollTop : root.scrollLeft
    const available = vertical ? root.clientHeight : root.clientWidth
    const next = start < scroll ? start : start + extent > scroll + available ? start + extent - available : scroll
    if (next !== scroll) root.scrollTo(vertical ? { top: next } : { left: next })
  }
  function revealActive() { reveal(buttons.get(props.modelValue)) }
  onMounted(() => {
    measure(); revealActive()
    nextTick(() => {
      if (disposed) return
      // Commit measured widths before enabling transitions; the first paint is stable.
      element.value.getBoundingClientRect()
      ready.value = true
    })
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(measure)
      observer.observe(element.value)
      if (!compact.value) for (const node of buttons.values()) observer.observe(node)
    }
    fonts = document.fonts
    fonts?.ready.then(() => { if (!disposed) measure() })
    fonts?.addEventListener('loadingdone', measure)
  })
  watch(() => [props.items, props.layout, props.orientation, props.size, props.height, props.selectedSize, props.maxSize, props.contentSized], async () => {
    await nextTick(); measure(); revealActive()
  }, { deep: true })
  watch(() => props.modelValue, async () => { await nextTick(); revealActive() })
  onBeforeUnmount(() => {
    disposed = true
    observer?.disconnect()
    fonts?.removeEventListener('loadingdone', measure)
  })
  return { element, ready, buttons, indicatorStyle, itemStyle, setButton, measure, reveal, revealActive }
}
