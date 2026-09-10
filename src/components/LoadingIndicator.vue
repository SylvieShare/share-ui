<template>
  <span class="share-loading" :class="{ 'share-loading--inline': inline }" :style="{ '--loading-size': resolvedSize }" role="status" :aria-label="label">
    <svg class="share-loading__art" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle class="share-loading__track" cx="50" cy="50" r="38" />
      <g class="share-loading__orbit">
        <circle class="share-loading__arc" cx="50" cy="50" r="38" stroke-dasharray="52 187" />
        <circle class="share-loading__spark" cx="50" cy="12" r="2.5" />
      </g>
      <g class="share-loading__orbit share-loading__orbit--inner">
        <circle class="share-loading__arc" cx="50" cy="50" r="28" stroke-dasharray="25 63" />
      </g>
      <path class="share-loading__core" d="M50 33 62 50 50 67 38 50Z" />
      <path class="share-loading__facet" d="M50 33V67M38 50H62" />
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
.share-loading__track { stroke: color-mix(in srgb, currentColor 14%, transparent); stroke-width: 1; }
.share-loading__arc { stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; }
.share-loading__spark { fill: currentColor; }
.share-loading__orbit { transform-origin: 50px 50px; animation: share-loading-orbit 3.6s linear infinite; }
.share-loading__orbit--inner { animation-duration: 5.4s; animation-direction: reverse; opacity: .45; }
.share-loading__core { fill: color-mix(in srgb, currentColor 14%, transparent); stroke: currentColor; stroke-width: 1.2; animation: share-loading-breathe 2.4s ease-in-out infinite; }
.share-loading__facet { stroke: currentColor; stroke-width: .7; opacity: .4; }
.share-loading__label { color: var(--text-muted); font-size: 12px; line-height: 1.5; letter-spacing: .04em; text-align: center; }
@keyframes share-loading-orbit { to { transform: rotate(360deg); } }
@keyframes share-loading-breathe { 50% { opacity: .5; } }
@media (prefers-reduced-motion: reduce) {
  .share-loading__orbit, .share-loading__core { animation: none; }
}
</style>
