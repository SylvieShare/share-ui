<template>
  <Teleport to="body">
    <Transition
      name="share-drawer"
      appear
      :duration="reducedMotion ? 0 : 220"
      @before-leave="makeInert"
      @after-enter="onOpened"
      @after-leave="finishClose"
    >
      <div v-if="visible" class="share-drawer" :style="{ zIndex }">
        <div class="share-drawer__scrim" aria-hidden="true" @click="requestClose" />
        <section
          v-bind="$attrs"
          ref="panel"
          class="share-drawer__panel"
          :style="{ width: typeof width === 'number' ? `${width}px` : width }"
          role="dialog"
          aria-modal="true"
          :aria-label="ariaLabel"
          tabindex="-1"
          @touchstart="swipe.start"
          @touchmove="swipe.move"
          @touchend="swipe.end"
          @touchcancel="swipe.cancel"
        >
          <header v-if="$slots.header || $slots.title" class="share-drawer__header">
            <slot name="header" :close="requestClose">
              <slot name="title" :close="requestClose" />
            </slot>
          </header>
          <button
            v-if="showClose"
            class="share-drawer__close"
            type="button"
            :aria-label="closeLabel"
            @click="requestClose"
          >
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            </svg>
          </button>
          <div class="share-drawer__body"><slot :close="requestClose" /></div>
          <footer v-if="$slots.footer" class="share-drawer__footer"><slot name="footer" :close="requestClose" /></footer>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useMediaQuery } from '../../composables/useMediaQuery.js'
import { createDrawerSwipe } from '../../internal/drawerSwipe.js'
import {
  acquirePageScrollLock, focusFirst, isTopOverlay, registerOverlay,
  restoreFocus, trapTabKey, unregisterOverlay,
} from '../../internal/overlayStack.js'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  ariaLabel: { type: String, default: 'Drawer' },
  width: { type: [Number, String], default: 288 },
  zIndex: { type: Number, default: 3000 },
  showClose: { type: Boolean, default: true },
  closeLabel: { type: String, default: 'Close' },
  swipeToClose: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue', 'opened', 'closed'])
const panel = ref(null)
const closing = ref(false)
const visible = computed(() => props.modelValue && !closing.value)
const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
const token = Symbol('app-drawer')
let releaseScroll = null
let previousFocus = null
let disposed = false

function isActive() { return visible.value && isTopOverlay(token) }

function makeInert(element = panel.value?.parentElement) {
  if (!element) return
  element.inert = true
  element.setAttribute('inert', '')
  element.setAttribute('aria-hidden', 'true')
  element.style.pointerEvents = 'none'
}

function requestClose() {
  if (!isActive()) return
  makeInert()
  closing.value = true
  emit('update:modelValue', false)
}

function onKeydown(event) {
  if (!isActive() || event.defaultPrevented) return
  if (event.key === 'Escape') {
    event.preventDefault()
    requestClose()
  } else trapTabKey(event, panel.value)
}

function onFocusin(event) {
  if (isActive() && !panel.value?.contains(event.target)) focusFirst(panel.value)
}

function release() {
  if (!releaseScroll) return
  const shouldRestore = isTopOverlay(token)
  unregisterOverlay(token)
  releaseScroll()
  releaseScroll = null
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('focusin', onFocusin)
  if (shouldRestore && !previousFocus?.closest?.('[inert]')) restoreFocus(previousFocus)
  previousFocus = null
}

function finishClose() {
  if (visible.value) return
  release()
  emit('closed')
}

function onOpened() {
  if (visible.value) emit('opened')
}

const swipe = createDrawerSwipe({
  enabled: () => props.swipeToClose && isActive(),
  width: () => panel.value?.getBoundingClientRect().width || 288,
  close: requestClose,
})

watch(() => props.modelValue, value => { if (value) closing.value = false }, { flush: 'sync' })
watch(visible, async value => {
  swipe.cancel()
  if (!value) {
    makeInert()
    return
  }
  if (!releaseScroll && typeof document !== 'undefined') {
    previousFocus = document.activeElement
    registerOverlay(token)
    releaseScroll = acquirePageScrollLock()
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('focusin', onFocusin)
  }
  await nextTick()
  if (disposed || !visible.value) return
  const layer = panel.value?.parentElement
  if (layer) {
    layer.inert = false
    layer.removeAttribute('inert')
    layer.removeAttribute('aria-hidden')
    layer.style.pointerEvents = ''
  }
  if (!disposed && isActive() && !panel.value?.contains(document.activeElement)) focusFirst(panel.value)
}, { immediate: true, flush: 'post' })

onBeforeUnmount(() => { disposed = true; swipe.cancel(); release() })
defineExpose({ requestClose })
</script>

<style scoped>
.share-drawer { position: fixed; inset: 0; }
.share-drawer__scrim { position: absolute; inset: 0; background: var(--scrim); }
.share-drawer__panel {
  position: absolute;
  inset: 0 auto 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  color: var(--text-1);
  box-shadow: var(--shadow-lg);
}
.share-drawer__header, .share-drawer__footer { flex: none; }
.share-drawer__header { padding: 16px 56px 16px 16px; }
.share-drawer__footer { padding: 16px; }
.share-drawer__body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
}
.share-drawer__close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: var(--r-sm);
  background: var(--surface);
  color: var(--text-muted);
  cursor: pointer;
  touch-action: manipulation;
}
.share-drawer__close:hover { background: var(--surface-raised); color: var(--text-1); }
.share-drawer-enter-active .share-drawer__panel,
.share-drawer-leave-active .share-drawer__panel { transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1); }
.share-drawer-enter-active .share-drawer__scrim,
.share-drawer-leave-active .share-drawer__scrim { transition: opacity 220ms ease; }
.share-drawer-enter-from .share-drawer__panel,
.share-drawer-leave-to .share-drawer__panel { transform: translateX(-100%); }
.share-drawer-enter-from .share-drawer__scrim,
.share-drawer-leave-to .share-drawer__scrim { opacity: 0; }
.share-drawer-leave-active { pointer-events: none; }
@media (prefers-reduced-motion: reduce) {
  .share-drawer-enter-active .share-drawer__panel,
  .share-drawer-leave-active .share-drawer__panel,
  .share-drawer-enter-active .share-drawer__scrim,
  .share-drawer-leave-active .share-drawer__scrim { transition: none; }
}
</style>
