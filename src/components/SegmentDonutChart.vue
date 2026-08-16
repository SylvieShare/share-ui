<template>
  <figure class="segment-donut" :aria-label="ariaLabel">
    <div class="segment-donut__visual" :style="{ '--segment-donut-size': `${size}px` }">
      <svg viewBox="0 0 120 120" role="img" aria-hidden="true">
        <circle class="segment-donut__track" cx="60" cy="60" r="50" pathLength="100" />
        <circle
          v-for="segment in normalizedSegments"
          :key="segment.key"
          class="segment-donut__segment"
          cx="60"
          cy="60"
          r="50"
          pathLength="100"
          :stroke="segment.color"
          :stroke-width="strokeWidth"
          :stroke-dasharray="`${segment.percent} ${100 - segment.percent}`"
          :stroke-dashoffset="-segment.offset"
        />
      </svg>
      <div class="segment-donut__center">
        <slot name="center" :total="total">
          <strong>{{ formatValue(total) }}</strong>
          <span>{{ totalLabel }}</span>
        </slot>
      </div>
    </div>

    <ul v-if="showLegend" class="segment-donut__legend">
      <li v-for="segment in legendSegments" :key="segment.key">
        <i :style="{ '--segment-color': segment.color }" aria-hidden="true" />
        <span>{{ segment.label }}</span>
        <strong>{{ formatValue(segment.value) }}</strong>
        <small v-if="showPercent">{{ segment.percent.toLocaleString(undefined, { maximumFractionDigits: 1 }) }}%</small>
      </li>
    </ul>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

const DEFAULT_COLORS = ['var(--accent)', 'var(--info)', 'var(--success)', 'var(--warning)', 'var(--danger)']

const props = defineProps({
  segments: { type: Array, default: () => [] },
  totalLabel: { type: String, default: '' },
  ariaLabel: { type: String, default: 'Распределение значений' },
  formatValue: { type: Function, default: value => String(value) },
  size: { type: Number, default: 220 },
  strokeWidth: { type: Number, default: 12 },
  showLegend: { type: Boolean, default: true },
  showPercent: { type: Boolean, default: true },
})

const cleanSegments = computed(() => props.segments.map((segment, index) => ({
  key: segment.key ?? index,
  label: segment.label ?? String(segment.key ?? index),
  value: Number.isFinite(Number(segment.value)) ? Math.max(0, Number(segment.value)) : 0,
  color: segment.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
})))
const total = computed(() => cleanSegments.value.reduce((sum, segment) => sum + segment.value, 0))
const legendSegments = computed(() => cleanSegments.value.map(segment => ({
  ...segment,
  percent: total.value > 0 ? (segment.value / total.value) * 100 : 0,
})))
const normalizedSegments = computed(() => {
  let offset = 0
  return legendSegments.value.filter(segment => segment.value > 0).map(segment => {
    const normalized = { ...segment, offset }
    offset += segment.percent
    return normalized
  })
})
</script>

<style scoped>
.segment-donut { min-width: 0; display: flex; align-items: center; justify-content: center; gap: 28px; margin: 0; color: var(--text-1); }
.segment-donut__visual { position: relative; width: min(var(--segment-donut-size), 44vw); aspect-ratio: 1; display: grid; flex: none; place-items: center; }
.segment-donut__visual svg { width: 100%; height: 100%; overflow: visible; transform: rotate(-90deg); }
.segment-donut__track, .segment-donut__segment { fill: none; }
.segment-donut__track { stroke-width: v-bind(strokeWidth); }
.segment-donut__track { stroke: var(--border); }
.segment-donut__segment { stroke-linecap: butt; transition: stroke-dasharray .35s ease, stroke-dashoffset .35s ease; }
.segment-donut__center { position: absolute; inset: 22%; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 3px; text-align: center; }
.segment-donut__center strong { max-width: 100%; overflow: hidden; font-size: clamp(18px, 3vw, 30px); line-height: 1; text-overflow: ellipsis; white-space: nowrap; }
.segment-donut__center span { color: var(--text-muted); font-size: 10px; line-height: 1.2; }
.segment-donut__legend { min-width: min(280px, 45vw); display: flex; flex-direction: column; gap: 9px; margin: 0; padding: 0; list-style: none; }
.segment-donut__legend li { min-width: 0; display: grid; grid-template-columns: 9px minmax(0, 1fr) auto auto; align-items: center; gap: 8px; }
.segment-donut__legend i { width: 9px; height: 9px; border-radius: 50%; background: var(--segment-color); }
.segment-donut__legend span { overflow: hidden; color: var(--text-2); font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
.segment-donut__legend strong { font-size: 12px; font-variant-numeric: tabular-nums; white-space: nowrap; }
.segment-donut__legend small { min-width: 42px; color: var(--text-muted); font-size: 9px; font-variant-numeric: tabular-nums; text-align: right; }
@media (max-width: 560px) { .segment-donut { flex-direction: column; gap: 18px; }.segment-donut__visual { width: min(var(--segment-donut-size), 64vw); }.segment-donut__legend { width: 100%; min-width: 0; } }
@media (prefers-reduced-motion: reduce) { .segment-donut__segment { transition: none; } }
</style>
