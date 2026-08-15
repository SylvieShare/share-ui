<template>
  <nav ref="rootElement" class="share-sliding-tabs" role="tablist" :aria-label="ariaLabel || undefined">
    <button
      v-for="(tab, index) in tabs"
      :id="tab.id"
      :key="String(tab.key)"
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
      <span>{{ tab.title }}</span>
    </button>
    <span class="share-sliding-tabs__underline" :style="underlineStyle" aria-hidden="true" />
  </nav>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
const props = defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: [String, Number], default: null },
  ariaLabel: { type: String, default: '' },
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
function setButtonRef(element, index) { buttonElements.value[index] = element }
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
function updateUnderline() {
  const index = props.tabs.findIndex(tab => tab.key === props.modelValue)
  const element = buttonElements.value[index]
  if (!element) { underline.value = { left: 0, width: 0, ready: false }; return }
  underline.value = { left: element.offsetLeft, width: element.offsetWidth, ready: true }
}
let resizeObserver = null
onMounted(() => {
  nextTick(updateUnderline)
  if (typeof ResizeObserver !== 'undefined' && rootElement.value) {
    resizeObserver = new ResizeObserver(updateUnderline)
    resizeObserver.observe(rootElement.value)
  }
})
onBeforeUnmount(() => resizeObserver?.disconnect())
watch(() => props.modelValue, () => nextTick(updateUnderline))
watch(() => props.tabs, () => nextTick(updateUnderline), { deep: true })
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
  white-space: nowrap;
  cursor: pointer;
  transition: color .15s;
}
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
</style>
