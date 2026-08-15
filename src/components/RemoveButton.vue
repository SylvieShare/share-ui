<template>
  <button
    class="share-remove-button"
    :class="`share-remove-button--${variant}`"
    type="button"
    :disabled="disabled"
    :aria-label="label"
    @click="$emit('click', $event)"
  >
    <span class="share-remove-button__cross" aria-hidden="true" />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'inline' },
  label: { type: String, required: true },
  disabled: { type: Boolean, default: false },
})
defineEmits(['click'])
</script>

<style scoped>
.share-remove-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  padding: 0;
  border: 0;
  background: none;
  color: color-mix(in srgb, var(--text-muted) 65%, transparent);
  cursor: pointer;
  transition: color .12s, background .12s, border-color .12s;
}
.share-remove-button:hover:not(:disabled) { color: var(--danger); }
.share-remove-button:disabled { opacity: .35; cursor: not-allowed; }
.share-remove-button--inline { width: 22px; height: 22px; border-radius: 5px; }
.share-remove-button--inline:hover:not(:disabled) { background: color-mix(in srgb, var(--danger) 12%, transparent); }
.share-remove-button--boxed {
  width: 30px;
  height: 30px;
  border: 1px solid color-mix(in srgb, var(--text-on-accent) 8%, transparent);
  border-radius: 6px;
  background: color-mix(in srgb, var(--text-on-accent) 4%, transparent);
}
.share-remove-button--boxed:hover:not(:disabled) { border-color: color-mix(in srgb, var(--danger) 40%, transparent); }
.share-remove-button__cross { position: relative; width: 11px; height: 11px; }
.share-remove-button__cross::before,
.share-remove-button__cross::after {
  content: '';
  position: absolute;
  inset: 50% 0 auto;
  height: 1.5px;
  border-radius: 1px;
  background: currentColor;
}
.share-remove-button__cross::before { transform: rotate(45deg); }
.share-remove-button__cross::after { transform: rotate(-45deg); }
</style>
