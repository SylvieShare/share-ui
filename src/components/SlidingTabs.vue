<template>
  <nav ref="rootElement" class="share-sliding-tabs" :class="`share-sliding-tabs--${variant}`" role="tablist" :aria-label="ariaLabel || undefined" :style="{ '--sliding-tab-max-width': maxTabWidth ? `${maxTabWidth}px` : undefined }">
    <div v-for="(tab, index) in tabs" :key="String(tab.key)" class="share-sliding-tabs__item" :class="{ 'share-sliding-tabs__item--active': modelValue === tab.key }" role="presentation">
    <button
      :id="tab.id"
      :ref="element => setButtonRef(element, index)"
      class="share-sliding-tabs__tab"
      :class="{ 'share-sliding-tabs__tab--active': modelValue === tab.key }"
      type="button"
      role="tab"
      :aria-selected="modelValue === tab.key"
      :aria-controls="tab.panelId"
      :tabindex="modelValue === tab.key ? 0 : -1"
      :disabled="tab.disabled"
      @click="select(tab.key)"
      @keydown="onKeydown($event, index)"
    >
      <slot name="icon" :tab="tab">
        <img v-if="tab.icon || tab.svg" class="share-sliding-tabs__icon" :src="tab.icon || tab.svg" alt="" aria-hidden="true" />
      </slot>
      <span class="share-sliding-tabs__title">{{ tab.title }}</span>
    </button>
    <slot name="tab-actions" :tab="tab" />
    </div>
    <span v-if="variant === 'underline'" class="share-sliding-tabs__underline" :style="underlineStyle" aria-hidden="true" />
  </nav>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
