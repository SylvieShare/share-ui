<template>
  <ActionButton
    class="share-icon-toggle"
    :class="{ 'share-icon-toggle--on': modelValue }"
    :style="{ '--icon-toggle-color': color || 'var(--accent)' }"
    variant="secondary" icon-only :disabled="disabled"
    :aria-label="label" :title="label" :aria-pressed="modelValue"
    @click="toggle"
  >
    <template #icon>
      <span class="share-icon-toggle__icon" aria-hidden="true"><slot name="icon" /></span>
      <svg class="share-icon-toggle__slash" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 2 22 22" pathLength="1" />
      </svg>
    </template>
  </ActionButton>
</template>
<script setup>
import ActionButton from './ActionButton.vue'
const props = defineProps({ modelValue: Boolean, label: { type: String, required: true }, color: { type: String, default: null }, disabled: Boolean })
const emit = defineEmits(['update:modelValue'])
function toggle() { if (!props.disabled) emit('update:modelValue', !props.modelValue) }
</script>
<style scoped>
.share-icon-toggle.share-action-button--icon-only { width: 40px; height: 40px; }
.share-icon-toggle { position: relative; color: color-mix(in srgb, var(--icon-toggle-color) 65%, var(--text-muted)); transition: color .2s ease, border-color .2s ease, background .2s ease; }
.share-icon-toggle.share-action-button:hover:not(:disabled) { color: var(--icon-toggle-color); }
.share-icon-toggle--on { color: var(--icon-toggle-color); background: color-mix(in srgb, var(--icon-toggle-color) 18%, var(--surface-raised)); }
.share-icon-toggle__icon { display: grid; place-items: center; width: 24px; height: 24px; opacity: .4; transition: opacity .2s ease; }
.share-icon-toggle--on .share-icon-toggle__icon { opacity: 1; }
.share-icon-toggle__icon :deep(svg) { width: 24px; height: 24px; }
.share-icon-toggle__slash { position: absolute; width: 24px; height: 24px; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; }
.share-icon-toggle__slash path { stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 0; opacity: 1; transition: stroke-dashoffset .22s ease, opacity .18s ease; }
.share-icon-toggle--on .share-icon-toggle__slash path { stroke-dashoffset: 1; opacity: 0; }
@media (prefers-reduced-motion: reduce) { .share-icon-toggle, .share-icon-toggle__icon, .share-icon-toggle__slash path { transition: none; } }
</style>
