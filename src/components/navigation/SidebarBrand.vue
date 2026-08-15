<template>
  <component
    :is="as"
    class="share-sidebar-brand sidebar-brand"
    :aria-label="ariaLabel || label"
    v-bind="$attrs"
  >
    <span class="share-sidebar-brand__icon sidebar-brand-icon" aria-hidden="true">
      <slot name="icon">
        <component v-if="icon" :is="icon" :size="22" :stroke-width="1.8" />
      </slot>
    </span>
    <span class="share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script setup>
defineOptions({ inheritAttrs: false })

defineProps({
  as: { type: [String, Object, Function], default: 'a' },
  icon: { type: [Object, Function], default: null },
  label: { type: String, default: '' },
  ariaLabel: { type: String, default: '' },
})
</script>

<style scoped>
.share-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  height: 42px;
  overflow: hidden;
  border-radius: 9px;
  color: var(--accent);
  text-decoration: none;
  flex: 1;
}

.share-sidebar-brand__icon { display: inline-flex; align-items: center; justify-content: center; width: 42px; flex: 0 0 42px; }
.share-sidebar-brand__label { font-weight: 700; letter-spacing: 0.03em; }

</style>

<style>
@media (max-width: 768px) {
  .share-app-sidebar--mobile-top .share-sidebar-brand { width: 42px; flex: 0 0 42px; }
}
</style>
