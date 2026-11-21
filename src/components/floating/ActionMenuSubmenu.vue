<template>
  <div class="ras-root">
    <div ref="triggerEl" class="ras-trigger" @click.stop="toggle">
      <slot name="trigger" :open="isOpen" :toggle="toggle" />
    </div>

    <Transition name="share-popover-action" @before-enter="el => setFloatingInteractive(el, true)" @before-leave="el => setFloatingInteractive(el, false)">
      <div
        v-if="isMobile && isOpen"
        class="ras-inline"
        data-share-popover-related
        @click.stop
        @pointerdown.stop
      >
        <div class="ras-panel">
          <div v-if="label" class="ras-label">{{ label }}</div>
          <slot :close="close" />
        </div>
      </div>
    </Transition>

    <BasePopover
      v-if="!isMobile"
      :open="isOpen"
      :anchor="triggerEl"
      placement="right-start"
      :min-width="minWidth"
      :z-index="9400"
      popover-class="row-action-submenu-popover"
      related
      @update:open="onPopoverState"
    >
      <div class="ras-panel ras-panel--popover">
        <div v-if="label" class="ras-label">{{ label }}</div>
        <slot :close="close" />
      </div>
    </BasePopover>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { useIsMobile } from '../../composables/useMediaQuery.js'
import {
  setFloatingInteractive,
  activateActionSubmenu,
  deactivateActionSubmenu,
} from '../../internal/floatingState.js'
import BasePopover from './BasePopover.vue'

const props = defineProps({
  label: { type: String, default: '' },
  minWidth: { type: Number, default: 200 },
  disabled: { type: Boolean, default: false },
  mobileBreakpoint: { type: Number, default: 768 },
})

const token = Symbol('action-submenu')
const triggerEl = ref(null)
const isMobile = useIsMobile(props.mobileBreakpoint)
const isOpen = ref(false)

function open() {
  if (props.disabled || isOpen.value) return
  activateActionSubmenu(token, close)
  isOpen.value = true
}

function toggle() {
  if (props.disabled) return
  if (isOpen.value) close()
  else open()
}

function close() {
  if (!isOpen.value) return
  isOpen.value = false
  deactivateActionSubmenu(token)
}

function onPopoverState(openState) {
  if (!openState) close()
}

onBeforeUnmount(close)

defineExpose({ open, close, toggle })
</script>

<style scoped>
.ras-root,
.ras-trigger { width: 100%; }

.ras-trigger { display: flex; }
.ras-trigger :deep(.ram-item) { width: 100%; }

.ras-inline {
  --share-popover-origin-x: 0%;
  position: relative;
  margin: 2px 3px 4px 11px;
  padding: 4px 4px 4px 11px;
  border-left: 2px solid var(--accent);
  border-radius: 0 7px 7px 0;
  background: color-mix(in srgb, var(--accent) 6%, transparent);
}

.ras-panel { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.ras-panel--popover { min-width: 100%; }

.ras-label {
  margin: 2px 4px 5px;
  color: var(--text-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>

<style>
.row-action-submenu-popover {
  max-width: min(320px, calc(100vw - 16px));
  max-height: min(420px, calc(100vh - 16px));
  overflow: auto;
}
</style>
