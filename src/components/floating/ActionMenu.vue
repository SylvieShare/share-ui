<template>
  <div
    v-if="$slots.trigger"
    ref="triggerEl"
    class="ram-custom-trigger"
    :class="{ 'ram-custom-trigger--block': block }"
    @click.stop="toggle"
  >
    <slot name="trigger" :open="isOpen" />
  </div>
  <button
    v-else
    ref="triggerEl"
    type="button"
    class="ram-trigger"
    :title="title"
    :aria-label="title"
    :aria-expanded="isOpen"
    aria-haspopup="menu"
    :disabled="disabled"
    @click.stop="toggle"
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="3" cy="7" r="1.2" fill="currentColor" />
      <circle cx="7" cy="7" r="1.2" fill="currentColor" />
      <circle cx="11" cy="7" r="1.2" fill="currentColor" />
    </svg>
  </button>

  <Teleport to="body">
    <Transition name="ram-popover">
      <div
        v-if="isOpen"
        ref="popoverEl"
        class="ram-popover"
        :style="popoverStyle"
        role="menu"
        :aria-label="title"
        @click.stop
        @pointerdown.stop
      >
        <slot :close="close" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'
import {
  activateActionMenu,
  closeActiveActionSubmenu,
  deactivateActionMenu,
  isTopFloating,
} from '../../internal/floatingState.js'
import { ACTION_MENU_MARGIN, computeActionMenuPlacement } from '../../lib/actionMenuPlacement.js'

const props = defineProps({
  title: { type: String, default: 'Actions' },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
})

const token = Symbol('action-menu')
const triggerEl = ref(null)
const popoverEl = ref(null)
const popoverStyle = ref(null)
const isOpen = ref(false)
let openOrigin = null
let placementFrame = null

function initialStyle(event) {
  const trigger = triggerEl.value
  if (!trigger) return null
  const rect = trigger.getBoundingClientRect()
  const hasPointerOrigin = event?.detail > 0
  openOrigin = {
    x: hasPointerOrigin ? event.clientX : rect.left + rect.width / 2,
    y: hasPointerOrigin ? event.clientY : rect.bottom,
  }
  return {
    position: 'fixed',
    top: `${ACTION_MENU_MARGIN}px`,
    left: `${ACTION_MENU_MARGIN}px`,
    visibility: 'hidden',
  }
}

function viewportRect() {
  const viewport = window.visualViewport
  return {
    viewportWidth: viewport?.width || window.innerWidth,
    viewportHeight: viewport?.height || window.innerHeight,
    viewportLeft: viewport?.offsetLeft || 0,
    viewportTop: viewport?.offsetTop || 0,
  }
}

function placePopover() {
  placementFrame = null
  const trigger = triggerEl.value
  const popover = popoverEl.value
  if (!isOpen.value || !trigger || !popover) return

  const viewport = viewportRect()
  const availableWidth = Math.max(0, viewport.viewportWidth - ACTION_MENU_MARGIN * 2)
  popover.style.minWidth = `${Math.min(200, availableWidth)}px`
  popover.style.maxWidth = `${Math.min(280, availableWidth)}px`

  const rect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const placement = computeActionMenuPlacement({
    triggerRect: rect,
    popoverWidth: popoverRect.width,
    popoverHeight: popover.scrollHeight,
    originX: openOrigin?.x ?? rect.left + rect.width / 2,
    originY: openOrigin?.y ?? rect.bottom,
    ...viewport,
  })

  popoverStyle.value = {
    position: 'fixed',
    top: `${placement.top}px`,
    left: `${placement.left}px`,
    minWidth: `${Math.min(200, availableWidth)}px`,
    maxWidth: `${Math.min(280, availableWidth)}px`,
    maxHeight: `${placement.maxHeight}px`,
    visibility: 'visible',
    '--ram-origin-x': `${placement.originX}px`,
    '--ram-origin-y': `${placement.originY}px`,
    '--ram-enter-y': placement.opensAbove ? '5px' : '-5px',
  }
}

function schedulePlacement() {
  if (placementFrame != null) cancelAnimationFrame(placementFrame)
  placementFrame = requestAnimationFrame(placePopover)
}

