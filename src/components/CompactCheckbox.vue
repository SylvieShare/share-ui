<template>
  <button
    type="button"
    class="share-compact-checkbox"
    :class="{ 'share-compact-checkbox--checked': modelValue }"
    :disabled="disabled"
    :aria-label="label"
    :aria-checked="modelValue"
    role="checkbox"
    @click.stop="toggle"
    @pointerdown.stop
  >
    <svg v-if="modelValue" class="share-compact-checkbox__tick" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6.2l2.4 2.4 4.6-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  label: { type: String, required: true },
})
const emit = defineEmits(['update:modelValue'])
function toggle() { if (!props.disabled) emit('update:modelValue', !props.modelValue) }
</script>

<style scoped>
.share-compact-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  flex: none;
  margin: -9px;
  padding: 9px;
  border: 0;
  background: transparent;
  color: var(--text-on-accent);
  cursor: pointer;
}
.share-compact-checkbox::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  transform: translate(-50%, -50%);
  border: 1.5px solid var(--border-strong);
  border-radius: 5px;
  background: color-mix(in srgb, var(--text-on-accent) 4%, transparent);
  transition: background .12s, border-color .12s, box-shadow .12s;
}
.share-compact-checkbox:hover:not(:disabled)::before { border-color: color-mix(in srgb, var(--accent) 60%, transparent); }
.share-compact-checkbox:active:not(:disabled) { transform: scale(.92); }
.share-compact-checkbox--checked::before {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 18%, transparent);
}
.share-compact-checkbox:disabled { opacity: .35; cursor: not-allowed; }
.share-compact-checkbox__tick { position: relative; z-index: 1; width: 11px; height: 11px; }
</style>
