<template>
  <h2>AvatarFrame</h2>
  <div class="avatar-examples">
    <AvatarFrame :src="portrait" :size="64" label="Cropped portrait" position="center top" />
    <AvatarFrame :src="portrait" :size="48" fit="contain" label="Contained artwork" />
    <AvatarFrame :size="40" label="Initial">A</AvatarFrame>
    <AvatarFrame src="/unavailable-avatar.png" :size="32" label="Unavailable image">?</AvatarFrame>
  </div>
</template>
<script setup>
import AvatarFrame from '../components/AvatarFrame.vue'
const portrait = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="160"><rect width="80" height="160" fill="slateblue"/><circle cx="40" cy="35" r="24" fill="lavender"/></svg>')}`
</script>
<style scoped>
.avatar-examples { display:flex; align-items:center; gap:16px; color:var(--text-1); }
</style>
