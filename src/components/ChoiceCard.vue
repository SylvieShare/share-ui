<template>
  <button
    type="button"
    class="share-choice-card"
    :class="{
      'share-choice-card--selected': modelValue,
      'share-choice-card--inline': layout === 'inline',
      'share-choice-card--icon': layout === 'icon',
      'share-choice-card--described': description,
      'share-choice-card--tinted': tinted,
      'share-choice-card--centered': centered,
      'share-choice-card--outlined-selection': selectionIndicator === 'outline',
    }"
    :style="{ '--choice-card-color': color || 'var(--accent)' }"
    :aria-label="label"
    :aria-describedby="description ? descriptionId : undefined"
    :aria-pressed="modelValue"
    :disabled="disabled"
    @click="emit('update:modelValue', !modelValue)"
  >
    <span class="share-choice-card__top" aria-hidden="true">
      <span v-if="$slots.icon" class="share-choice-card__icon"><slot name="icon" /></span>
      <svg v-if="selectionIndicator === 'check'" class="share-choice-card__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
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
  tinted: Boolean,
  centered: Boolean,
  selectionIndicator: { type: String, default: 'check', validator: value => ['check', 'outline'].includes(value) },
  layout: { type: String, default: 'stacked', validator: value => ['inline', 'stacked', 'icon'].includes(value) },
})
const emit = defineEmits(['update:modelValue'])
const descriptionId = useId()
</script>

<style scoped>
.share-choice-card {
  display: flex;
  flex-direction: column;
  gap: var(--choice-card-gap, 8px);
  min-width: 0;
  min-height: var(--choice-card-min-height, 88px);
  padding: var(--choice-card-padding, 12px);
  border: 0;
  border-radius: var(--r-md);
  background: var(--bg);
  color: var(--text-1);
  font: inherit;
  text-align: start;
  cursor: pointer;
  transition: background-color .18s ease, color .18s ease, box-shadow .18s ease;
}
.share-choice-card__top { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; color: var(--text-muted); }
.share-choice-card__top :deep(svg) { width: 20px; height: 20px; flex: none; }
.share-choice-card__icon { display: inline-flex; }
.share-choice-card__check { opacity: 0; transition: opacity .18s ease; }
.share-choice-card__body { display: flex; flex-direction: column; gap: 0; }
.share-choice-card__label { font-size: 14px; font-weight: 600; line-height: 20px; overflow-wrap: anywhere; }
.share-choice-card__description { font-size: 11px; line-height: 14px; color: var(--text-muted); }
.share-choice-card--tinted {background:color-mix(in srgb,var(--choice-card-color) 9%,var(--bg))}
.share-choice-card--tinted .share-choice-card__label {color:var(--choice-card-color)}
.share-choice-card:hover:not(:disabled) { background: color-mix(in srgb, var(--choice-card-color) 10%, var(--bg)); }
.share-choice-card--selected { background: color-mix(in srgb, var(--choice-card-color) 24%, var(--bg)); }
.share-choice-card--selected:hover:not(:disabled) { background: color-mix(in srgb, var(--choice-card-color) 30%, var(--bg)); }
.share-choice-card--selected .share-choice-card__top { color: color-mix(in srgb, var(--choice-card-color) 72%, var(--text-1)); }
.share-choice-card--selected .share-choice-card__check { opacity: 1; }
.share-choice-card--selected .share-choice-card__description { color: var(--text-2); }
.share-choice-card--outlined-selection.share-choice-card--selected {
  background: color-mix(in srgb, var(--choice-card-color) 40%, var(--bg));
  box-shadow: inset 0 0 0 2px var(--choice-card-color);
}
.share-choice-card--outlined-selection.share-choice-card--selected:hover:not(:disabled) { background: color-mix(in srgb, var(--choice-card-color) 46%, var(--bg)); }
.share-choice-card:disabled { opacity: .45; cursor: not-allowed; }
.share-choice-card:focus-visible { outline: 2px solid var(--choice-card-color); outline-offset: 2px; }

.share-choice-card--inline {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  align-content: center;
  gap: var(--choice-card-gap, 0 6px);
  min-height: var(--choice-card-min-height, 52px);
  padding: var(--choice-card-padding, 8px);
}
.share-choice-card--inline .share-choice-card__top,
.share-choice-card--inline .share-choice-card__body { display: contents; }
.share-choice-card--inline .share-choice-card__icon { grid-area: 1 / 1; }
.share-choice-card--inline .share-choice-card__icon :deep(svg) { width: 16px; height: 16px; }
.share-choice-card--inline .share-choice-card__label {
  grid-area: 1 / 2;
  font-size: 13px;
  line-height: 18px;
}
.share-choice-card--inline .share-choice-card__check { grid-area: 1 / 3; width: 12px; height: 12px; }
.share-choice-card--inline.share-choice-card--described .share-choice-card__icon { grid-row: 1 / 3; }
.share-choice-card--inline.share-choice-card--described .share-choice-card__label { grid-column: 2 / 4; }
.share-choice-card--inline.share-choice-card--described .share-choice-card__check { grid-row: 2; }
.share-choice-card--inline .share-choice-card__description { grid-area: 2 / 2; }
.share-choice-card--inline.share-choice-card--centered {grid-template-columns:auto minmax(0,auto) auto;justify-content:center}
.share-choice-card--inline.share-choice-card--centered.share-choice-card--outlined-selection {grid-template-columns:auto minmax(0,auto)}
.share-choice-card--inline.share-choice-card--centered.share-choice-card--outlined-selection.share-choice-card--described .share-choice-card__label {grid-column:2}

.share-choice-card--icon {
  position: relative;
  align-items: center;
  justify-content: flex-start;
  padding: var(--choice-card-padding, 12px 8px);
  text-align: center;
}
.share-choice-card--icon .share-choice-card__top { justify-content: center; }
.share-choice-card--icon.share-choice-card--centered {justify-content:center}
.share-choice-card--icon .share-choice-card__icon :deep(svg) {
  width: var(--choice-card-icon-size, 28px);
  height: var(--choice-card-icon-size, 28px);
}
.share-choice-card--icon .share-choice-card__check { position: absolute; top: 6px; right: 6px; width: 12px; height: 12px; }
.share-choice-card--icon .share-choice-card__body { width: 100%; align-items: center; }
.share-choice-card--icon .share-choice-card__label {
  font-size: var(--choice-card-label-size, 11px);
  line-height: var(--choice-card-label-line-height, 14px);
}
@media (prefers-reduced-motion: reduce) { .share-choice-card, .share-choice-card__check { transition: none; } }
</style>
