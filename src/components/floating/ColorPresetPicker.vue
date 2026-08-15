<template>
  <div v-if="inline" class="cpp-body cpp-body--inline" :aria-label="ariaLabel">
    <ColorGrid />
  </div>

  <span v-else ref="anchorEl" class="cpp-host">
    <slot name="trigger" :toggle="toggle" :open="open" :value="modelValue">
      <button
        type="button"
        class="cpp-swatch"
        :class="{ 'cpp-swatch--empty': !modelValue }"
        :style="modelValue ? { background: modelValue } : null"
        :aria-label="ariaLabel"
        :aria-expanded="open"
        aria-haspopup="dialog"
        @click="toggle"
      />
    </slot>

    <BasePopover
      :open="open"
      :anchor="anchorEl"
      :placement="placement"
      :min-width="0"
      :z-index="zIndex"
      :transition="transitionName"
      role="dialog"
      :aria-label="ariaLabel"
      @update:open="onPopoverState"
    >
      <div class="cpp-body">
        <ColorGrid />
      </div>
    </BasePopover>
  </span>
</template>

<script setup>
import { computed, defineComponent, h, ref, watch } from 'vue'
import { isValidHexColor, PRESET_COLORS } from '../../lib/colorPresets.js'
import BasePopover from './BasePopover.vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  colors: { type: Array, default: () => PRESET_COLORS },
  columns: { type: Number, default: 6 },
  allowCustom: { type: Boolean, default: false },
  allowClear: { type: Boolean, default: false },
  clearValue: { default: null },
  clearLabel: { type: String, default: 'Clear' },
  customLabel: { type: String, default: 'Custom color' },
  ariaLabel: { type: String, default: 'Choose color' },
  inline: { type: Boolean, default: false },
  placement: { type: String, default: 'bottom-start' },
  zIndex: { type: Number, default: 4000 },
})
const emit = defineEmits(['update:modelValue', 'invalid'])

const anchorEl = ref(null)
const open = ref(false)
const transitionName = ref('cpppop-cancel')
const customDraft = ref(props.modelValue || '')
const defaultNativeColor = '#888888'

