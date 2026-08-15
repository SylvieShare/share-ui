<template>
  <div class="share-sidebar-group"><slot>{{ label }}</slot></div>
</template>

<script setup>
defineProps({ label: { type: String, default: '' } })
</script>

<style scoped>
.share-sidebar-group {
  min-width: 0;
  max-height: 0;
  padding: 0 12px;
  overflow: hidden;
  color: var(--text-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0;
  text-transform: uppercase;
  white-space: nowrap;
  transition: max-height 0.2s ease, padding 0.2s ease, opacity 0.12s ease;
}

</style>

<style>
.share-app-sidebar--expanded .share-sidebar-group {
  max-height: 34px;
  padding-top: 14px;
  padding-bottom: 4px;
  opacity: 1;
}

@media (max-width: 768px) {
  .share-app-sidebar--mobile-top .share-sidebar-group { display: none; }
}
</style>
