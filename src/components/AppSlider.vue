<template>
  <input
    class="share-slider"
    type="range"
    :value="modelValue"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :aria-label="label || undefined"
    :style="sliderStyle"
    @input="onInput"
    @change="onChange"
  />
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: { type: Number, required: true },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 1 },
  step: { type: [Number, String], default: .01 },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue', 'change'])
const percent = computed(() => {
  const range = props.max - props.min
  if (!range) return 0
  return Math.max(0, Math.min(100, ((props.modelValue - props.min) / range) * 100))
})
const sliderStyle = computed(() => ({ '--share-slider-percent': `${percent.value}%` }))
function valueFromEvent(event) { return Number(event.target.value) }
function onInput(event) { emit('update:modelValue', valueFromEvent(event)) }
function onChange(event) { emit('change', valueFromEvent(event)) }
</script>

<style scoped>
.share-slider {
  width: 100%;
  min-width: 0;
  height: 18px;
  margin: 0;
  border: 0;
  outline: 0;
  background: transparent;
  appearance: none;
  cursor: pointer;
}
.share-slider:disabled { opacity: .4; cursor: not-allowed; }
.share-slider::-webkit-slider-runnable-track {
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(to right, var(--accent) 0 var(--share-slider-percent), color-mix(in srgb, var(--text-on-accent) 8%, transparent) var(--share-slider-percent) 100%);
}
.share-slider::-webkit-slider-thumb {
  width: 12px;
  height: 12px;
  margin-top: -4px;
  border: 0;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent);
  appearance: none;
}
.share-slider::-moz-range-track { height: 4px; border-radius: 2px; background: color-mix(in srgb, var(--text-on-accent) 8%, transparent); }
.share-slider::-moz-range-progress { height: 4px; border-radius: 2px; background: var(--accent); }
.share-slider::-moz-range-thumb { width: 12px; height: 12px; border: 0; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent); }
</style>
