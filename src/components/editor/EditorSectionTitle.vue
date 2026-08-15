<template>
  <div class="share-editor-section-title">
    <span class="share-editor-section-title__text"><slot>{{ title }}</slot></span>
    <span v-if="$slots.actions" class="share-editor-section-title__actions"><slot name="actions" /></span>
  </div>
</template>
<script setup>
defineProps({ title: { type: String, default: '' } })
</script>
<style scoped>
.share-editor-section-title { display: flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.share-editor-section-title__text { min-width: 0; }
.share-editor-section-title__actions { display: inline-flex; align-items: center; gap: 6px; }
</style>
