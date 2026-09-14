<template>
  <Teleport to="body">
    <Transition name="share-tooltip" appear>
      <div :id="id" ref="element" class="share-tooltip" :class="tooltipClass" :style="style" role="tooltip"><slot /></div>
    </Transition>
  </Teleport>
</template>
<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
const props = defineProps({
  anchor: { type: Object, default: null },
  x: { type: Number, default: 0 },
  top: { type: Number, default: null },
  bottom: { type: Number, default: null },
  width: { type: Number, default: null },
  maxWidth: { type: Number, default: 360 },
  minWidth: { type: Number, default: 208 },
  offset: { type: Number, default: 8 },
  zIndex: { type: Number, default: 4000 },
  tooltipClass: { type: [String, Array, Object], default: '' },
})
const id = useId(), element = ref(null), style = ref({ visibility: 'hidden' })
let observer, frame, describedAnchor
function compute() {
  if (!element.value) return
  const viewport = window.visualViewport
  const left = (viewport?.offsetLeft || 0) + 8, top = (viewport?.offsetTop || 0) + 8
  const right = left + (viewport?.width || window.innerWidth) - 16
  const bottom = top + (viewport?.height || window.innerHeight) - 16
  const maxWidth = Math.max(0, Math.min(props.width || props.maxWidth, right - left))
  const rect = props.anchor?.getBoundingClientRect?.()
  const height = Math.min(element.value.offsetHeight, bottom - top)
  const above = rect ? bottom - rect.bottom < height + props.offset && rect.top - top > bottom - rect.bottom : props.bottom != null
  const y = rect ? (above ? rect.top - props.offset - height : rect.bottom + props.offset) : props.bottom != null ? window.innerHeight - props.bottom - height : props.top ?? top
  const actualWidth = Math.min(element.value.offsetWidth || maxWidth, maxWidth)
  style.value = {
    left: `${Math.max(left, Math.min(rect?.left ?? props.x, right - actualWidth))}px`,
    top: `${Math.max(top, Math.min(y, bottom - height))}px`,
    maxWidth: `${maxWidth}px`, minWidth: `${Math.min(props.minWidth, maxWidth)}px`,
    maxHeight: `${bottom - top}px`, width: props.width ? `${maxWidth}px` : undefined,
    zIndex: props.zIndex, '--share-tooltip-enter-y': above ? '4px' : '-4px',
    transformOrigin: above ? 'left bottom' : 'left top',
  }
}
function update() { if (frame == null) frame = requestAnimationFrame(() => { frame = null; compute() }) }
function detachDescription() {
  if (!describedAnchor) return
  const ids = (describedAnchor.getAttribute('aria-describedby') || '').split(/\s+/).filter(value => value && value !== id)
  if (ids.length) describedAnchor.setAttribute('aria-describedby', ids.join(' '))
  else describedAnchor.removeAttribute('aria-describedby')
}
watch(() => props.anchor, anchor => {
  detachDescription()
  describedAnchor = anchor?.setAttribute ? anchor : null
  if (describedAnchor) describedAnchor.setAttribute('aria-describedby', [...new Set([...(describedAnchor.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean), id])].join(' '))
  if (typeof window !== 'undefined') nextTick(update)
}, { immediate: true })
watch(() => [props.x, props.top, props.bottom, props.width], update)
onMounted(() => {
  compute()
  observer = new ResizeObserver(update)
  observer.observe(element.value)
  window.addEventListener('resize', update, { passive: true })
  window.addEventListener('scroll', update, { passive: true, capture: true })
  window.visualViewport?.addEventListener('resize', update)
  window.visualViewport?.addEventListener('scroll', update)
})
onBeforeUnmount(() => {
  detachDescription()
  observer?.disconnect()
  if (frame != null) cancelAnimationFrame(frame)
  window.removeEventListener('resize', update)
  window.removeEventListener('scroll', update, true)
  window.visualViewport?.removeEventListener('resize', update)
  window.visualViewport?.removeEventListener('scroll', update)
})
</script>
<style scoped>
.share-tooltip { position: fixed; box-sizing: border-box; overflow: hidden; background: var(--popover-bg); border: 1px solid var(--border-strong); border-radius: 12px; padding: 12px 14px 13px; box-shadow: var(--shadow-lg); pointer-events: none; }
.share-tooltip-enter-active { transition: opacity 160ms ease-out, transform 160ms cubic-bezier(.2, .8, .2, 1); }
.share-tooltip-enter-from { opacity: 0; transform: translateY(var(--share-tooltip-enter-y)) scale(.985); }
@media (prefers-reduced-motion: reduce) { .share-tooltip-enter-active { transition: none; } }
</style>
