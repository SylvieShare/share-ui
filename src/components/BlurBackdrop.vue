<template>
  <div class="blur-backdrop" aria-hidden="true" :style="backdropBlurStyle(radius)" />
</template>
<script setup>
import { backdropBlurStyle } from '../lib/blur.js'
defineProps({ radius: { type: [Number, String], default: 8 } })
</script>
<style scoped>
.blur-backdrop {
  position: absolute;
  inset: var(--blur-backdrop-inset, 0);
  pointer-events: none;
  border-radius: inherit;
  background: var(--blur-backdrop-background, transparent);
  mask-mode: alpha;
  -webkit-mask-image: var(--blur-backdrop-mask, none);
  mask-image: var(--blur-backdrop-mask, none);
}
</style>
