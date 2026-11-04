<template>
  <button
    type="button"
    class="share-choice-card"
    :class="{ 'share-choice-card--selected': modelValue }"
    :style="{ '--choice-card-color': color || 'var(--accent)' }"
    :aria-label="label"
    :aria-describedby="description ? descriptionId : undefined"
    :aria-pressed="modelValue"
    :disabled="disabled"
    @click="emit('update:modelValue', !modelValue)"
  >
    <span class="share-choice-card__top" aria-hidden="true">
      <slot name="icon" />
      <svg class="share-choice-card__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
    </span>
    <span class="share-choice-card__body">
      <span class="share-choice-card__label">{{ label }}</span>
      <span v-if="description" :id="descriptionId" class="share-choice-card__description">{{ description }}</span>
    </span>
  </button>
</template>

<script setup>
import { useId } from 'vue'

defineProps({
  modelValue: Boolean,
  label: { type: String, required: true },
  description: { type: String, default: '' },
  color: { type: String, default: '' },
  disabled: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const descriptionId = useId()
</script>

<style scoped>
.share-choice-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  min-height: var(--choice-card-min-height, 88px);
  padding: 12px;
  border: 0;
  border-radius: var(--r-md);
  background: var(--bg);
  color: var(--text-1);
  font: inherit;
  text-align: start;
  cursor: pointer;
  transition: background-color .18s ease, color .18s ease;
}
.share-choice-card__top { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; color: var(--text-muted); }
.share-choice-card__top :deep(svg) { width: 20px; height: 20px; flex: none; }
.share-choice-card__check { opacity: 0; transition: opacity .18s ease; }
.share-choice-card__body { display: flex; flex-direction: column; gap: 0; }
.share-choice-card__label { font-size: 14px; font-weight: 600; line-height: 20px; overflow-wrap: anywhere; }
.share-choice-card__description { font-size: 11px; line-height: 14px; color: var(--text-muted); }
.share-choice-card:hover:not(:disabled) { background: color-mix(in srgb, var(--choice-card-color) 10%, var(--bg)); }
.share-choice-card--selected { background: color-mix(in srgb, var(--choice-card-color) 24%, var(--bg)); }
.share-choice-card--selected:hover:not(:disabled) { background: color-mix(in srgb, var(--choice-card-color) 30%, var(--bg)); }
.share-choice-card--selected .share-choice-card__top { color: color-mix(in srgb, var(--choice-card-color) 72%, var(--text-1)); }
.share-choice-card--selected .share-choice-card__check { opacity: 1; }
.share-choice-card--selected .share-choice-card__description { color: var(--text-2); }
.share-choice-card:disabled { opacity: .45; cursor: not-allowed; }
.share-choice-card:focus-visible { outline: 2px solid var(--choice-card-color); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .share-choice-card, .share-choice-card__check { transition: none; } }
</style>
