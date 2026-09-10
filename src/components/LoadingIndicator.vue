<template>
  <span class="share-loading" :class="{ 'share-loading--inline': inline }" :style="{ '--loading-size': resolvedSize }" role="status" :aria-label="label">
    <svg class="share-loading__art" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle class="share-loading__track" cx="12" cy="12" r="9" vector-effect="non-scaling-stroke" />
      <circle class="share-loading__arc" cx="12" cy="12" r="9" stroke-dasharray="16 41" vector-effect="non-scaling-stroke" />
    </svg>
    <span v-if="showLabel" class="share-loading__label" aria-hidden="true">{{ label }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  size: { type: [String, Number], default: 'md', validator: value => (typeof value === 'number' && value > 0) || ['xs', 'sm', 'md', 'lg'].includes(value) },
  inline: { type: Boolean, default: false },
  showLabel: { type: Boolean, default: false },
})
const resolvedSize = computed(() => `${typeof props.size === 'number' ? props.size : { xs: 16, sm: 32, md: 72, lg: 104 }[props.size] || 72}px`)
</script>

<style scoped>
.share-loading { display: inline-flex; flex-shrink: 0; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: var(--accent); }
.share-loading__art { width: var(--loading-size); height: var(--loading-size); overflow: visible; }
.share-loading--inline { flex-direction: row; gap: 8px; vertical-align: middle; }
.share-loading--inline .share-loading__label { font: inherit; letter-spacing: inherit; color: inherit; }
.share-loading__track { stroke: color-mix(in srgb, currentColor 16%, transparent); stroke-width: 2; }
.share-loading__arc { stroke: currentColor; stroke-width: 2; stroke-linecap: round; transform-origin: 12px 12px; animation: share-loading-spin 1s linear infinite; }
.share-loading__label { color: var(--text-muted); font-size: 12px; line-height: 1.5; letter-spacing: .04em; text-align: center; }
@keyframes share-loading-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .share-loading__arc { animation: none; }
}
</style>
