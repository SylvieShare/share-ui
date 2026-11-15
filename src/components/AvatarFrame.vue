<template>
  <span class="avatar-frame" :style="style" :role="label ? 'img' : undefined" :aria-label="label || undefined" :aria-hidden="!label || undefined">
    <img v-if="src && !failed" :src="src" alt="" draggable="false" @error="failed = true" />
    <span v-else class="avatar-frame-fallback"><slot /></span>
  </span>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
const props = defineProps({
  src: { type: String, default: '' },
  size: { type: [Number, String], default: 48 },
  radius: { type: [Number, String], default: 'var(--r-sm)' },
  fit: { type: String, default: 'cover', validator: value => ['cover', 'contain'].includes(value) },
  position: { type: String, default: 'center' },
  label: { type: String, default: '' },
})
const failed = ref(false)
watch(() => props.src, () => { failed.value = false })
const length = value => typeof value === 'number' ? `${value}px` : value
const style = computed(() => ({ '--avatar-frame-size': length(props.size), '--avatar-frame-radius': length(props.radius), '--avatar-frame-fit': props.fit, '--avatar-frame-position': props.position }))
</script>
<style scoped>
.avatar-frame { display:inline-grid; place-items:center; position:relative; width:var(--avatar-frame-size); height:auto; aspect-ratio:1; flex:0 0 auto; align-self:center; justify-self:start; min-width:0; min-height:0; overflow:hidden; border-radius:var(--avatar-frame-radius); vertical-align:middle; box-sizing:border-box; }
.avatar-frame > img { position:absolute; inset:0; display:block; width:100%; height:100%; min-width:0; min-height:0; object-fit:var(--avatar-frame-fit); object-position:var(--avatar-frame-position); }
.avatar-frame-fallback { position:absolute; inset:0; display:grid; place-items:center; width:100%; height:100%; min-width:0; min-height:0; overflow:hidden; }
</style>
