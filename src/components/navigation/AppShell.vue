<template>
  <div
    class="share-app-shell"
    :class="[
      `share-app-shell--${sidebarMode}`,
      `share-app-shell--breakpoint-${mobileBreakpoint}`,
      { 'share-app-shell--without-sidebar': !sidebarVisible },
    ]"
    :style="shellStyle"
  >
    <slot v-if="sidebarVisible" name="sidebar" />
    <component :is="contentTag" class="share-app-shell__content">
      <slot />
    </component>
    <aside v-if="$slots.rail" class="share-app-shell__rail"><slot name="rail" /></aside>
    <slot name="overlay" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  sidebarMode: {
    type: String,
    default: 'column',
    validator: value => ['column', 'fixed'].includes(value),
  },
  sidebarVisible: { type: Boolean, default: true },
  mobileBreakpoint: {
    type: Number,
    default: 768,
    validator: value => [640, 768].includes(value),
  },
  contentTag: { type: String, default: 'main' },
  railWidth: { type: [Number, String], default: 0 },
})

const shellStyle = computed(() => ({
  '--share-shell-rail-w': typeof props.railWidth === 'number' ? `${props.railWidth}px` : props.railWidth,
}))
</script>

<style scoped>
.share-app-shell {
  box-sizing: border-box;
  min-width: 0;
  min-height: 100vh;
  min-height: 100dvh;
}

.share-app-shell--column {
  display: grid;
  grid-template-columns: var(--share-sidebar-collapsed-w, 64px) minmax(0, 1fr) var(--share-shell-rail-w, 0px);
  transition: grid-template-columns 0.28s ease;
}

.share-app-shell--fixed { display: block; }
.share-app-shell--fixed .share-app-shell__content { margin-left: var(--share-sidebar-collapsed-w, 64px); }
.share-app-shell--without-sidebar.share-app-shell--column { grid-template-columns: minmax(0, 1fr) var(--share-shell-rail-w, 0px); }
.share-app-shell--without-sidebar.share-app-shell--fixed .share-app-shell__content { margin-left: 0; }
.share-app-shell__content { min-width: 0; }
.share-app-shell__rail { min-width: 0; overflow: hidden; }

@media (max-width: 768px) {
  .share-app-shell--breakpoint-768.share-app-shell--column { grid-template-columns: minmax(0, 1fr); }
  .share-app-shell--breakpoint-768.share-app-shell--fixed .share-app-shell__content { margin-left: 0; }
  .share-app-shell--breakpoint-768 .share-app-shell__rail { display: none; }
}

@media (max-width: 640px) {
  .share-app-shell--breakpoint-640.share-app-shell--column { grid-template-columns: minmax(0, 1fr); }
  .share-app-shell--breakpoint-640.share-app-shell--fixed .share-app-shell__content { margin-left: 0; }
  .share-app-shell--breakpoint-640 .share-app-shell__rail { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .share-app-shell { transition: none; }
}
</style>
