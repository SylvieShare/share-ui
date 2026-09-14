<template>
  <component :is="embedded ? 'div' : BaseTile" class="morph-tile" :color="embedded ? undefined : color" :tint="embedded ? undefined : tint" :framed="embedded ? undefined : framed" :interactive="embedded ? undefined : interactive" :style="{ '--morph-tile-padding': padding }" @click="$emit('click', $event)">
    <slot name="decoration" />
    <MorphTileHeader v-if="title || $slots.title || $slots.aside" :title="title" :show-edit="showEdit" :edit-label="editLabel" :edit-fade="editFade" :clickable-title="clickableTitle" @edit="$emit('edit', $event)">
      <template v-if="$slots.title" #default><slot name="title" /></template>
      <template v-if="$slots.aside" #aside><slot name="aside" /></template>
    </MorphTileHeader>
    <slot />
  </component>
</template>
<script setup>
import BaseTile from './BaseTile.vue'
import MorphTileHeader from './MorphTileHeader.vue'
defineProps({ title: { type: String, default: '' }, showEdit: Boolean, editLabel: { type: String, default: '' }, editFade: Boolean, clickableTitle: { type: Boolean, default: true }, embedded: Boolean, padding: { type: String, default: '12px' }, color: { type: String, default: null }, tint: Boolean, framed: Boolean, interactive: Boolean })
defineEmits(['click', 'edit'])
</script>
<style scoped>
:where(.morph-tile) { position: relative; min-width: 0; box-sizing: border-box; padding: var(--morph-tile-padding); }
.morph-tile > .morph-tile-header { margin-bottom: 8px; }
</style>
