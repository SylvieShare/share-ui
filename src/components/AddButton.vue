<template>
  <button
    class="share-add-button"
    :class="[
      `share-add-button--${variant}`,
      { 'share-add-button--block': block },
    ]"
    type="button"
    :disabled="disabled"
    :aria-label="label || undefined"
    :title="variant === 'icon' ? (label || undefined) : undefined"
    @click="$emit('click', $event)"
  >
    <span class="share-add-button__plus" aria-hidden="true">+</span>
    <span v-if="variant !== 'icon'" class="share-add-button__text"><slot>{{ label }}</slot></span>
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  variant: { type: String, default: 'inline' },
  block: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})
defineEmits(['click'])
</script>

<style scoped>
.share-add-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: 1px dashed var(--border-strong);
  border-radius: 8px;
  color: var(--text-muted);
  font: inherit;
  cursor: pointer;
  transition: border-color .12s, color .12s, background .12s, transform .1s;
}
.share-add-button--inline { padding: 7px 12px; font-size: 13px; text-align: left; }
.share-add-button--block { width: 100%; justify-content: flex-start; }
.share-add-button--icon { width: 34px; height: 34px; flex: none; padding: 0; color: var(--accent); font-size: 20px; }
.share-add-button:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent-soft);
  background: color-mix(in srgb, var(--accent) 6%, transparent);
}
.share-add-button:active:not(:disabled) { transform: scale(.95); }
.share-add-button:disabled { opacity: .45; cursor: not-allowed; }
.share-add-button__plus { font-size: 15px; line-height: 1; }
.share-add-button--icon .share-add-button__plus { font-size: 20px; }
</style>
