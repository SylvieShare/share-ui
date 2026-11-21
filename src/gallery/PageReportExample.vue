<template>
  <ActionButton @click="start">Report an issue</ActionButton>
  <p>Choose this paragraph to see the report form.</p>
  <PageReport :options="options" />
</template>

<script setup>
import PageReport from '../components/feedback/PageReport.vue'
import ActionButton from '../components/ActionButton.vue'

const requestEvent = 'gallery:page-report'
const options = {
  requestEvent,
  globalShortcuts: false,
  viewportPlatform: width => width < 640 ? 'mobile' : 'desktop',
  async renderCanvas(element, { width, height, backgroundColor }) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    context.fillStyle = backgroundColor
    context.fillRect(0, 0, width, height)
    return canvas
  },
  async submit() {},
}
function start() { window.dispatchEvent(new Event(requestEvent)) }
</script>
