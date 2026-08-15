<template>
  <div class="share-editor-panel" :class="{ 'share-editor-panel--compact': compact }">
    <div v-if="title || $slots.title" class="share-editor-panel__title"><slot name="title">{{ title }}</slot></div>
    <slot />
  </div>
</template>
<script setup>
defineProps({ title: { type: String, default: '' }, compact: { type: Boolean, default: false } })
</script>
<style scoped>
.share-editor-panel { display: flex; flex-direction: column; gap: 12px; padding: 18px 18px 20px; }
.share-editor-panel--compact { padding: 16px 18px 18px; }
.share-editor-panel__title { color: var(--text-1); font-size: 16px; font-weight: 700; }
</style>
