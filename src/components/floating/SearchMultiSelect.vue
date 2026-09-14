<template>
  <div class="share-search-multi-select">
    <div v-if="selectedOptions.length" class="share-search-multi-select__tags">
      <span v-for="option in selectedOptions" :key="option.value" class="share-search-multi-select__tag">
        {{ option.label }}
        <RemoveButton :label="`${removeLabel}: ${option.label}`" :disabled="disabled" @click="remove(option.value)" />
      </span>
    </div>
    <FormTextInput
      v-if="!atLimit"
      ref="input"
      :value="query"
      :placeholder="placeholder"
      :disabled="disabled"
      role="combobox"
      :aria-label="label"
      aria-autocomplete="list"
      :aria-expanded="open"
      :aria-controls="listId"
      :aria-activedescendant="open && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined"
      @update:value="query = $event; open = true"
      @focus="open = true"
      @keydown="onKeydown"
    />
    <BasePopover v-model:open="open" :anchor="input?.$el" :min-width="260" :z-index="zIndex" related>
      <OptionList :id="listId" :label="label" :options="filtered" :active-index="activeIndex" :empty-label="emptyLabel" @active="activeIndex = $event" @select="pick">
        <template v-if="allowCreate && query.trim() && !exactMatch && !filtered.length" #footer>
          <ActionButton :loading="creating" :disabled="creating" variant="quiet" @mousedown.prevent.stop @click="$emit('create', query.trim())">{{ createLabel }} «{{ query.trim() }}»</ActionButton>
        </template>
      </OptionList>
    </BasePopover>
  </div>
</template>
<script setup>
import { computed, nextTick, ref, useId, watch } from 'vue'
import FormTextInput from '../form/FormTextInput.vue'
import RemoveButton from '../RemoveButton.vue'
import ActionButton from '../ActionButton.vue'
import BasePopover from './BasePopover.vue'
import OptionList from './OptionList.vue'
const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  options: { type: Array, default: () => [] },
  limit: { type: Number, default: 0 },
  label: { type: String, required: true },
  placeholder: { type: String, default: 'Search…' },
  emptyLabel: { type: String, default: 'No options found' },
  removeLabel: { type: String, default: 'Remove' },
  createLabel: { type: String, default: 'Add' },
  allowCreate: { type: Boolean, default: false },
  creating: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  zIndex: { type: Number, default: 2500 },
})
const emit = defineEmits(['update:modelValue', 'create'])
const input = ref(null), open = ref(false), query = ref(''), activeIndex = ref(0)
const listId = useId()
const selectedKeys = computed(() => new Set(props.modelValue.map(String)))
const byValue = computed(() => new Map(props.options.map(option => [String(option.value), option])))
const selectedOptions = computed(() => props.modelValue.map(value => byValue.value.get(String(value))).filter(Boolean))
const atLimit = computed(() => props.limit > 0 && props.modelValue.length >= props.limit)
const filtered = computed(() => props.options.filter(option => !selectedKeys.value.has(String(option.value)) && !option.disabled && String(option.label).toLocaleLowerCase().includes(query.value.trim().toLocaleLowerCase())))
const exactMatch = computed(() => props.options.some(option => String(option.label).trim().toLocaleLowerCase() === query.value.trim().toLocaleLowerCase()))
watch(filtered, options => { activeIndex.value = options.length ? 0 : -1 })
watch(() => props.modelValue, () => {
  query.value = ''
  if (atLimit.value) open.value = false
  else if (open.value) nextTick(() => input.value?.focus())
}, { deep: true })
function pick(option) { if (!atLimit.value) emit('update:modelValue', [...props.modelValue, option.value]) }
function remove(value) { emit('update:modelValue', props.modelValue.filter(item => String(item) !== String(value))) }
function onKeydown(event) {
  if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
    event.preventDefault()
    open.value = true
    const count = filtered.value.length
    activeIndex.value = count ? (activeIndex.value + (event.key === 'ArrowDown' ? 1 : -1) + count) % count : -1
    nextTick(() => document.getElementById(`${listId}-${activeIndex.value}`)?.scrollIntoView({ block: 'nearest' }))
  } else if (event.key === 'Enter' && open.value && filtered.value[activeIndex.value]) {
    event.preventDefault(); pick(filtered.value[activeIndex.value])
  } else if (event.key === 'Escape') { event.preventDefault(); open.value = false }
  else if (event.key === 'Tab') open.value = false
}
</script>
<style scoped>
.share-search-multi-select { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
.share-search-multi-select__tags { display: flex; flex-wrap: wrap; gap: 8px; }
.share-search-multi-select__tag { display: inline-flex; align-items: center; gap: 8px; padding: 6px 8px 6px 14px; border-radius: 999px; background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--text-1); font-size: 13px; }
</style>