function bind() {
  document.addEventListener('pointerdown', onDocumentPointerDown, true)
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', schedulePlacement)
  window.addEventListener('scroll', onWindowScroll, true)
  window.visualViewport?.addEventListener('resize', schedulePlacement)
  window.visualViewport?.addEventListener('scroll', schedulePlacement)
}

function unbind() {
  document.removeEventListener('pointerdown', onDocumentPointerDown, true)
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', schedulePlacement)
  window.removeEventListener('scroll', onWindowScroll, true)
  window.visualViewport?.removeEventListener('resize', schedulePlacement)
  window.visualViewport?.removeEventListener('scroll', schedulePlacement)
}

function open(event) {
  if (props.disabled || isOpen.value) return
  popoverStyle.value = initialStyle(event)
  activateActionMenu(token, close)
  isOpen.value = true
  bind()
  nextTick(schedulePlacement)
}

function close() {
  if (!isOpen.value) return
  closeActiveActionSubmenu()
  isOpen.value = false
  deactivateActionMenu(token)
  if (placementFrame != null) cancelAnimationFrame(placementFrame)
  placementFrame = null
  unbind()
}

function toggle(event) {
  if (props.disabled) return
  if (isOpen.value) close()
  else open(event)
}

function onDocumentPointerDown(event) {
  if (event.target?.closest?.('.ram-popover, [data-share-popover-related]')) return
  if (triggerEl.value?.contains?.(event.target)) return
  close()
}

function onWindowScroll(event) {
  if (popoverEl.value?.contains?.(event.target)) return
  if (event.target?.closest?.('[data-share-popover-related]')) return
  close()
}

function onKeydown(event) {
  if (event.key !== 'Escape') return
  if (closeActiveActionSubmenu()) return
  if (!isTopFloating(token)) return
  close()
}

onBeforeUnmount(close)

defineExpose({ open, close, toggle })
</script>

<style scoped>
.ram-custom-trigger {
  display: inline-flex;
  transform-origin: center;
  transition: transform 90ms cubic-bezier(0.2, 0.8, 0.3, 1);
}

.ram-custom-trigger--block {
  display: block;
  width: 100%;
}

.ram-custom-trigger:active { transform: scale(0.97); }

.ram-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  background: none;
  border: none;
  border-radius: var(--r-sm);
  color: var(--text-muted);
  cursor: pointer;
  transform-origin: center;
  transition: color 100ms ease, background-color 100ms ease, transform 90ms cubic-bezier(0.2, 0.8, 0.3, 1);
}

.ram-trigger:hover { color: var(--text-1); background: color-mix(in srgb, var(--text-on-accent) 6%, transparent); }
.ram-trigger:active { transform: scale(0.88); }
.ram-trigger:disabled { cursor: default; opacity: 0.5; }

@media (prefers-reduced-motion: reduce) {
  .ram-custom-trigger, .ram-trigger { transition: none; }
  .ram-custom-trigger:active, .ram-trigger:active { transform: none; }
}
</style>

<style>
.ram-popover {
  z-index: 9300;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: min(200px, calc(100vw - 16px));
  max-width: min(280px, calc(100vw - 16px));
  padding: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: var(--popover-bg);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-lg);
  color: var(--text-1);
  font-family: var(--font-ui);
  transform-origin: var(--ram-origin-x, 100%) var(--ram-origin-y, 0);
  will-change: opacity, transform;
}

.ram-popover-enter-active {
  transition: opacity 135ms ease-out, transform 165ms cubic-bezier(0.16, 1, 0.3, 1);
}

.ram-popover-leave-active {
  pointer-events: none;
  transition: opacity 90ms ease-in, transform 110ms cubic-bezier(0.4, 0, 1, 1);
}

.ram-popover-enter-from,
.ram-popover-leave-to {
  opacity: 0;
  transform: translateY(var(--ram-enter-y, -5px)) scale(0.96);
}

.ram-popover-enter-to,
.ram-popover-leave-from { opacity: 1; transform: none; }

.ram-label {
  margin: 5px 5px 3px;
  color: var(--text-muted);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (prefers-reduced-motion: reduce) {
  .ram-popover-enter-active, .ram-popover-leave-active { transition: none; }
}
</style>
