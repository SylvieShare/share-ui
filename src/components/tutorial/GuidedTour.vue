<template>
  <Teleport to="body">
    <div v-if="tour.active" class="guided-tour" :style="{ zIndex }" @mousedown.stop @touchstart.stop>
      <div v-for="(mask, i) in masks" :key="i" class="guided-tour__mask" :style="mask" />
      <div v-if="rect" class="guided-tour__spotlight" :style="spotlight" />
      <div class="guided-tour__shield" />
      <section ref="card" class="guided-tour__card" :style="cardStyle" role="dialog" aria-modal="true"
        :aria-label="tour.step?.title" tabindex="-1">
        <div aria-live="polite" aria-atomic="true">
          <small>{{ labels.progress(tour.index + 1, tour.steps.length) }}</small>
          <h2>{{ tour.step?.title }}</h2>
          <p>{{ tour.step?.body }}</p>
        </div>
        <p v-if="tour.error" role="alert">{{ labels.error }}</p>
        <footer>
          <ActionButton variant="quiet" @click="tour.error ? tour.stop() : tour.dismiss()">{{ tour.error ? labels.close : labels.dismiss }}</ActionButton>
          <ActionButton v-if="tour.index > 0" variant="secondary" :disabled="tour.busy" @click="tour.previous">{{ labels.previous }}</ActionButton>
          <ActionButton v-if="tour.error" :disabled="tour.busy" @click="tour.retry">{{ labels.retry }}</ActionButton>
          <ActionButton v-else :loading="tour.busy" :loading-label="labels.loading" @click="tour.next">
            {{ tour.index === tour.steps.length - 1 ? labels.finish : labels.next }}
          </ActionButton>
        </footer>
      </section>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import ActionButton from '../ActionButton.vue'
import { registerOverlay, unregisterOverlay, focusFirst, trapTabKey, restoreFocus } from '../../internal/overlayStack.js'
import { tourGeometry } from '../../lib/tourGeometry.js'

const props = defineProps({
  tour: { type: Object, required: true },
  mobile: Boolean,
  zIndex: { type: Number, default: 12000 },
  labels: { type: Object, default: () => ({
    progress: (current, total) => `${current} / ${total}`, next: 'Next', previous: 'Back',
    finish: 'Done', dismiss: 'Skip', close: 'Close', retry: 'Retry', loading: 'Loading…',
    error: 'This step could not be shown or saved. Retry or close the tour.',
  }) },
})
const card = ref(null)
const geometry = ref(tourGeometry(null, { width: 1, height: 1 }, { width: 1, height: 1 }))
const rect = computed(() => geometry.value.rect)
const spotlight = computed(() => geometry.value.spotlight)
const masks = computed(() => geometry.value.masks)
const cardStyle = computed(() => geometry.value.card)
const token = Symbol('guided-tour')
let frame = null
let previousFocus = null
let listening = false

function measure() {
  if (!props.tour.active) return
  const viewport = window.visualViewport
  geometry.value = tourGeometry(props.tour.target?.getBoundingClientRect(), {
    width: viewport?.width || window.innerWidth, height: viewport?.height || window.innerHeight,
    left: viewport?.offsetLeft || 0, top: viewport?.offsetTop || 0,
  }, { width: card.value?.offsetWidth || 360, height: card.value?.offsetHeight || 220 }, props.mobile)
  frame = requestAnimationFrame(measure)
}

function onKey(event) {
  // Capture before application hotkeys and any modal opened by a step.
  event.stopImmediatePropagation()
  if (event.key === 'Escape') { event.preventDefault(); props.tour.error ? props.tour.stop() : props.tour.dismiss() }
  else trapTabKey(event, card.value)
}
function onFocus(event) {
  if (!card.value?.contains(event.target)) focusFirst(card.value)
}
function teardown() {
  cancelAnimationFrame(frame)
  unregisterOverlay(token)
  if (!listening) return
  listening = false
  window.removeEventListener('keydown', onKey, true)
  document.removeEventListener('focusin', onFocus, true)
  restoreFocus(previousFocus)
}
watch(() => props.tour.active, async active => {
  if (!active) { teardown(); return }
  previousFocus = document.activeElement
  listening = true
  registerOverlay(token)
  window.addEventListener('keydown', onKey, true)
  document.addEventListener('focusin', onFocus, true)
  await nextTick()
  if (!props.tour.active) return
  focusFirst(card.value)
  measure()
}, { immediate: true })
watch(() => props.tour.index, async () => {
  await nextTick()
  if (props.tour.active) focusFirst(card.value)
})
onBeforeUnmount(teardown)
</script>

<style scoped>
.guided-tour { position: fixed; inset: 0; isolation: isolate; }
.guided-tour__mask { position: fixed; background: var(--scrim); pointer-events: none; }
.guided-tour__shield { position: absolute; inset: 0; touch-action: none; }
.guided-tour__spotlight { position: fixed; border: 2px solid var(--accent); border-radius: var(--r-md); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 25%, transparent); pointer-events: none; }
.guided-tour__card { position: fixed; box-sizing: border-box; width: 360px; max-width: calc(100vw - 24px); padding: 20px; border: 1px solid var(--border-strong); border-radius: var(--r-lg); background: var(--surface); color: var(--text-1); box-shadow: var(--shadow-lg); overflow: auto; overscroll-behavior: contain; }
.guided-tour__card small { color: var(--text-muted); }
.guided-tour__card h2 { margin: 8px 0; font-size: 19px; line-height: 1.3; }
.guided-tour__card p { margin: 8px 0 18px; color: var(--text-2); line-height: 1.5; font-size: 14px; }
.guided-tour__card footer { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
.guided-tour__card footer > :first-child { margin-right: auto; }
</style>
