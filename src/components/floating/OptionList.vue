<template>
  <div :id="id" class="share-option-list" role="listbox" :aria-label="label">
    <div
      v-for="(option, index) in options"
      :id="`${id}-${index}`"
      :key="option.value"
      class="share-option-list__option"
      :class="{ 'share-option-list__option--active': index === activeIndex }"
      role="option"
      :aria-selected="index === activeIndex"
      :aria-disabled="option.disabled || undefined"
      @mouseenter="$emit('active', index); $emit('hover', { option, event: $event })"
      @mouseleave="$emit('leave')"
      @mousedown.prevent.stop
      @click.stop="!option.disabled && $emit('select', option)"
    ><slot name="option" :option="option">{{ option.label }}</slot></div>
    <div v-if="!options.length" class="share-option-list__empty"><slot name="empty">{{ emptyLabel }}</slot></div>
    <slot name="footer" />
  </div>
</template>
<script setup>
import { useId } from 'vue'
defineProps({
  id: { type: String, default: () => useId() },
  label: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  activeIndex: { type: Number, default: -1 },
  emptyLabel: { type: String, default: 'No options found' },
})
defineEmits(['select', 'active', 'hover', 'leave'])
</script>
<style scoped>
.share-option-list { min-width: 0; max-height: 260px; overflow-y: auto; }
.share-option-list__option { display: flex; align-items: center; gap: 6px; min-height: 32px; padding: 7px 10px; border-radius: 6px; color: var(--text-2); font-size: 13px; cursor: pointer; }
.share-option-list__option:hover, .share-option-list__option--active { background: var(--surface-active); color: var(--text-1); }
.share-option-list__option[aria-disabled=true] { opacity: .5; cursor: default; }
.share-option-list__empty { padding: 10px; color: var(--text-muted); font-size: 12px; }
</style>
