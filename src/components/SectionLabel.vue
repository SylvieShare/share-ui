<template>
  <div class="share-section-label" :class="{ 'share-section-label--border': border }" :style="alignStyle">
    <span class="share-section-label__text"><slot>{{ title }}</slot></span>
    <span v-if="$slots.actions" class="share-section-label__actions"><slot name="actions" /></span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: { type: String, default: '' },
  border: { type: Boolean, default: false },
  align: { type: String, default: '' },
})
const alignStyle = computed(() => {
  const map = { left: 'flex-start', center: 'center', right: 'flex-end' }
  return props.align && map[props.align] ? { justifyContent: map[props.align] } : {}
})
</script>

<style scoped>
.share-section-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
  color: var(--text-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.share-section-label--border { margin-bottom: 6px; padding-bottom: 5px; border-bottom: 1px solid var(--border); }
.share-section-label__text { min-width: 0; }
.share-section-label__actions { display: inline-flex; align-items: center; gap: 6px; }
</style>
