<template>
  <div ref="rootEl" class="vs" :class="{ 'vs--disabled': disabled }">
    <button
      ref="triggerEl"
      class="vs-button"
      type="button"
      :class="{ empty: !selectedLabel }"
      role="combobox"
      aria-haspopup="listbox"
      :aria-label="ariaLabel || undefined"
      :aria-controls="listboxId"
      :aria-expanded="open"
      :aria-activedescendant="open && activeIndex >= 0 ? optionId(activeIndex) : undefined"
      :disabled="disabled"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      <span>{{ selectedLabel || placeholder }}</span>
      <span class="vs-arrow" aria-hidden="true">▾</span>
    </button>

    <div
      v-if="open"
      :id="listboxId"
      class="vs-drop"
      :class="{ 'vs-drop-up': dropUp }"
      role="listbox"
      :aria-label="ariaLabel || undefined"
    >
      <input
        v-if="showSearch"
        ref="searchEl"
        v-model="query"
        class="vs-search"
        type="search"
        :placeholder="searchPlaceholder"
        :aria-label="searchAriaLabel || searchPlaceholder"
        :aria-controls="listboxId"
        :aria-activedescendant="activeIndex >= 0 ? optionId(activeIndex) : undefined"
        autocomplete="off"
        @keydown="onSearchKeydown"
      />

      <button
        v-for="(option, index) in filteredOptions"
        :id="optionId(index)"
        :key="option.key"
        class="vs-option"
        :class="{ 'vs-option--active': index === activeIndex }"
        type="button"
        role="option"
        :aria-selected="isSelected(option.value)"
        :disabled="option.disabled"
        @mouseenter="setActive(index)"
        @click="pick(option)"
      >
        {{ option.label }}
      </button>

      <div v-if="filteredOptions.length === 0" class="vs-empty">{{ emptyLabel }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'

let selectSequence = 0

const props = defineProps({
  modelValue: { default: null },
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: 'Select' },
  searchable: { type: Boolean, default: false },
  searchThreshold: { type: Number, default: 10 },
  searchPlaceholder: { type: String, default: 'Search…' },
  searchAriaLabel: { type: String, default: '' },
  emptyLabel: { type: String, default: 'No options found' },
  ariaLabel: { type: String, default: '' },
  dropUp: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue', 'open', 'close'])

selectSequence += 1
const listboxId = `share-value-select-${selectSequence}`
const rootEl = ref(null)
const triggerEl = ref(null)
const searchEl = ref(null)
const open = ref(false)
const query = ref('')
const activeIndex = ref(-1)

const normalizedOptions = computed(() => props.options.map((option, index) => {
  if (option && typeof option === 'object') {
    return {
      value: option.value,
      label: String(option.label ?? option.value ?? ''),
      disabled: Boolean(option.disabled),
      key: option.key ?? `${String(option.value)}-${index}`,
    }
  }
  return { value: option, label: String(option ?? ''), disabled: false, key: `${String(option)}-${index}` }
}))

const selectedLabel = computed(() => {
  const selected = normalizedOptions.value.find(option => isSelected(option.value))
  return selected?.label ?? ''
})

const filteredOptions = computed(() => {
  const normalizedQuery = query.value.trim().toLocaleLowerCase()
  if (!normalizedQuery) return normalizedOptions.value
  return normalizedOptions.value.filter(option => option.label.toLocaleLowerCase().includes(normalizedQuery))
})

const showSearch = computed(() => props.searchable && normalizedOptions.value.length >= props.searchThreshold)

function isSelected(value) {
  return String(value) === String(props.modelValue)
}

function optionId(index) {
  return `${listboxId}-option-${index}`
}

function firstEnabledIndex(start = 0, direction = 1) {
  const options = filteredOptions.value
  if (!options.length) return -1
  for (let offset = 0; offset < options.length; offset += 1) {
    const index = (start + offset * direction + options.length) % options.length
    if (!options[index].disabled) return index
  }
  return -1
}

function selectedIndex() {
  const index = filteredOptions.value.findIndex(option => isSelected(option.value) && !option.disabled)
  return index >= 0 ? index : firstEnabledIndex()
}

function setActive(index) {
  if (!filteredOptions.value[index]?.disabled) activeIndex.value = index
}

function moveActive(direction) {
  const options = filteredOptions.value
  if (!options.length) return
  const start = activeIndex.value < 0
    ? direction > 0 ? 0 : options.length - 1
    : (activeIndex.value + direction + options.length) % options.length
  activeIndex.value = firstEnabledIndex(start, direction)
  nextTick(() => document.getElementById(optionId(activeIndex.value))?.scrollIntoView?.({ block: 'nearest' }))
}

function openSelect() {
  if (props.disabled || open.value) return
  open.value = true
  activeIndex.value = selectedIndex()
  document.addEventListener('pointerdown', onDocumentPointerDown, true)
  emit('open')
  if (showSearch.value) nextTick(() => searchEl.value?.focus())
}

function close({ restoreFocus = false } = {}) {
  if (!open.value) return
  open.value = false
  query.value = ''
  activeIndex.value = -1
  document.removeEventListener('pointerdown', onDocumentPointerDown, true)
  emit('close')
  if (restoreFocus) nextTick(() => triggerEl.value?.focus())
}

function toggle() {
  if (open.value) close()
  else openSelect()
}

function pick(option) {
  if (!option || option.disabled) return
  emit('update:modelValue', option.value)
  close({ restoreFocus: true })
}

function pickActive() {
  pick(filteredOptions.value[activeIndex.value])
}

function onDocumentPointerDown(event) {
  if (!rootEl.value?.contains(event.target)) close()
}

function onTriggerKeydown(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    if (!open.value) openSelect()
    else moveActive(event.key === 'ArrowDown' ? 1 : -1)
    return
  }
  if (event.key === 'Home' && open.value) {
    event.preventDefault()
    activeIndex.value = firstEnabledIndex()
    return
  }
  if (event.key === 'End' && open.value) {
    event.preventDefault()
    activeIndex.value = firstEnabledIndex(filteredOptions.value.length - 1, -1)
    return
  }
  if ((event.key === 'Enter' || event.key === ' ') && open.value) {
    event.preventDefault()
    pickActive()
    return
  }
  if (event.key === 'Escape' && open.value) {
    event.preventDefault()
    close({ restoreFocus: true })
  }
}

function onSearchKeydown(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    moveActive(event.key === 'ArrowDown' ? 1 : -1)
  } else if (event.key === 'Home') {
    event.preventDefault()
    activeIndex.value = firstEnabledIndex()
  } else if (event.key === 'End') {
    event.preventDefault()
    activeIndex.value = firstEnabledIndex(filteredOptions.value.length - 1, -1)
  } else if (event.key === 'Enter') {
    event.preventDefault()
    pickActive()
  } else if (event.key === 'Escape') {
    event.preventDefault()
    close({ restoreFocus: true })
  }
}

