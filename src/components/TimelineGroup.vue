<template>
  <section class="share-timeline-group" :class="{ 'share-timeline-group--separated': separated, 'share-timeline-group--sticky': sticky }" :style="layoutStyle">
    <div class="share-timeline-group__rail">
      <div class="share-timeline-group__identity"><slot name="identity" /></div>
    </div>
    <div class="share-timeline-group__content"><slot /></div>
    <div v-if="$slots.footer" class="share-timeline-group__footer"><slot name="footer" /></div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  color: { type: String, default: 'var(--accent)' },
  railWidth: { type: String, default: '40px' },
  compactRailWidth: { type: String, default: '32px' },
  gap: { type: Number, default: 12 },
  compactGap: { type: Number, default: 8 },
  paddingBlock: { type: Number, default: 16 },
  sticky: Boolean,
  separated: { type: Boolean, default: true },
})
const layoutStyle = computed(() => ({
  '--timeline-color': props.color,
  '--timeline-rail-width': props.railWidth,
  '--timeline-compact-rail-width': props.compactRailWidth,
  '--timeline-gap': `${props.gap}px`,
  '--timeline-compact-gap': `${props.compactGap}px`,
  '--timeline-padding': `${props.paddingBlock}px`,
}))
</script>
<style scoped>
.share-timeline-group { display: grid; grid-template-columns: var(--timeline-rail-width) minmax(0, 1fr); gap: 12px var(--timeline-gap); min-width: 0; padding-block: var(--timeline-padding); }
.share-timeline-group--separated { border-bottom: 1px solid var(--border); }
.share-timeline-group__rail { --timeline-connector: color-mix(in srgb, var(--timeline-color) 38%, var(--border)); position: relative; min-width: 0; border-right: 2px solid var(--timeline-connector); }
.share-timeline-group__rail::after { content: ''; position: absolute; top: 0; right: -5px; width: 8px; height: 8px; box-sizing: border-box; border-top: 2px solid var(--timeline-connector); border-left: 2px solid var(--timeline-connector); transform: rotate(45deg); }
.share-timeline-group__identity { min-width: 0; padding-right: var(--timeline-gap); }
.share-timeline-group--sticky .share-timeline-group__identity { position: sticky; top: 12px; }
.share-timeline-group__content, .share-timeline-group__footer { min-width: 0; }
.share-timeline-group__footer { grid-column: 1 / -1; }
@media (max-width: 600px) {
  .share-timeline-group { grid-template-columns: var(--timeline-compact-rail-width) minmax(0, 1fr); column-gap: var(--timeline-compact-gap); }
  .share-timeline-group__identity { padding-right: var(--timeline-compact-gap); }
}
</style>
