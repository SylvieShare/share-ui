<template>
  <AppModal
    v-if="open"
    :width="width"
    :z-index="zIndex"
    :aria-label="ariaLabel"
    :dismissible="dismissible"
    :show-close="false"
    :show-handle="false"
    :escape-blurs-input="escapeBlursInput"
    @close="$emit('close')"
    @opened="$emit('opened')"
  >
    <slot />
  </AppModal>
</template>

<script setup>
import AppModal from './AppModal.vue'
defineProps({
  open: { type: Boolean, default: false },
  width: { type: [Number, String], default: 420 },
  zIndex: { type: Number, default: 3000 },
  ariaLabel: { type: String, default: '' },
  dismissible: { type: Boolean, default: true },
  escapeBlursInput: { type: Boolean, default: true },
})
defineEmits(['close', 'opened'])
</script>
