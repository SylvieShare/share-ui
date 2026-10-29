<template>
  <div class="fn-wrap">
    <button type="button" class="fn-btn" tabindex="-1" @click.stop="increment(-1)">−</button>
    <input
      class="fn-input"
      type="number"
      :value="live ? draft : value"
      :min="min"
      :max="max"
      :step="step"
      @change="onChange"
      @input="onInput"
      @focus="focused = true"
      @blur="onBlur"
    />
    <button type="button" class="fn-btn" tabindex="-1" @click.stop="increment(1)">+</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  value: { default: 0 },
  live: { type: Boolean, default: false },
  step: { type: Number, default: 1, validator: n => Number.isFinite(n) && n > 0 },
  min:   { default: undefined },
  max:   { default: undefined },
})
const emit = defineEmits(['change'])

function clamp(n) {
  if (props.min != null && n < props.min) return props.min
  if (props.max != null && n > props.max) return props.max
  return n
}

function read(value) {
  return (Number.isInteger(props.step) ? parseInt(value) : parseFloat(value)) || 0
}

const draft = ref(String(props.value ?? ''))
const focused = ref(false)
let sent = props.value
watch(() => props.value, value => {
  if (!focused.value || value !== sent) draft.value = String(value ?? '')
  sent = value
})
function send(value) {
  if (!props.live || value !== sent) { sent = value; emit('change', value) }
}
function onChange(e) {
  if (props.live && (e.target.value.trim() === '' || !Number.isFinite(Number(e.target.value)))) return
  send(clamp(read(e.target.value)))
}
function onInput(e) {
  draft.value = e.target.value
  if (props.live) onChange(e)
}
function onBlur(e) {
  focused.value = false
  if (props.live) {
    onChange(e)
    draft.value = String(props.value ?? '')
  }
}

function increment(delta) {
  const next = Number((read(props.value) + delta * props.step).toPrecision(15))
  emit('change', clamp(next))
}
</script>

<style scoped>
.fn-wrap {
  display: flex;
  width: fit-content;
  align-items: center;
  background: var(--surface-raised);
  box-shadow: inset 0 0 0 var(--control-border-width) var(--border-strong);
  border-radius: 8px;
  overflow: hidden;
}

.fn-wrap:focus-within { background: var(--control-focus-bg); }

.fn-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 16px;
  font-weight: 700;
  width: 28px;
  height: 36px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.12s, background 0.12s;
  line-height: 1;
  user-select: none;
  touch-action: manipulation;
}
.fn-btn:hover { color: var(--text-2); background: color-mix(in srgb, var(--text-on-accent) 6%, transparent); }
.fn-btn:active { background: color-mix(in srgb, var(--text-on-accent) 12%, transparent); }

.fn-input {
  width: 48px;
  background: none;
  border: none;
  color: var(--text-2);
  font-size: 15px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  padding: 0;
  outline: none;
  -moz-appearance: textfield;
}
.fn-input::-webkit-inner-spin-button,
.fn-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
