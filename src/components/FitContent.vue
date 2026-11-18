<template>
  <component :is="tag" ref="root" class="share-fit-content"
    :class="{ 'share-fit-content--inline': inline, 'share-fit-content--inherited': inherited }"
    :data-fit-owner="inherited ? undefined : ''">
    <slot v-if="inherited" :scale="scale" :wrapping="wrapping" />
    <span v-else ref="content" class="share-fit-content__content"><slot :scale="scale" :wrapping="wrapping" /></span>
  </component>
</template>
<script setup>
import { inject, provide, ref } from 'vue'
import { contentFitContext } from '../lib/contentFit.js'
import { useContentFit } from '../composables/useContentFit.js'
const props = defineProps({ tag: { type: String, default: 'span' }, inline: Boolean, minScale: { type: Number, default: .5 } })
const root = ref(null), content = ref(null)
const ancestor = inject(contentFitContext, null)
const inherited = !!ancestor
const fit = ancestor || useContentFit(root, content, () => props.minScale)
provide(contentFitContext, fit)
const { scale, wrapping, refresh } = fit
defineExpose({ scale, wrapping, refresh })
</script>
<style scoped>
.share-fit-content {display:block;position:relative;min-width:0;max-width:100%;width:100%;overflow:hidden;vertical-align:top}
.share-fit-content--inline {display:inline-block;width:var(--fit-content-natural-width,max-content)}
.share-fit-content__content {display:flow-root;width:max-content;max-width:none;transform-origin:top left;white-space:nowrap}
.share-fit-content[data-fit-ready]>.share-fit-content__content {position:absolute;top:0;left:0}
.share-fit-content--inherited {display:contents}
</style>
