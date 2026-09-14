import { computed, nextTick, onScopeDispose, ref, shallowRef, toValue, watch } from 'vue'
import { virtualListOffsets, virtualListRange } from '../lib/virtualListLayout.js'

// Headless, variable-height windowing: slot roots stay the actual rows. Gaps
// support keeping one focused row mounted without rendering every row between.
export function useVirtualList(items, container, { key, estimateSize = () => 70, threshold = 80, overscan = 6 } = {}) {
  const heights = shallowRef(new Map())
  const scrollTop = ref(0), viewportHeight = ref(0), focusedKey = ref(null)
  const elements = new Map(), keysByElement = new WeakMap()
  const rows = computed(() => toValue(items) || [])
  const offsets = computed(() => virtualListOffsets(rows.value, key, estimateSize, heights.value))
  const keyIndexes = computed(() => new Map(rows.value.map((item, index) => [key(item), index])))
  const enabled = computed(() => rows.value.length > threshold)
  const range = computed(() => enabled.value
    ? virtualListRange(offsets.value, scrollTop.value, viewportHeight.value || 600, overscan)
    : { start: 0, end: rows.value.length })
  const visibleItems = computed(() => {
    const { start, end } = range.value
    const indexes = Array.from({ length: end - start }, (_, index) => start + index)
    const focused = keyIndexes.value.get(focusedKey.value)
    if (focused != null && (focused < start || focused >= end)) indexes.push(focused)
    indexes.sort((a, b) => a - b)
    let previousEnd = 0
    return indexes.map(index => {
      const item = rows.value[index], gap = offsets.value[index] - previousEnd
      previousEnd = offsets.value[index + 1]
      return { item, key: key(item), index, gap }
    })
  })
  const paddingAfter = computed(() => offsets.value.at(-1) - (visibleItems.value.length ? offsets.value[visibleItems.value.at(-1).index + 1] : 0))
  let rowObserver, viewportObserver, currentContainer, frame, lastWidth
  function updateViewport() {
    if (!currentContainer) return
    const width = currentContainer.clientWidth
    if (lastWidth != null && width > 0 && width !== lastWidth) heights.value = new Map()
    if (width > 0) lastWidth = width
    viewportHeight.value = currentContainer.clientHeight
    scrollTop.value = Math.max(0, currentContainer.scrollTop - (parseFloat(getComputedStyle(currentContainer).paddingTop) || 0))
  }
  function onScroll() {
    if (frame != null) return
    frame = requestAnimationFrame(() => { frame = null; updateViewport() })
  }
  function onFocus(event) {
    focusedKey.value = null
    for (const [itemKey, element] of elements) if (element.contains(event.target)) { focusedKey.value = itemKey; break }
  }
  function onBlur(event) { if (!currentContainer?.contains(event.relatedTarget)) focusedKey.value = null }
  function setItemRef(itemKey, component) {
    const element = component?.$el || component
    const previous = elements.get(itemKey)
    if (previous === element) return
    if (previous) { rowObserver?.unobserve(previous); elements.delete(itemKey) }
    if (element?.nodeType !== 1) return
    elements.set(itemKey, element)
    keysByElement.set(element, itemKey)
    rowObserver?.observe(element)
  }
  if (typeof ResizeObserver !== 'undefined') {
    rowObserver = new ResizeObserver(entries => {
      const next = new Map(heights.value)
      let changed = false
      for (const { target } of entries) {
        const rect = target.getBoundingClientRect()
        if (!rect.height) continue
        const style = getComputedStyle(target)
        const height = rect.height + (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0)
        const itemKey = keysByElement.get(target)
        if (itemKey != null && Math.abs((next.get(itemKey) || 0) - height) > .5) { next.set(itemKey, height); changed = true }
      }
      if (changed) heights.value = next
    })
    viewportObserver = new ResizeObserver(updateViewport)
  }
  function detach() {
    currentContainer?.removeEventListener('scroll', onScroll)
    currentContainer?.removeEventListener('focusin', onFocus)
    currentContainer?.removeEventListener('focusout', onBlur)
    viewportObserver?.disconnect()
  }
  watch(container, element => {
    detach()
    currentContainer = element
    element?.addEventListener('scroll', onScroll, { passive: true })
    element?.addEventListener('focusin', onFocus)
    element?.addEventListener('focusout', onBlur)
    if (element) viewportObserver?.observe(element)
    nextTick(updateViewport)
  }, { immediate: true, flush: 'post' })
  watch(keyIndexes, indexes => {
    heights.value = new Map([...heights.value].filter(([key]) => indexes.has(key)))
    if (!indexes.has(focusedKey.value)) focusedKey.value = null
    nextTick(updateViewport)
  })
  onScopeDispose(() => { detach(); rowObserver?.disconnect(); if (frame != null) cancelAnimationFrame(frame) })
  return { visibleItems, paddingAfter, setItemRef, totalSize: computed(() => offsets.value.at(-1)) }
}
