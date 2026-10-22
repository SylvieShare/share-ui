<template>
  <nav ref="element" class="share-icon-navigation"
    :class="[`share-icon-navigation--${orientation}`, { 'share-icon-navigation--instant': !animate }]"
    :style="{ '--icon-navigation-size': `${size}px` }" :aria-label="label">
    <span class="share-icon-navigation__indicator" :style="indicatorStyle" aria-hidden="true" />
    <template v-for="item in items" :key="item.key">
      <span v-if="item.divider" class="share-icon-navigation__divider" role="separator"
        :aria-orientation="orientation === 'vertical' ? 'horizontal' : 'vertical'" :aria-label="item.dividerLabel" />
      <button :ref="node => setButton(item.key, node)" v-bind="item.attrs" type="button"
        class="share-icon-navigation__item" :class="{ 'share-icon-navigation__item--selected': active && modelValue === item.key }"
        :disabled="item.disabled" :title="item.title || item.label" :aria-label="item.ariaLabel || item.label"
        :aria-current="active && modelValue === item.key ? 'page' : undefined"
        :aria-pressed="active && modelValue === item.key" @click="select(item)" @keydown="keydown($event, item.key)">
        <slot name="icon" :item="item"><component :is="item.icon" v-if="item.icon" :size="24" aria-hidden="true" /></slot>
        <span class="share-icon-navigation__label"><slot name="label" :item="item">{{ item.shortLabel || item.label }}</slot></span>
        <slot name="decoration" :item="item" />
      </button>
    </template>
  </nav>
</template>
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { fitNavigationLabels } from '../lib/fitNavigationLabels.js'
import { navigationFocusKey } from '../lib/iconNavigation.js'
const props = defineProps({
  items: { type: Array, required: true }, modelValue: { type: [String, Number], default: null },
  label: { type: String, required: true }, orientation: { type: String, default: 'horizontal', validator: value => ['horizontal', 'vertical'].includes(value) },
  size: { type: Number, default: 56 }, active: { type: Boolean, default: true }, animate: { type: Boolean, default: true },
})
const emit = defineEmits(['update:modelValue', 'select'])
const element = ref(null), indicator = ref(null), buttons = new Map()
const indicatorStyle = computed(() => ({
  transform: `translate(${indicator.value?.x || 0}px, ${indicator.value?.y || 0}px)`,
  width: `${indicator.value?.width || 0}px`, height: `${indicator.value?.height || 0}px`,
  opacity: props.active && indicator.value ? 1 : 0,
}))
let observer, fonts, disposed = false
function setButton(key, node) {
  const old = buttons.get(key)
  if (old === node) return
  if (old) observer?.unobserve(old)
  if (node) { buttons.set(key, node); observer?.observe(node) }
  else buttons.delete(key)
}
function measure() {
  fitNavigationLabels(buttons.values())
  updateIndicator()
}
function updateIndicator() {
  const node = buttons.get(props.modelValue)
  indicator.value = node ? { x: node.offsetLeft, y: node.offsetTop, width: node.offsetWidth, height: node.offsetHeight } : null
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
function select(item) {
  if (item.disabled) return
  if (item.key !== props.modelValue) emit('update:modelValue', item.key)
  emit('select', item.key)
}
function keydown(event, key) {
  if (event.altKey || event.ctrlKey || event.metaKey) return
  const next = navigationFocusKey(props.items, key, event.key, props.orientation)
  if (next == null) return
  event.preventDefault()
  event.stopPropagation()
  buttons.get(next)?.focus({ preventScroll: true })
  reveal(buttons.get(next))
}
onMounted(() => {
  measure()
  reveal(buttons.get(props.modelValue))
  if (typeof ResizeObserver !== 'undefined') {
    observer = new ResizeObserver(measure)
    observer.observe(element.value)
    for (const node of buttons.values()) observer.observe(node)
  }
  fonts = document.fonts
  fonts?.ready.then(() => { if (!disposed) measure() })
  fonts?.addEventListener('loadingdone', measure)
})
watch(() => [props.modelValue, props.items, props.orientation, props.size], async () => {
  await nextTick(); measure(); reveal(buttons.get(props.modelValue))
}, { deep: true })
onBeforeUnmount(() => {
  disposed = true
  observer?.disconnect()
  fonts?.removeEventListener('loadingdone', measure)
})
defineExpose({ element, updateIndicator })
</script>
<style scoped>
.share-icon-navigation {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  flex: none;
  gap: 2px;
  padding: 4px;
  box-sizing: border-box;
  width: max-content;
  max-width: 100%;
  min-width: 0;
  min-height: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  overscroll-behavior: contain;
}
.share-icon-navigation--vertical { flex-direction: column; gap: 4px; padding: 6px; max-height: 100%; max-width: none; overflow-x: hidden; overflow-y: auto; scrollbar-width: none; }
.share-icon-navigation--vertical::-webkit-scrollbar { display: none; }
.share-icon-navigation__item {
  position: relative;
  z-index: 1;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: var(--icon-navigation-size);
  height: var(--icon-navigation-size);
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 9px;
  background: transparent;
  color: var(--text-muted);
  font: inherit;
  font-size: 10px;
  font-weight: 650;
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease;
}
.share-icon-navigation__item > :deep(svg) { width: 24px; height: 24px; flex: none; }
.share-icon-navigation__label { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 13px; }
.share-icon-navigation__item:hover:not(:disabled) { color: var(--text-1); border-color: var(--border-strong); }
.share-icon-navigation__item--selected, .share-icon-navigation__item--selected:hover:not(:disabled) { color: var(--text-on-accent); border-color: transparent; }
.share-icon-navigation__item:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.share-icon-navigation__item:disabled { opacity: .4; cursor: not-allowed; }
.share-icon-navigation__indicator {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  border-radius: 9px;
  background: var(--accent);
  pointer-events: none;
  transition: transform 260ms cubic-bezier(.2,.7,.2,1), opacity 150ms ease;
}
.share-icon-navigation__divider { flex: none; width: 1px; height: 24px; margin: 0 6px; background: var(--border-strong); }
.share-icon-navigation--vertical > .share-icon-navigation__divider { width: 40px; height: 1px; margin: 6px 0; }
.share-icon-navigation--instant > .share-icon-navigation__indicator { transition: none; }
@media (prefers-reduced-motion: reduce) {
  .share-icon-navigation__indicator, .share-icon-navigation__item { transition: none; }
}
</style>
