<template>
  <span class="share-skeleton" :class="{ 'share-skeleton--round': round }" :style="{ width, height }" aria-hidden="true" />
</template>

<script setup>
defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '12px' },
  round: { type: Boolean, default: false },
})
</script>

<style scoped>
.share-skeleton { position: relative; display: block; flex-shrink: 0; overflow: hidden; border-radius: 6px; background: color-mix(in srgb, var(--text-muted) 12%, var(--surface)); }
.share-skeleton--round { border-radius: 50%; }
.share-skeleton::after { content: ''; position: absolute; inset: 0; background: linear-gradient(100deg, transparent 20%, color-mix(in srgb, var(--accent) 9%, transparent) 50%, transparent 80%); transform: translateX(-100%); animation: share-skeleton-sweep 1.8s ease-in-out infinite; }
@keyframes share-skeleton-sweep { to { transform: translateX(100%); } }
@media (prefers-reduced-motion: reduce) { .share-skeleton::after { animation: none; transform: none; } }
</style>
