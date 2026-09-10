<template>
  <div class="share-loading-state" :class="{ 'share-loading-state--compact': compact, 'share-loading-state--fill': fill }" aria-busy="true">
    <LoadingIndicator :label="label" :size="compact ? 'sm' : 'md'" :inline="compact" show-label />
  </div>
</template>

<script setup>
import LoadingIndicator from './LoadingIndicator.vue'
defineProps({
  label: { type: String, required: true },
  compact: { type: Boolean, default: false },
  fill: { type: Boolean, default: false },
})
</script>

<style scoped>
.share-loading-state { display: flex; align-items: center; justify-content: center; box-sizing: border-box; width: 100%; min-width: 0; min-height: 180px; padding: 32px 20px; }
.share-loading-state--compact { min-height: 0; padding: 12px 0; }
.share-loading-state--fill { flex: 1; min-height: 100%; }
</style>
