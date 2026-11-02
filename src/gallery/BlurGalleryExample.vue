<template>
  <article>
    <h2>BlurBackdrop</h2>
    <FormField label="Blur radius" vertical><FormNumberInput v-model="radius" :min="0" :max="32" /></FormField>
    <div class="blur-gallery-scene">
      <p>Content behind the surface · 0123456789 · content behind the surface</p>
      <BlurBackdrop :radius="Number(radius)" />
      <strong class="blur-gallery-label">Sharp foreground · {{ radius }}px</strong>
    </div>
  </article>
</template>
<script setup>
import { ref } from 'vue'
import BlurBackdrop from '../components/BlurBackdrop.vue'
import FormField from '../components/form/FormField.vue'
import FormNumberInput from '../components/form/FormNumberInput.vue'
const radius = ref(8)
</script>
<style scoped>
.blur-gallery-scene { position: relative; isolation: isolate; min-height: 150px; padding: 20px; overflow: hidden; border-radius: 12px; background: linear-gradient(120deg, var(--surface), var(--accent)); }
.blur-gallery-scene p { font-size: 24px; color: var(--text-1); }
.blur-gallery-scene .blur-backdrop { z-index: 1; --blur-backdrop-background: color-mix(in srgb, var(--bg) 25%, transparent); }
.blur-gallery-label { position: absolute; z-index: 2; top: 50%; left: 20px; right: 20px; text-align: center; color: var(--text-1); }
</style>