watch(filteredOptions, () => {
  activeIndex.value = selectedIndex()
})

watch(() => props.disabled, value => {
  if (value) close()
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocumentPointerDown, true)
})

defineExpose({ open: openSelect, close, toggle })
</script>

<style scoped>
.vs { position: relative; min-width: 0; }
.vs--disabled { opacity: 0.65; }

.vs-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 34px;
  min-width: 0;
  padding: 0 10px;
  background: var(--surface-raised);
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  color: var(--text-1);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.15s;
}

.vs-button:focus-visible { border-color: var(--accent); outline: none; }
.vs-button:disabled { cursor: default; }
.vs-button.empty { color: var(--text-muted); }
.vs-button span:first-child { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vs-arrow { flex-shrink: 0; color: var(--text-muted); font-size: 10px; }

.vs-drop {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  left: 0;
  z-index: 250;
  min-width: 180px;
  max-height: 220px;
  padding: 5px;
  overflow-y: auto;
  background: var(--popover-bg);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-lg);
}

.vs-drop-up { top: auto; bottom: calc(100% + 4px); }

.vs-search {
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  margin-bottom: 4px;
  padding: 0 10px;
  background: var(--surface-raised);
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  color: var(--text-1);
  font: inherit;
  font-size: 13px;
  outline: none;
}

.vs-search:focus { border-color: var(--accent); }

.vs-option {
  display: block;
  width: 100%;
  padding: 7px 8px;
  background: transparent;
  border: none;
  border-radius: var(--r-sm);
  color: var(--text-2);
  font: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}

.vs-option:hover,
.vs-option--active { color: var(--text-1); background: var(--surface-raised); }
.vs-option:disabled { cursor: default; opacity: 0.5; }

.vs-empty { padding: 8px; color: var(--text-muted); font-size: 13px; text-align: center; }
</style>
