<template>
  <article>
    <h2>ChoiceCard</h2>
    <div class="choice-gallery-options">
      <ChoiceCard v-for="option in options" :key="option" :label="option" description="Exclusive, optional selection" :model-value="chosen === option" @update:model-value="chosen = $event ? option : ''">
        <template #icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 9 5v8l-9 5-9-5V8z" /></svg></template>
      </ChoiceCard>
      <ChoiceCard label="Unavailable" description="Disabled option" disabled />
      <ChoiceCard label="Compact" layout="inline" description="Inline choice" v-model="compact">
        <template #icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></template>
      </ChoiceCard>
      <ChoiceCard v-for="option in iconOptions" :key="option" :label="option" layout="icon" :model-value="iconChoice === option" @update:model-value="iconChoice = option">
        <template #icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="m12 3 9 5v8l-9 5-9-5V8z" /></svg></template>
      </ChoiceCard>
      <ChoiceCard label="Unavailable icon choice" layout="icon" disabled />
      <ChoiceCard label="Compact icon choice" layout="icon" centered v-model="compactIconChoice" style="--choice-card-min-height:72px;--choice-card-padding:6px 8px;--choice-card-gap:4px">
        <template #icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="m12 3 9 5v8l-9 5-9-5V8z" /></svg></template>
      </ChoiceCard>
      <ChoiceCard label="Outlined selection" layout="icon" tinted centered selection-indicator="outline" color="var(--success)" v-model="tintedChoice" style="--choice-card-min-height:88px">
        <template #icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="m12 3 9 5v8l-9 5-9-5V8z" /></svg></template>
      </ChoiceCard>
    </div>
  </article>
</template>
<script setup>
import { ref } from 'vue'
import ChoiceCard from '../components/ChoiceCard.vue'
const chosen = ref('First option')
const compact = ref(true)
const compactIconChoice = ref(true)
const tintedChoice = ref(false)
const iconOptions = ['Centered icon', 'Long caption wraps below the icon']
const iconChoice = ref(iconOptions[0])
const options = ['First option', 'Second option']
</script>
<style scoped>
.choice-gallery-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; padding: 12px; background: var(--surface-raised); border-radius: var(--r-lg); }
</style>
