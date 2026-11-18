<template>
  <div class="fit-example">
    <label>Available width <input v-model.number="width" type="range" min="70" max="360" /></label>
    <div :style="{ width: `${width}px` }" class="fit-example__frame">
      <FitContent><div class="fit-example__row"><strong v-for="n in 6" :key="n">{{ n }}</strong></div></FitContent>
    </div>
    <small>Scales to 50%, then wraps. Nested content shares the outer scale.</small>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FitContent from '../components/FitContent.vue'
const width = ref(210)
</script>
<style scoped>
.fit-example {display:grid;gap:12px;color:var(--text-1)}
.fit-example__frame {max-width:100%;padding:8px;background:var(--surface-raised)}
.fit-example__row {display:flex;flex-wrap:var(--fit-content-wrap,wrap);gap:8px}
.fit-example__row strong {display:grid;place-items:center;width:42px;height:42px;border-radius:6px;background:var(--accent);color:var(--text-on-accent)}
</style>
