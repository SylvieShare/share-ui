<template>
  <component :is="embedded ? 'section' : BaseTile" class="share-section-list" :class="{ 'share-section-list--embedded': embedded, 'share-section-list--compact': compact }" :aria-label="title || undefined">
    <header v-if="title || $slots.header || $slots.aside" class="share-section-list__header">
      <slot name="header">
        <span v-if="$slots.icon" class="share-section-list__icon"><slot name="icon" /></span>
        <span class="share-section-list__title">{{ title }}</span>
        <span class="share-section-list__line" aria-hidden="true" />
        <slot name="aside" />
      </slot>
    </header>
    <slot name="body">
      <component :is="transitionName ? TransitionGroup : 'div'" v-bind="listAttrs" :tag="transitionName ? 'div' : undefined" :name="transitionName || undefined" class="share-section-list__rows">
        <slot />
      </component>
    </slot>
    <footer v-if="$slots.footer" class="share-section-list__footer"><slot name="footer" /></footer>
  </component>
</template>

<script setup>
import { TransitionGroup } from 'vue'
import BaseTile from './BaseTile.vue'

defineProps({
  title: { type: String, default: '' },
  embedded: { type: Boolean, default: false },
  compact: { type: Boolean, default: false },
  transitionName: { type: String, default: '' },
  listAttrs: { type: Object, default: () => ({}) },
})
</script>

<style scoped>
.share-section-list { min-width: 0; padding: 16px 18px 8px; }
.share-section-list--compact { padding: 9px 10px 10px; }
.share-section-list--embedded { padding: 0; }
.share-section-list__header { display: flex; align-items: center; gap: 10px; min-width: 0; margin-bottom: 10px; }
.share-section-list__header :slotted(*) { min-width: 0; }
.share-section-list__title { color: var(--text-muted); font-size: 12px; font-weight: 650; letter-spacing: .08em; line-height: 1.15; text-transform: uppercase; }
.share-section-list__icon { display: inline-flex; color: var(--text-muted); }
.share-section-list__line { flex: 1; min-width: 20px; height: 1px; background: color-mix(in srgb, var(--text-muted) 42%, transparent); }
.share-section-list__rows { display: flex; flex-direction: column; min-width: 0; }
/* Divide slot roots, including menu triggers, rather than their nested content. */
.share-section-list__rows :deep(> * + *) { border-top: 1px solid var(--border); }
.share-section-list__footer { padding: 10px 0 4px; }
.share-section-list--compact .share-section-list__header { margin-bottom: 6px; }
@media (max-width: 760px) {
  .share-section-list { padding: 12px 14px 4px; }
  .share-section-list--compact { padding: 9px 10px 10px; }
  .share-section-list--embedded { padding: 0; }
  .share-section-list__header { margin-bottom: 4px; }
}
</style>
