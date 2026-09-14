<template>
  <span class="tile-accent-strip" :style="{ background: color || 'var(--tile-color, var(--accent))' }" aria-hidden="true" />
</template>
<script setup>
defineProps({ color: { type: String, default: null } })
</script>
<style scoped>
.tile-accent-strip { position: absolute; top: var(--r-lg); bottom: var(--r-lg); left: 0; width: 3px; border-radius: 0 2px 2px 0; pointer-events: none; }
</style>
