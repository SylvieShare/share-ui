<template>
  <nav ref="element" class="share-icon-navigation"
    :class="[`share-icon-navigation--${orientation}`, `share-icon-navigation--${layout}`, { 'share-icon-navigation--instant': !animate || !ready, 'share-icon-navigation--pill': pill }]"
    :style="{ '--icon-navigation-size': `${size}px`, '--icon-navigation-height': `${height ?? size}px`, '--icon-navigation-icon-size': `${iconSize}px`, '--icon-navigation-label-size': typeof labelSize === 'number' ? `${labelSize}px` : labelSize || undefined, '--icon-navigation-radius': typeof radius === 'number' ? `${radius}px` : radius || undefined }" :aria-label="label">
    <span class="share-icon-navigation__indicator" :style="indicatorStyle" aria-hidden="true" />
    <template v-for="(item, index) in items" :key="item.key">
      <span v-if="item.divider" class="share-icon-navigation__divider" role="separator"
        :aria-orientation="orientation === 'vertical' ? 'horizontal' : 'vertical'" :aria-label="item.dividerLabel" />
      <button :ref="node => setButton(item.key, node)" v-bind="item.attrs" type="button"
        class="share-icon-navigation__item" :style="itemStyle(index)" :class="{ 'share-icon-navigation__item--selected': active && modelValue === item.key, 'share-icon-navigation__item--text': !$slots.icon && !item.icon }"
        :disabled="item.disabled" :title="item.title || item.label" :aria-label="item.ariaLabel || item.label"
        :aria-current="active && modelValue === item.key ? 'page' : undefined"
        :aria-pressed="active && modelValue === item.key" @click="select(item)" @keydown="keydown($event, item.key)">
        <span v-if="$slots.icon || item.icon" class="share-icon-navigation__icon"><slot name="icon" :item="item"><component :is="item.icon" v-if="item.icon" :size="iconSize" aria-hidden="true" /></slot></span>
        <span class="share-icon-navigation__label"><slot name="label" :item="item">{{ item.shortLabel || item.label }}</slot></span>
        <slot name="decoration" :item="item" />
      </button>
    </template>
  </nav>
