<template>
  <div class="morph-tile-header" :class="{ 'morph-tile-header--compact': compactHeader }">
    <component :is="showEdit && clickableTitle ? 'button' : 'div'" class="morph-tile-heading" :class="{ 'morph-tile-heading--editable': showEdit && clickableTitle }"
      :type="showEdit && clickableTitle ? 'button' : undefined" :disabled="showEdit && clickableTitle && editFade || undefined"
      :aria-label="showEdit && clickableTitle ? `${editLabel}: ${title}` : undefined" @click.stop="showEdit && clickableTitle && !editFade && $emit('edit', $event)">
      <span class="morph-tile-title"><slot>{{ title }}</slot></span>
      <svg v-if="showEdit && clickableTitle" class="morph-tile-pencil" :class="{ 'morph-tile-pencil--hidden': editFade }" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
      <button v-else-if="showEdit" class="morph-tile-edit" type="button" :aria-label="`${editLabel}: ${title}`" :disabled="editFade" @click.stop="$emit('edit', $event)">
        <svg class="morph-tile-pencil" :class="{ 'morph-tile-pencil--hidden': editFade }" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
      </button>
    </component>
    <div v-if="$slots.aside" class="morph-tile-aside" @click.stop><slot name="aside" /></div>
  </div>
</template>
<script setup>
defineProps({ title: { type: String, default: '' }, compactHeader: Boolean, showEdit: Boolean, editFade: Boolean, clickableTitle: { type: Boolean, default: true }, editLabel: { type: String, default: '' } })
defineEmits(['edit'])
</script>
<style scoped>
.morph-tile-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-width: 0; }
.morph-tile-heading { display: flex; align-items: center; gap: 6px; min-width: 0; min-height: 24px; margin: 0; padding: 0; border: 0; background: transparent; color: var(--text-muted); font: inherit; text-align: left; }
.morph-tile-title { font-size: 12px; font-weight: 700; line-height: 1.35; letter-spacing: .06em; text-transform: uppercase; overflow-wrap: anywhere; }
.morph-tile-heading--editable, .morph-tile-edit { cursor: pointer; }
.morph-tile-edit { display: grid; place-items: center; flex: 0 0 24px; width: 24px; height: 24px; padding: 0; border: 0; background: none; color: inherit; }
.morph-tile-pencil { flex: 0 0 14px; width: 14px; height: 14px; opacity: .55; transition: opacity .2s; }
.morph-tile-pencil--hidden { opacity: 0; }
.morph-tile-heading:disabled, .morph-tile-edit:disabled { cursor: default; }
.morph-tile-heading--editable:hover:not(:disabled), .morph-tile-edit:hover:not(:disabled) { color: var(--accent); }
.morph-tile-heading:focus-visible, .morph-tile-edit:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 3px; }
.morph-tile-aside { flex: 0 0 auto; }
.morph-tile-header--compact .morph-tile-heading { gap: 4px; min-height: 18px; }
.morph-tile-header--compact .morph-tile-title { font-size: 9px; line-height: 1.3; letter-spacing: .04em; overflow-wrap: normal; }
.morph-tile-header--compact .morph-tile-pencil { flex-basis: 12px; width: 12px; height: 12px; }
.morph-tile-header--compact .morph-tile-edit { flex-basis: 18px; width: 18px; height: 18px; }
</style>
