<template>
  <div class="share-star-rating" :class="{'share-star-rating--readonly':readonly}" :role="readonly ? 'img' : 'radiogroup'" :aria-label="readonly ? valueLabel || label : label" :aria-disabled="!readonly && disabled || undefined" @mouseleave="preview=0">
    <template v-for="star in max" :key="star">
      <component :is="readonly ? 'span' : 'button'" :ref="el=>buttons[star-1]=el" class="share-star-rating__item" :type="readonly ? undefined : 'button'" :role="readonly ? undefined : 'radio'" :aria-label="readonly ? undefined : optionLabels[star-1] || String(star)" :aria-checked="readonly ? undefined : modelValue===star" :disabled="!readonly && disabled || undefined" :tabindex="readonly ? undefined : active===star ? 0 : -1" @mouseenter="!readonly && (preview=star)" @focus="!readonly && (preview=star)" @blur="preview=0" @click="pick(star)" @keydown="navigate($event,star)">
        <span class="share-star-rating__star" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path :d="path" /></svg><span class="share-star-rating__fill" :style="{width:`${fill(star)}%`}"><svg viewBox="0 0 24 24"><path :d="path" /></svg></span></span>
      </component>
    </template>
  </div>
</template>
<script setup>
import { computed,ref } from 'vue'
const props=defineProps({modelValue:{type:Number,default:0},max:{type:Number,default:5,validator:v=>Number.isInteger(v)&&v>=1&&v<=10},label:{type:String,required:true},valueLabel:String,optionLabels:{type:Array,default:()=>[]},readonly:Boolean,disabled:Boolean})
const emit=defineEmits(['update:modelValue']),preview=ref(0),buttons=[]
const path='m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1Z'
const active=computed(()=>Math.max(1,Math.min(props.max,Math.round(props.modelValue))))
const fill=star=>Math.max(0,Math.min(1,(props.readonly ? props.modelValue : preview.value || props.modelValue)-star+1))*100
function pick(value){if(!props.readonly&&!props.disabled)emit('update:modelValue',value)}
function navigate(event,star){
  if(props.readonly||props.disabled)return
  const target={ArrowRight:Math.min(props.max,star+1),ArrowLeft:Math.max(1,star-1),Home:1,End:props.max}[event.key]
  if(target===undefined)return
  event.preventDefault();pick(target);buttons[target-1]?.focus()
}
</script>
<style scoped>
.share-star-rating { display:inline-flex;align-items:center;gap:2px;color:var(--warning); }
.share-star-rating__item { appearance:none;display:grid;place-items:center;width:28px;height:32px;padding:0;border:0;border-radius:5px;background:transparent;color:inherit;cursor:pointer;transition:background .16s ease; }
.share-star-rating__item:not(:disabled):hover { background:var(--surface-raised); }
.share-star-rating__item:disabled { opacity:.5;cursor:default; }
.share-star-rating__item:focus-visible { outline:2px solid var(--accent);outline-offset:2px; }
.share-star-rating__star { position:relative;width:19px;height:19px;display:block;transition:transform .16s ease; }
.share-star-rating__star > svg { stroke:var(--text-muted);stroke-width:1.4; }
.share-star-rating__star svg { width:19px;height:19px;display:block; }
.share-star-rating__fill { position:absolute;inset:0 auto 0 0;overflow:hidden;transition:width .16s ease; }
.share-star-rating__fill svg { fill:currentColor; }
.share-star-rating--readonly .share-star-rating__item { width:20px;height:24px;cursor:default; }
.share-star-rating--readonly .share-star-rating__item:hover { background:transparent; }
@media(pointer:coarse) { .share-star-rating:not(.share-star-rating--readonly) .share-star-rating__item { width:40px;height:40px; } }
@media(prefers-reduced-motion:reduce) { .share-star-rating__item,.share-star-rating__star,.share-star-rating__fill {transition:none;} }
</style>