const props = defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: [String, Number], default: null },
  ariaLabel: { type: String, default: '' },
  maxTabWidth: { type: Number, default: 0 },
  variant: { type: String, default: 'underline', validator: value => ['underline', 'chips'].includes(value) },
})
const emit = defineEmits(['update:modelValue'])
const rootElement = ref(null)
const buttonElements = ref([])
const underline = ref({ left: 0, width: 0, ready: false })
const underlineStyle = computed(() => ({
  transform: `translateX(${underline.value.left}px)`,
  width: `${underline.value.width}px`,
  opacity: underline.value.ready ? 1 : 0,
}))
function setButtonRef(element, index) {
  const previous = buttonElements.value[index]
  if (previous === element) return
  if (previous) resizeObserver?.unobserve(previous)
  buttonElements.value[index] = element
  if (element) resizeObserver?.observe(element)
}
function select(key) {
  const tab = props.tabs.find(candidate => candidate.key === key)
  if (tab && !tab.disabled && key !== props.modelValue) emit('update:modelValue', key)
}
async function focusTab(index) {
  const tab = props.tabs[index]
  if (!tab || tab.disabled) return
  select(tab.key)
  await nextTick()
  buttonElements.value[index]?.focus()
}
function onKeydown(event, currentIndex) {
  const enabled = props.tabs.map((tab, index) => ({ tab, index })).filter(({ tab }) => !tab.disabled)
  if (!enabled.length) return
  const position = Math.max(0, enabled.findIndex(entry => entry.index === currentIndex))
  let target = null
  if (event.key === 'ArrowRight') target = enabled[(position + 1) % enabled.length]
  if (event.key === 'ArrowLeft') target = enabled[(position - 1 + enabled.length) % enabled.length]
  if (event.key === 'Home') target = enabled[0]
  if (event.key === 'End') target = enabled[enabled.length - 1]
  if (!target) return
  event.preventDefault()
  focusTab(target.index)
}
function revealActive() {
  const root = rootElement.value, element = buttonElements.value[props.tabs.findIndex(tab => tab.key === props.modelValue)]
  if (!root || !element) return
  const left = element.offsetLeft, right = left + element.offsetWidth
  if (left < root.scrollLeft || right > root.scrollLeft + root.clientWidth)
    root.scrollTo({ left: Math.max(0, left - (root.clientWidth - element.offsetWidth) / 2), behavior: globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}
function updateUnderline() {
  if (props.variant !== 'underline') return
  const index = props.tabs.findIndex(tab => tab.key === props.modelValue)
  const element = buttonElements.value[index]
  if (!element) { underline.value = { left: 0, width: 0, ready: false }; return }
  underline.value = { left: element.offsetLeft, width: element.offsetWidth, ready: true }
}
let resizeObserver = null
onMounted(() => {
  nextTick(() => { updateUnderline(); revealActive() })
  if (typeof ResizeObserver !== 'undefined' && rootElement.value) {
    resizeObserver = new ResizeObserver(updateUnderline)
    resizeObserver.observe(rootElement.value)
    buttonElements.value.forEach(element => element && resizeObserver.observe(element))
  }
})
onBeforeUnmount(() => resizeObserver?.disconnect())
watch(() => props.modelValue, () => nextTick(() => { updateUnderline(); revealActive() }))
watch(() => props.variant, () => nextTick(() => { updateUnderline(); revealActive() }))
watch(() => props.tabs, () => nextTick(() => { updateUnderline(); revealActive() }), { deep: true })
defineExpose({ updateUnderline })
</script>

<style scoped>
.share-sliding-tabs {
  position: relative;
  display: flex;
  align-items: stretch;
  min-height: 44px;
  padding: 0 20px;
  gap: 28px;
  overflow-x: auto;
  overflow-y: hidden;
}
.share-sliding-tabs__item { display: inline-flex; align-items: stretch; flex: none; }
.share-sliding-tabs__tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 4px;
  border: 0;
  background: none;
  color: var(--text-muted);
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .02em;
  max-width: var(--sliding-tab-max-width, none);
  white-space: nowrap;
  cursor: pointer;
  transition: color .15s;
}
.share-sliding-tabs__title { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.share-sliding-tabs__tab:focus-visible { outline: 2px solid var(--accent); outline-offset: -3px; border-radius: var(--r-sm); }
.share-sliding-tabs__tab:hover:not(:disabled) { color: var(--text-2); }
.share-sliding-tabs__tab--active { color: var(--text-1); }
.share-sliding-tabs__tab:disabled { opacity: .4; cursor: not-allowed; }
.share-sliding-tabs__underline {
  position: absolute;
  bottom: 5px;
  left: 0;
  height: 3px;
  border-radius: var(--r-pill);
  background: var(--accent);
  pointer-events: none;
  transition: transform .25s cubic-bezier(.4, 0, .2, 1), width .25s cubic-bezier(.4, 0, .2, 1), opacity .2s ease;
}
.share-sliding-tabs__icon { width: 16px; height: 16px; object-fit: contain; opacity: .65; }
.share-sliding-tabs__tab--active .share-sliding-tabs__icon { opacity: 1; }
@media (max-width: 640px) {
  .share-sliding-tabs { gap: 18px; padding: 0 16px; }
  .share-sliding-tabs__tab { font-size: 12px; }
}
.share-sliding-tabs--chips { align-items: center; gap: 8px; padding: 6px 12px; }
.share-sliding-tabs--chips .share-sliding-tabs__item {
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--r-pill);
  background: var(--surface-raised);
  transition: background-color .18s ease, border-color .18s ease, box-shadow .18s ease;
}
.share-sliding-tabs--chips .share-sliding-tabs__item:hover { border-color: var(--border-strong); }
.share-sliding-tabs--chips .share-sliding-tabs__tab { min-height: 38px; padding: 8px 12px; font-size: 13px; letter-spacing: 0; }
.share-sliding-tabs--chips .share-sliding-tabs__item--active,
.share-sliding-tabs--chips .share-sliding-tabs__item--active:hover {
  background: color-mix(in srgb, var(--accent) 18%, var(--surface-raised));
  border-color: var(--accent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 25%, transparent);
}
.share-sliding-tabs--chips .share-sliding-tabs__tab--active { color: var(--text-1); }
.share-sliding-tabs--chips .share-sliding-tabs__tab:focus-visible { border-radius: var(--r-pill); }
@media (prefers-reduced-motion: reduce) { .share-sliding-tabs__underline, .share-sliding-tabs__tab, .share-sliding-tabs--chips .share-sliding-tabs__item { transition: none; } }
</style>
