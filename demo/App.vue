<template>
  <main class="share-app-canvas demo-canvas">
    <ComponentGallery />
  </main>
</template>

<script setup>
import { ComponentGallery } from '../src/gallery.js'
</script>

<style>
html, body, #app { min-height: 100%; }
body { margin: 0; }
.demo-canvas { min-height: 100vh; min-height: 100dvh; }
</style>
