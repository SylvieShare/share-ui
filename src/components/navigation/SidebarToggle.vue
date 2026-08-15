<template>
  <button
    type="button"
    class="share-sidebar-toggle sidebar-toggle"
    :aria-label="expanded ? collapseLabel : expandLabel"
    :title="expanded ? collapseLabel : expandLabel"
  >
    <span class="share-sidebar-toggle__icon sidebar-icon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2.25" y="2.25" width="13.5" height="13.5" rx="2" stroke="currentColor" stroke-width="1.5" />
        <path d="M6.25 2.75v12.5" stroke="currentColor" stroke-width="1.5" />
        <path v-if="expanded" d="m11 6-3 3 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path v-else d="m9 6 3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <span class="share-sidebar-label sidebar-label">{{ expanded ? collapseLabel : expandLabel }}</span>
  </button>
</template>

<script setup>
defineProps({
  expanded: { type: Boolean, default: false },
  expandLabel: { type: String, default: 'Expand sidebar' },
  collapseLabel: { type: String, default: 'Collapse sidebar' },
})
</script>

<style scoped>
.share-sidebar-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 9px;
  color: var(--text-2);
  font: inherit;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
}

.share-sidebar-toggle:hover { color: var(--text-1); background: var(--surface-raised); }
.share-sidebar-toggle__icon { display: inline-flex; align-items: center; justify-content: center; width: 42px; flex: 0 0 42px; }
.share-sidebar-toggle .share-sidebar-label { color: var(--text-muted); font-size: 12px; }
</style>
