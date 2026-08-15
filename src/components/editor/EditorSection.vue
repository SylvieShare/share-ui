<template>
  <section class="share-editor-section">
    <EditorSectionTitle v-if="title || $slots.title" :title="title">
      <template v-if="$slots.title" #default><slot name="title" /></template>
      <template v-if="$slots.actions" #actions><slot name="actions" /></template>
    </EditorSectionTitle>
    <slot />
  </section>
</template>
<script setup>
import EditorSectionTitle from './EditorSectionTitle.vue'
defineProps({ title: { type: String, default: '' } })
</script>
<style scoped>
.share-editor-section { display: flex; flex-direction: column; gap: 10px; }
.share-editor-section + .share-editor-section { padding-top: 14px; border-top: 1px solid var(--border); }
</style>
