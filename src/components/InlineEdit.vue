<template>
  <span class="share-inline-edit" :class="{ 'share-inline-edit--open': open }">
    <span class="share-inline-edit__measure" aria-hidden="true">{{ sizingText }}</span>
    <span v-if="!open" class="share-inline-edit__view">
      <span class="share-inline-edit__value"><slot :value="modelValue">{{ viewText }}</slot></span>
      <button v-if="editable" ref="editButton" type="button" :aria-label="editLabel || label" :disabled="disabled" @click="start">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m16 3 5 5M3 21l5-1L21 7a2.8 2.8 0 0 0-4-4L4 16z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" /></svg>
      </button>
    </span>
    <span v-else class="share-inline-edit__editor" @keydown.esc.stop.prevent="cancel" @keydown.enter="onEnter">
      <select v-if="options" ref="input" :value="draft" :aria-label="label" :disabled="disabled || busy" :aria-invalid="!!error" @change="change($event.target.value)">
        <option v-for="option in options" :key="String(option.value)" :value="option.value" :disabled="option.disabled">{{ option.label }}</option>
      </select>
      <input v-else ref="input" :value="draft" :aria-label="label" :placeholder="placeholder" :maxlength="maxlength || undefined" :required="required" :disabled="disabled || busy" :aria-invalid="!!error" @input="change($event.target.value)" />
      <span v-if="!forceOpen" class="share-inline-edit__actions">
        <button type="button" :aria-label="confirmLabel" :disabled="disabled || busy || (required && !String(draft ?? '').trim())" @click="confirm">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" stroke-width="1.8" /></svg>
        </button>
        <button type="button" :aria-label="cancelLabel" :disabled="busy" @click="cancel">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="1.8" /></svg>
        </button>
      </span>
    </span>
    <span v-if="error" class="share-inline-edit__error" role="alert">{{ error }}</span>
  </span>
</template>
<script setup>
import { computed, nextTick, ref, watch } from 'vue'
const props = defineProps({
  modelValue: { default: '' }, displayValue: { default: undefined },
  label: { type: String, required: true }, placeholder: { type: String, default: '' },
  options: { type: Array, default: null }, maxlength: { type: Number, default: 0 }, required: Boolean,
  editable: { type: Boolean, default: true }, disabled: Boolean, forceOpen: Boolean,
  persist: { type: Function, default: null },
  editLabel: { type: String, default: '' }, confirmLabel: { type: String, default: 'Confirm' },
  cancelLabel: { type: String, default: 'Cancel' }, errorLabel: { type: String, default: 'Unable to save' },
})
const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])
const active = ref(false), busy = ref(false), error = ref(''), draft = ref(props.modelValue)
const input = ref(null), editButton = ref(null)
const open = computed(() => props.forceOpen || active.value)
const optionLabel = value => props.options?.find(option => String(option.value) === String(value))?.label
const viewText = computed(() => props.displayValue ?? optionLabel(props.modelValue) ?? (props.modelValue === '' || props.modelValue == null ? props.placeholder : props.modelValue))
const sizingText = computed(() => {
  const value = open.value ? optionLabel(draft.value) ?? draft.value : viewText.value
  return value === '' || value == null ? props.placeholder || ' ' : String(value)
})
watch(() => props.modelValue, value => { if (!active.value) draft.value = value })
watch(() => props.forceOpen, () => { active.value = false; draft.value = props.modelValue; error.value = '' })
async function start() {
  if (props.disabled) return
  draft.value = props.modelValue; error.value = ''; active.value = true
  await nextTick(); input.value?.focus(); input.value?.select?.()
}
function change(value) {
  draft.value = props.options ? props.options.find(option => String(option.value) === value)?.value ?? value : value
  if (props.forceOpen) emit('update:modelValue', draft.value)
}
function cancel() {
  if (busy.value || props.forceOpen) return
  active.value = false; draft.value = props.modelValue; error.value = ''; emit('cancel')
  nextTick(() => editButton.value?.focus())
}
function onEnter(event) {
  if (event.isComposing || props.forceOpen) return
  event.preventDefault(); confirm()
}
async function confirm() {
  if (busy.value || props.disabled || (props.required && !String(draft.value ?? '').trim())) return
  busy.value = true; error.value = ''
  try {
    if (props.persist && await props.persist(draft.value) === false) return
    emit('update:modelValue', draft.value); emit('confirm', draft.value); active.value = false
    nextTick(() => editButton.value?.focus())
  } catch (cause) { error.value = cause?.message || props.errorLabel }
  finally { busy.value = false }
}
</script>
<style scoped>
.share-inline-edit { position: relative; display: inline-block; width: max-content; min-width: min(100%, var(--inline-edit-min-width, 120px)); max-width: 100%; height: var(--inline-edit-height, 32px); vertical-align: middle; font: inherit; }
.share-inline-edit__measure { display: block; box-sizing: border-box; height: 100%; padding: 0 61px 0 7px; visibility: hidden; overflow: hidden; white-space: pre; pointer-events: none; }
.share-inline-edit__view, .share-inline-edit__editor { position: absolute; inset: 0; display: flex; align-items: center; width: 100%; min-width: 0; height: 100%; box-sizing: border-box; }
.share-inline-edit__view { gap: 6px; }
.share-inline-edit__value { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.share-inline-edit button { display: inline-flex; align-items: center; justify-content: center; flex: none; width: 26px; height: 26px; padding: 0; border: 0; border-radius: var(--r-sm); background: transparent; color: var(--text-muted); cursor: pointer; }
.share-inline-edit button:hover { color: var(--accent); }
.share-inline-edit button:focus-visible { outline: 2px solid var(--accent); }
.share-inline-edit button:disabled { opacity: .45; cursor: default; }
.share-inline-edit input, .share-inline-edit select { box-sizing: border-box; width: 100%; min-width: 0; height: 100%; padding: 0 60px 0 6px; border: 1px solid var(--border); border-radius: var(--r-sm); background: var(--surface); color: var(--text-1); font: inherit; outline: none; }
.share-inline-edit select { appearance: none; }
.share-inline-edit input:focus, .share-inline-edit select:focus { border-color: var(--accent); }
.share-inline-edit [aria-invalid="true"] { border-color: var(--danger); }
.share-inline-edit__actions { position: absolute; right: 4px; display: flex; align-items: center; }
.share-inline-edit__error { position: absolute; z-index: 2; top: 100%; left: 0; max-width: 100%; padding: 4px 8px; border: 1px solid var(--danger); border-radius: var(--r-sm); background: var(--surface); color: var(--danger); font-size: 12px; font-weight: 400; }
</style>
