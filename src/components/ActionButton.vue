<template>
  <button class="share-action-button" :class="`share-action-button--${variant}`" :type="type" :disabled="disabled || loading" :aria-busy="loading || undefined">
    <LoadingIndicator v-if="loading" :label="loadingLabel" size="xs" aria-hidden="true" />
    <slot v-else name="icon" />
    <span><slot /></span>
  </button>
</template>
<script setup>
import LoadingIndicator from './LoadingIndicator.vue'
defineProps({
  variant: { type: String, default: 'primary', validator: value => ['primary', 'secondary', 'quiet'].includes(value) },
  type: { type: String, default: 'button' },
  disabled: Boolean,
  loading: Boolean,
  loadingLabel: { type: String, default: '' },
})
</script>
<style scoped>
.share-action-button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 38px; padding: 9px 16px; border: 1px solid transparent; border-radius: 8px; font-family: inherit; font-size: 13px; font-weight: 600; line-height: 1.3; cursor: pointer; transition: background .15s, border-color .15s; }
.share-action-button--primary { background: var(--accent); color: var(--text-on-accent); }
.share-action-button--primary:hover:not(:disabled) { background: var(--accent-hover); }
.share-action-button--secondary { background: transparent; border-color: var(--border-strong); color: var(--text-2); }
.share-action-button--quiet { background: transparent; color: var(--text-2); }
.share-action-button--secondary:hover:not(:disabled), .share-action-button--quiet:hover:not(:disabled) { background: var(--surface-raised); color: var(--text-1); }
.share-action-button:disabled { opacity: .45; cursor: not-allowed; }
.share-action-button:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
</style>
