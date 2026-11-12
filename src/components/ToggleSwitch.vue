<template>
  <button
    class="share-toggle-switch"
    :class="{ 'share-toggle-switch--active': modelValue, 'share-toggle-switch--block': block, 'share-toggle-switch--raised': surface === 'raised', 'share-toggle-switch--trailing-track': trackPlacement === 'end' }"
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :aria-label="ariaLabel || label || undefined"
    :disabled="disabled"
    @click="toggle"
  >
    <span class="share-toggle-switch__track" aria-hidden="true">
      <span class="share-toggle-switch__thumb" />
    </span>
    <span v-if="label || $slots.default" class="share-toggle-switch__text"><slot>{{ label }}</slot></span>
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' },
  ariaLabel: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  surface: { type: String, default: 'base', validator: value => ['base', 'raised'].includes(value) },
  trackPlacement: { type: String, default: 'start', validator: value => ['start', 'end'].includes(value) },
})
const emit = defineEmits(['update:modelValue'])
function toggle() {
  if (!props.disabled) emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.share-toggle-switch {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  border: 0;
  background: none;
  color: var(--text-muted);
  font: inherit;
  cursor: pointer;
  user-select: none;
}
.share-toggle-switch:disabled { opacity: .45; cursor: not-allowed; }
.share-toggle-switch--block { display:flex;width:100%;box-sizing:border-box;min-height:48px;padding:8px 10px;border-radius:var(--r-md);text-align:start }
.share-toggle-switch--block .share-toggle-switch__text {flex:1;min-width:0}
.share-toggle-switch--trailing-track .share-toggle-switch__track {order:1}
.share-toggle-switch--block:hover:not(:disabled) {background:var(--surface-active)}
.share-toggle-switch--block:focus-visible {outline:2px solid var(--accent-soft);outline-offset:2px}
.share-toggle-switch__track {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 22px;
  flex: none;
  border-radius: var(--r-pill);
  background: var(--surface-raised);
  box-shadow: inset 0 0 0 var(--control-border-width) var(--border-strong);
  transition: background-color .2s ease, box-shadow .2s ease;
}
.share-toggle-switch__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--text-muted);
  transition: transform .2s ease, background-color .2s ease;
}
.share-toggle-switch--raised:not(.share-toggle-switch--active) .share-toggle-switch__track {background:var(--bg)}
.share-toggle-switch--active .share-toggle-switch__track { background: var(--accent); box-shadow: none; }
.share-toggle-switch--active .share-toggle-switch__thumb { transform: translateX(16px); background: var(--text-on-accent); }
.share-toggle-switch__text { color: var(--text-muted); font-size: 13px; transition: color .2s ease; }
.share-toggle-switch--active .share-toggle-switch__text { color: var(--text-2); }
</style>
