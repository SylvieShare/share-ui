<template>
  <component
    :is="as"
    class="share-sidebar-link sidebar-link"
    :class="{ active }"
    :title="title || label"
    :aria-current="active ? 'page' : undefined"
    v-bind="$attrs"
  >
    <span class="share-sidebar-icon sidebar-icon" aria-hidden="true">
      <slot name="icon">
        <component v-if="icon" :is="icon" :size="20" :stroke-width="1.8" />
      </slot>
    </span>
    <span class="share-sidebar-label sidebar-label"><slot>{{ label }}</slot></span>
  </component>
</template>

<script setup>
defineOptions({ inheritAttrs: false })

defineProps({
  as: { type: [String, Object, Function], default: 'a' },
  icon: { type: [Object, Function], default: null },
  label: { type: String, default: '' },
  title: { type: String, default: '' },
  active: { type: Boolean, default: false },
})
</script>

<style scoped>
.share-sidebar-link {
  position: relative;
  box-sizing: border-box;
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
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
}

.share-sidebar-link::before {
  position: absolute;
  inset: 8px auto 8px -10px;
  width: 3px;
  background: var(--accent);
  border-radius: 0 3px 3px 0;
  content: '';
  opacity: 0;
  transition: opacity 0.15s ease;
}

.share-sidebar-link:hover { color: var(--text-1); background: var(--surface-raised); }
.share-sidebar-link.active { color: var(--text-1); background: color-mix(in srgb, var(--accent) 12%, transparent); }
.share-sidebar-link.active::before { opacity: 1; }
.share-sidebar-link.active .share-sidebar-icon { color: var(--accent-soft); }
.share-sidebar-icon { display: inline-flex; align-items: center; justify-content: center; width: 42px; flex: 0 0 42px; }

@media (max-width: 768px) {
  :global(.share-app-sidebar--mobile-top) .share-sidebar-link {
    width: auto;
    min-width: 42px;
    padding-right: 0;
    flex-shrink: 0;
  }

  :global(.share-app-sidebar--mobile-top) .share-sidebar-link.active {
    padding-right: 12px;
  }

  :global(.share-app-sidebar--mobile-top) .share-sidebar-link::before { display: none; }
}
</style>

<style>
.share-sidebar-label {
  min-width: 0;
  overflow: hidden;
  opacity: 0;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform: translateX(-5px);
  transition: opacity 0.14s ease, transform 0.22s ease;
}

.share-app-sidebar--expanded .share-sidebar-label {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.05s;
}

@media (max-width: 768px) {
  .share-app-sidebar--mobile-top .share-sidebar-label { display: none; }
  .share-app-sidebar--mobile-top .share-sidebar-link.active .share-sidebar-label { display: inline; opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .share-sidebar-label { transition: none; }
}
</style>
