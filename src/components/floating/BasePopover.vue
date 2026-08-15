<template>
  <Teleport to="body">
    <Transition :name="resolvedTransition">
      <div
        v-if="open"
        :id="id || undefined"
        ref="popoverEl"
        :class="['share-popover', 'base-popover', popoverClass]"
        :style="positionStyle"
        :role="role || undefined"
        :aria-label="ariaLabel || undefined"
        :data-share-popover-related="related ? '' : undefined"
        @click.stop
        @pointerdown.stop
      >
        <slot :close="close" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import {
  closeActiveActionSubmenu,
  isTopFloating,
  registerFloating,
  unregisterFloating,
} from '../../internal/floatingState.js'

const props = defineProps({
  open: { type: Boolean, default: false },
  anchor: { type: [Object, null], default: null },
  placement: {
    type: String,
    default: 'bottom-start',
    validator: value => ['bottom-start', 'bottom-end', 'right-start'].includes(value),
  },
  offset: { type: Number, default: 6 },
  minWidth: { type: [Number, String], default: 160 },
  zIndex: { type: Number, default: 200 },
  transition: { type: String, default: '' },
  transitionPreset: {
    type: String,
    default: 'none',
    validator: value => ['none', 'action-menu'].includes(value),
  },
  popoverClass: { type: [String, Array, Object], default: '' },
  closeOnScroll: { type: Boolean, default: true },
  closeOnResize: { type: Boolean, default: true },
  role: { type: String, default: '' },
  ariaLabel: { type: String, default: '' },
  id: { type: String, default: '' },
  related: { type: Boolean, default: false },
})
const emit = defineEmits(['update:open'])

const resolvedTransition = computed(() => {
  if (props.transition) return props.transition
  return props.transitionPreset === 'action-menu' ? 'share-popover-action' : ''
})

const token = Symbol('base-popover')
const popoverEl = ref(null)
const positionStyle = ref(null)

function resolveAnchor() {
  const anchor = props.anchor
  if (!anchor) return null
  if (typeof anchor.getBoundingClientRect === 'function') return anchor
  return anchor.value ?? anchor
}

function cssLength(value) {
  return typeof value === 'number' ? `${value}px` : value
}

function viewportRect() {
  const viewport = window.visualViewport
  return {
    left: viewport?.offsetLeft || 0,
    top: viewport?.offsetTop || 0,
    width: viewport?.width || window.innerWidth,
    height: viewport?.height || window.innerHeight,
  }
}

function compute() {
  const anchor = resolveAnchor()
  if (!anchor) return

  const rect = anchor.getBoundingClientRect()
  const viewport = viewportRect()
  const minWidth = typeof props.minWidth === 'number' ? props.minWidth : 0
  const width = Math.max(minWidth, popoverEl.value?.offsetWidth || 0)
  const height = popoverEl.value?.offsetHeight || 0
  const minLeft = viewport.left + 8
  const maxRight = viewport.left + viewport.width - 8
  const minTop = viewport.top + 8
  const maxBottom = viewport.top + viewport.height - 8
  const style = {
    position: 'fixed',
    minWidth: cssLength(props.minWidth),
    zIndex: props.zIndex,
  }

  if (props.placement === 'right-start') {
    const rightLeft = rect.right + props.offset
    const leftLeft = rect.left - props.offset - width
    const resolvedLeft = rightLeft + width <= maxRight
      ? rightLeft
      : leftLeft >= minLeft
        ? leftLeft
        : Math.max(minLeft, Math.min(rightLeft, maxRight - width))
    style.left = `${resolvedLeft}px`
    style.top = `${Math.max(minTop, Math.min(rect.top, maxBottom - height))}px`
  } else {
    const desiredLeft = props.placement === 'bottom-end' ? rect.right - width : rect.left
    const belowTop = rect.bottom + props.offset
    const aboveTop = rect.top - props.offset - height
    const top = belowTop + height > maxBottom && aboveTop >= minTop ? aboveTop : belowTop
    style.left = `${Math.max(minLeft, Math.min(desiredLeft, maxRight - width))}px`
    style.top = `${Math.max(minTop, Math.min(top, maxBottom - height))}px`
  }

  positionStyle.value = style
}

function close() {
  emit('update:open', false)
}

function isInsideRelatedPopover(target) {
  return Boolean(target?.closest?.('[data-share-popover-related]'))
}

function onDocumentPointerDown(event) {
  if (popoverEl.value?.contains(event.target)) return
  if (isInsideRelatedPopover(event.target)) return
  if (resolveAnchor()?.contains?.(event.target)) return
  close()
}

function onScroll(event) {
  if (!props.closeOnScroll) {
    compute()
    return
  }
  if (popoverEl.value?.contains(event.target)) return
  if (isInsideRelatedPopover(event.target)) return
  close()
}

function onResize() {
  if (props.closeOnResize) close()
  else compute()
}

function onKeydown(event) {
  if (event.key !== 'Escape') return
  if (closeActiveActionSubmenu()) return
  if (!isTopFloating(token)) return
  close()
}

function bind() {
  registerFloating(token)
  document.addEventListener('pointerdown', onDocumentPointerDown, true)
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll, true)
  window.visualViewport?.addEventListener('resize', onResize)
  window.visualViewport?.addEventListener('scroll', compute)
}

function unbind() {
  unregisterFloating(token)
  document.removeEventListener('pointerdown', onDocumentPointerDown, true)
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScroll, true)
  window.visualViewport?.removeEventListener('resize', onResize)
  window.visualViewport?.removeEventListener('scroll', compute)
}

watch(() => props.open, async (isOpen) => {
  unbind()
  if (!isOpen) return
  compute()
  await nextTick()
  if (!props.open) return
  compute()
  bind()
}, { immediate: true })

watch(
  () => [props.anchor, props.placement, props.offset, props.minWidth],
  () => { if (props.open) nextTick(compute) },
)

onBeforeUnmount(unbind)
</script>

<style scoped>
.share-popover {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  background: var(--popover-bg);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-lg);
  color: var(--text-1);
  font-family: var(--font-ui);
}
</style>

<style>
.share-popover-action-enter-active {
  transform-origin: var(--share-popover-origin-x, 50%) var(--share-popover-origin-y, 0);
  transition: opacity 135ms ease-out, transform 165ms cubic-bezier(0.16, 1, 0.3, 1);
}

.share-popover-action-leave-active {
  pointer-events: none;
  transform-origin: var(--share-popover-origin-x, 50%) var(--share-popover-origin-y, 0);
  transition: opacity 90ms ease-in, transform 110ms cubic-bezier(0.4, 0, 1, 1);
}

.share-popover-action-enter-from,
.share-popover-action-leave-to {
  opacity: 0;
  transform: translateY(var(--share-popover-enter-y, -5px)) scale(0.96);
}

.share-popover-action-enter-to,
.share-popover-action-leave-from { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .share-popover-action-enter-active,
  .share-popover-action-leave-active { transition: none; }
}
</style>