</template>
<script setup>
import { useIconNavigation } from '../composables/useIconNavigation.js'
import { navigationFocusKey } from '../lib/iconNavigation.js'
const props = defineProps({
  items: { type: Array, required: true }, modelValue: { type: [String, Number], default: null },
  label: { type: String, required: true }, orientation: { type: String, default: 'horizontal', validator: value => ['horizontal', 'vertical'].includes(value) },
  pill: { type: Boolean, default: false },
  size: { type: Number, default: 56 }, height: { type: Number, default: null },
  radius: { type: [Number, String], default: null },
  active: { type: Boolean, default: true }, animate: { type: Boolean, default: true },
  layout: { type: String, default: 'stacked', validator: value => ['stacked', 'inline', 'compact'].includes(value) },
  iconSize: { type: Number, default: 24 }, labelSize: { type: [Number, String], default: null },
  selectedSize: { type: Number, default: 84 }, maxSize: { type: Number, default: 148 },
  selection: { type: Array, default: null },
})
const emit = defineEmits(['update:modelValue', 'select'])
const { element, ready, buttons, indicatorStyle, itemStyle, setButton, measure, reveal, revealActive } = useIconNavigation(props)
function select(item) {
  if (item.disabled) return
  if (item.key !== props.modelValue) emit('update:modelValue', item.key)
  emit('select', item.key)
}
function keydown(event, key) {
  if (event.altKey || event.ctrlKey || event.metaKey) return
  const next = navigationFocusKey(props.items, key, event.key, props.orientation)
  if (next == null) return
  event.preventDefault()
  event.stopPropagation()
  buttons.get(next)?.focus({ preventScroll: true })
  reveal(buttons.get(next))
}
defineExpose({ element, updateIndicator: measure, revealActive })
</script>
<style scoped>
.share-icon-navigation {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  flex: none;
  gap: 2px;
  padding: 4px;
  box-sizing: border-box;
  width: max-content;
  max-width: 100%;
  min-width: 0;
  min-height: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  overscroll-behavior: contain;
}
.share-icon-navigation--vertical { flex-direction: column; gap: 4px; padding: 6px; max-height: 100%; max-width: none; overflow-x: hidden; overflow-y: auto; scrollbar-width: none; }
.share-icon-navigation--vertical::-webkit-scrollbar { display: none; }
.share-icon-navigation__item {
  position: relative;
  z-index: 1;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: var(--icon-navigation-size);
  height: var(--icon-navigation-height);
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: var(--icon-navigation-radius, 9px);
  background: transparent;
  color: var(--text-muted);
  font: inherit;
  font-size: var(--icon-navigation-label-size, 10px);
  font-weight: 650;
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease;
}
.share-icon-navigation__icon { display: flex; align-items: center; justify-content: center; width: var(--icon-navigation-icon-size); height: var(--icon-navigation-icon-size); flex: none; }
.share-icon-navigation__icon > :deep(svg) { width: 100%; height: 100%; }
.share-icon-navigation__label { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 13px; }
.share-icon-navigation__item:hover:not(:disabled) { color: var(--text-1); border-color: var(--border-strong); }
.share-icon-navigation__item--selected, .share-icon-navigation__item--selected:hover:not(:disabled) { color: var(--text-on-accent); border-color: transparent; }
.share-icon-navigation__item:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.share-icon-navigation__item:disabled { opacity: .4; cursor: not-allowed; }
.share-icon-navigation__indicator {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  border-radius: var(--icon-navigation-radius, 9px);
  background: var(--accent);
  pointer-events: none;
  transition: transform 260ms cubic-bezier(.2,.7,.2,1), opacity 150ms ease;
}
.share-icon-navigation--pill > .share-icon-navigation__indicator { border-radius: var(--icon-navigation-radius, 999px); background: color-mix(in srgb, var(--accent) 18%, var(--surface)); }
.share-icon-navigation--pill > .share-icon-navigation__item { border-radius: var(--icon-navigation-radius, 999px); }
.share-icon-navigation--pill > .share-icon-navigation__item--selected,
.share-icon-navigation--pill > .share-icon-navigation__item--selected:hover:not(:disabled) { color: var(--accent-soft); }
.share-icon-navigation__divider { flex: none; width: 1px; height: 24px; margin: 0 6px; background: var(--border-strong); }
.share-icon-navigation--vertical > .share-icon-navigation__divider { width: 40px; height: 1px; margin: 6px 0; }
.share-icon-navigation--inline > .share-icon-navigation__item { flex-direction: row; gap: 8px; width: auto; min-width: var(--icon-navigation-size); padding-inline: 12px; font-size: var(--icon-navigation-label-size, 14px); }
.share-icon-navigation--inline .share-icon-navigation__label { line-height: 1.3; }
.share-icon-navigation--compact { width: 100%; scrollbar-width: none; }
.share-icon-navigation--compact::-webkit-scrollbar { display: none; }
.share-icon-navigation--compact > .share-icon-navigation__item { flex-direction: row; padding: 0; overflow: hidden; color: color-mix(in srgb,var(--accent-soft) calc(var(--icon-navigation-selection,0) * 100%),var(--text-muted)); transition: width 260ms cubic-bezier(.25,.1,.25,1),color 260ms cubic-bezier(.25,.1,.25,1); }
.share-icon-navigation--compact .share-icon-navigation__icon { transform: translateY(calc(-7px * var(--icon-navigation-selection,0))); transition: transform 260ms cubic-bezier(.25,.1,.25,1); }
.share-icon-navigation--compact .share-icon-navigation__label { position: absolute; top: calc(50% + 4px); left: 0; right: 0; opacity: var(--icon-navigation-selection,0); transition: opacity 260ms cubic-bezier(.25,.1,.25,1); pointer-events: none; }
.share-icon-navigation--compact .share-icon-navigation__item--text .share-icon-navigation__label { position: static; opacity: 1; }
.share-icon-navigation--compact > .share-icon-navigation__indicator { transition: transform 260ms cubic-bezier(.25,.1,.25,1),width 260ms cubic-bezier(.25,.1,.25,1),opacity 150ms ease; }
.share-icon-navigation--instant :is(.share-icon-navigation__item,.share-icon-navigation__icon,.share-icon-navigation__label,.share-icon-navigation__indicator) { transition: none; }
@media (prefers-reduced-motion: reduce) {
  .share-icon-navigation__indicator, .share-icon-navigation__item, .share-icon-navigation__icon, .share-icon-navigation__label { transition: none !important; }
}
</style>