const nativeColor = computed(() => /^#[0-9a-f]{6}$/i.test(props.modelValue || '') ? props.modelValue : defaultNativeColor)
const customInvalid = computed(() => Boolean(customDraft.value) && !isValidHexColor(customDraft.value))

function isActive(color) {
  return String(props.modelValue || '').toLowerCase() === String(color).toLowerCase()
}

function openPopover() {
  transitionName.value = 'cpppop-cancel'
  open.value = true
}

function closePopover(reason) {
  transitionName.value = reason === 'pick' ? 'cpppop-pick' : 'cpppop-cancel'
  open.value = false
}

function toggle() {
  if (open.value) closePopover('cancel')
  else openPopover()
}

function onPopoverState(value) {
  if (!value) closePopover('cancel')
}

function emitColor(value) {
  customDraft.value = value
  emit('update:modelValue', value)
}

function commitCustom() {
  const value = customDraft.value.trim()
  if (!isValidHexColor(value)) {
    emit('invalid', value)
    return
  }
  emitColor(value)
}

function pick(color) {
  emitColor(color)
  closePopover('pick')
}

function clear() {
  customDraft.value = ''
  emit('update:modelValue', props.clearValue)
  closePopover('pick')
}

watch(() => props.modelValue, value => {
  customDraft.value = value || ''
})

const ColorGrid = defineComponent({
  name: 'ColorPresetGrid',
  setup() {
    return () => h('div', { class: 'cpp-content' }, [
      h('div', { class: 'cpp-grid', style: { '--cpp-columns': props.columns } },
        props.colors.map(color => h('button', {
          key: color,
          type: 'button',
          class: ['cpp-color', { active: isActive(color) }],
          style: { background: color },
          title: color,
          'aria-label': color,
          'aria-pressed': isActive(color),
          onMousedown: event => event.preventDefault(),
          onClick: () => pick(color),
        }))),
      props.allowCustom || props.allowClear
        ? h('div', { class: 'cpp-extra' }, [
            props.allowCustom
              ? h('label', { class: 'cpp-native', title: props.customLabel }, [
                  h('span', {
                    class: 'cpp-native-sw',
                    style: { background: props.modelValue || 'var(--surface-active)' },
                  }),
                  h('input', {
                    type: 'color',
                    value: nativeColor.value,
                    'aria-label': props.customLabel,
                    onInput: event => emitColor(event.target.value),
                  }),
                ])
              : null,
            props.allowCustom
              ? h('input', {
                  class: ['cpp-hex', { 'cpp-hex--invalid': customInvalid.value }],
                  type: 'text',
                  value: customDraft.value,
                  placeholder: '#hex',
                  spellcheck: 'false',
                  'aria-label': props.customLabel,
                  'aria-invalid': customInvalid.value,
                  onInput: event => { customDraft.value = event.target.value },
                  onChange: commitCustom,
                  onKeydown: event => {
                    if (event.key === 'Enter') commitCustom()
                  },
                })
              : null,
            props.allowClear
              ? h('button', {
                  type: 'button',
                  class: 'cpp-clear',
                  onMousedown: event => event.preventDefault(),
                  onClick: clear,
                }, props.clearLabel)
              : null,
          ])
        : null,
    ])
  },
})
</script>

<style scoped>
.cpp-host { position: relative; display: inline-flex; flex-shrink: 0; }

.cpp-swatch {
  width: 22px;
  height: 22px;
  padding: 0;
  border: 2px solid color-mix(in srgb, var(--text-on-accent) 15%, transparent);
  border-radius: var(--r-sm);
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
}

.cpp-swatch:hover { border-color: color-mix(in srgb, var(--text-on-accent) 45%, transparent); transform: scale(1.1); }
.cpp-swatch--empty { background: var(--bg); border-style: dashed; }
.cpp-body { display: flex; flex-direction: column; gap: 10px; padding: 2px; }
.cpp-body--inline { padding: 0; }
</style>

<style>
.cpp-content { display: flex; flex-direction: column; gap: 10px; }
.cpp-grid { display: grid; grid-template-columns: repeat(var(--cpp-columns, 6), 1fr); gap: 6px; }

.cpp-color {
  width: 24px;
  height: 24px;
  padding: 0;
  border: 2px solid transparent;
  border-radius: var(--r-sm);
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease;
}

.cpp-color:hover { transform: scale(1.18); }
.cpp-color.active { border-color: color-mix(in srgb, var(--text-on-accent) 80%, transparent); transform: scale(1.08); }
.cpp-extra { display: flex; align-items: center; gap: 8px; }

.cpp-native {
  position: relative;
  width: 28px;
  height: 28px;
  overflow: hidden;
  border: 1px solid var(--border-strong);
  border-radius: var(--r-sm);
  cursor: pointer;
  flex-shrink: 0;
}

.cpp-native-sw { position: absolute; inset: 0; }
.cpp-native input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }

.cpp-hex {
  flex: 1;
  min-width: 0;
  height: 28px;
  padding: 0 8px;
  background: var(--bg);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-sm);
  color: var(--text-1);
  font: inherit;
  font-size: 12px;
  outline: none;
  transition: border-color 0.12s;
}

.cpp-hex:focus { border-color: var(--accent); }
.cpp-hex--invalid { border-color: var(--danger); }

.cpp-clear {
  margin-left: auto;
  padding: 4px 6px;
  background: none;
  border: none;
  border-radius: var(--r-sm);
  color: var(--text-muted);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.12s;
}

.cpp-clear:hover { color: var(--text-2); }

.cpppop-pick-enter-active,
.cpppop-cancel-enter-active {
  transition: opacity 0.16s ease, transform 0.16s cubic-bezier(0.2, 0.8, 0.3, 1);
  transform-origin: top center;
}

.cpppop-pick-enter-from,
.cpppop-cancel-enter-from { opacity: 0; transform: scale(0.9) translateY(-6px); }

.cpppop-pick-leave-active {
  transition: opacity 0.26s ease, transform 0.26s cubic-bezier(0.3, 0, 0.5, 1);
  transform-origin: top center;
}

.cpppop-pick-leave-to { opacity: 0; transform: scale(1.09); }

.cpppop-cancel-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
  transform-origin: top center;
}

.cpppop-cancel-leave-to { opacity: 0; transform: scale(0.94) translateY(-5px); }

@media (prefers-reduced-motion: reduce) {
  .cpp-color, .cpp-swatch,
  .cpppop-pick-enter-active, .cpppop-cancel-enter-active,
  .cpppop-pick-leave-active, .cpppop-cancel-leave-active { transition: none; }
}
</style>
