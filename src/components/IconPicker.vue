<template>
  <div class="share-icon-picker" role="group" :aria-label="label">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="share-icon-picker__option"
      :class="{ 'share-icon-picker__option--selected': option.value === modelValue }"
      :aria-label="option.label || String(option.value)"
      :aria-pressed="option.value === modelValue"
      :title="option.label || String(option.value)"
      :disabled="disabled || option.disabled"
      @click="$emit('update:modelValue', option.value)"
    >
      <slot name="icon" :option="option"><component :is="option.icon" :size="18" aria-hidden="true" /></slot>
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, default: () => [] },
  label: { type: String, required: true },
  disabled: { type: Boolean, default: false },
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.share-icon-picker { display: flex; flex-wrap: wrap; gap: 6px; min-width: 0; max-height: 168px; overflow-y: auto; padding: 1px; }
.share-icon-picker__option { width: 34px; height: 34px; flex: none; display: grid; place-items: center; border: 1px solid var(--border); border-radius: 8px; background: var(--surface-raised); color: var(--text-2); cursor: pointer; transition: color .12s, background .12s, border-color .12s; }
.share-icon-picker__option:hover { background: var(--surface-active); color: var(--text-1); }
.share-icon-picker__option:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.share-icon-picker__option--selected { border-color: var(--accent); color: var(--text-on-accent); background: color-mix(in srgb, var(--accent) 24%, var(--surface-raised)); }
.share-icon-picker__option:disabled { opacity: .5; cursor: default; }
</style>
