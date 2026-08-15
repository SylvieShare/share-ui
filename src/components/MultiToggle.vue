<template>
  <div
    ref="rootEl"
    class="share-multi-toggle"
    :class="{ 'share-multi-toggle--block': block, 'share-multi-toggle--disabled': disabled }"
    role="radiogroup"
    :aria-label="ariaLabel || undefined"
  >
    <span
      class="share-multi-toggle__pill"
      :class="{
        'share-multi-toggle__pill--neutral': isNeutralActive,
        'share-multi-toggle__pill--instant': !pill.animate,
      }"
      :style="pillStyle"
      aria-hidden="true"
    />
    <button
      v-for="(option, index) in options"
      :key="String(option.value)"
      :ref="element => setButtonRef(element, index)"
      type="button"
      class="share-multi-toggle__button"
      :class="{
        'share-multi-toggle__button--active': option.value === modelValue,
        'share-multi-toggle__button--neutral': option.value === modelValue && option.value === neutralValue,
      }"
      role="radio"
      :aria-checked="option.value === modelValue"
      :tabindex="option.value === modelValue ? 0 : -1"
      :disabled="disabled || option.disabled"
      @click="select(option.value)"
      @keydown="onKeydown($event, index)"
    >{{ option.label }}</button>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  options: { type: Array, required: true },
  modelValue: { default: null },
  block: { type: Boolean, default: false },
  neutralValue: { default: undefined },
  disabled: { type: Boolean, default: false },
  ariaLabel: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])

const rootEl = ref(null)
const buttonElements = ref([])
const pill = ref({ left: 0, width: 0, ready: false, animate: false })
const isNeutralActive = computed(() => props.neutralValue !== undefined && props.modelValue === props.neutralValue)
const pillStyle = computed(() => ({
  transform: `translateX(${pill.value.left}px)`,
  width: `${pill.value.width}px`,
  opacity: pill.value.ready ? 1 : 0,
}))

function setButtonRef(element, index) { buttonElements.value[index] = element }
let restoreAnimationFrame = null
function measure(animate = false) {
  const index = props.options.findIndex(option => option.value === props.modelValue)
  const element = buttonElements.value[index]
  if (!element) {
    pill.value = { left: 0, width: 0, ready: false, animate: false }
    return
  }
  pill.value = { left: element.offsetLeft, width: element.offsetWidth, ready: true, animate }
  if (!animate && typeof requestAnimationFrame !== 'undefined') {
    if (restoreAnimationFrame != null) cancelAnimationFrame(restoreAnimationFrame)
    restoreAnimationFrame = requestAnimationFrame(() => {
      restoreAnimationFrame = null
      pill.value = { ...pill.value, animate: true }
    })
  }
}
function select(value) {
  const option = props.options.find(candidate => candidate.value === value)
  if (!props.disabled && !option?.disabled && value !== props.modelValue) emit('update:modelValue', value)
}
function enabledIndexes() {
  return props.options.map((option, index) => ({ option, index })).filter(({ option }) => !option.disabled)
}
async function focusOption(index) {
  const option = props.options[index]
  if (!option || option.disabled || props.disabled) return
  select(option.value)
  await nextTick()
  buttonElements.value[index]?.focus()
}
function onKeydown(event, currentIndex) {
  const enabled = enabledIndexes()
  if (!enabled.length) return
  const position = Math.max(0, enabled.findIndex(entry => entry.index === currentIndex))
  let target = null
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = enabled[(position + 1) % enabled.length]
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = enabled[(position - 1 + enabled.length) % enabled.length]
  if (event.key === 'Home') target = enabled[0]
  if (event.key === 'End') target = enabled[enabled.length - 1]
  if (!target) return
  event.preventDefault()
  focusOption(target.index)
}

let resizeObserver = null
onMounted(async () => {
  await nextTick()
  measure()
  if (typeof ResizeObserver !== 'undefined' && rootEl.value) {
    resizeObserver = new ResizeObserver(() => measure(false))
    resizeObserver.observe(rootEl.value)
  }
})
onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  if (restoreAnimationFrame != null) cancelAnimationFrame(restoreAnimationFrame)
})
watch(() => props.modelValue, async () => { await nextTick(); measure(true) })
watch(() => props.options, async () => { await nextTick(); measure(false) }, { deep: true })
</script>

<style scoped>
.share-multi-toggle {
  position: relative;
  display: inline-flex;
  width: fit-content;
  padding: 3px;
  border: 1px solid var(--border);
  border-radius: 9px;
  background: var(--surface-raised);
}
.share-multi-toggle--block { display: flex; width: 100%; }
.share-multi-toggle--disabled { opacity: .5; }
.share-multi-toggle__pill {
  position: absolute;
  inset: 3px auto 3px 0;
  border-radius: 6px;
  background: var(--accent);
  box-shadow: 0 2px 8px color-mix(in srgb, var(--accent) 35%, transparent);
  pointer-events: none;
  transition: transform .24s cubic-bezier(.4, 0, .2, 1), width .24s cubic-bezier(.4, 0, .2, 1), opacity .18s ease;
}
.share-multi-toggle__pill--instant { transition: none; }
.share-multi-toggle__pill--neutral { background: color-mix(in srgb, var(--text-on-accent) 10%, transparent); box-shadow: none; }
.share-multi-toggle__button {
  position: relative;
  z-index: 1;
  padding: 6px 14px;
  border: 0;
  border-radius: 6px;
  background: none;
  color: var(--text-2);
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .04em;
  white-space: nowrap;
  cursor: pointer;
  transition: color .18s;
}
.share-multi-toggle--block .share-multi-toggle__button { flex: 1; }
.share-multi-toggle__button:hover:not(:disabled) { color: var(--text-1); }
.share-multi-toggle__button--active { color: var(--text-on-accent); }
.share-multi-toggle__button--neutral { color: var(--text-1); }
.share-multi-toggle__button:disabled { cursor: not-allowed; }
</style>
