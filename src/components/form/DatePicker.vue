<template>
  <span class="share-date-picker">
    <button ref="anchor" type="button" class="share-date-picker__trigger" :disabled="disabled" :aria-label="ariaLabel"
      :aria-expanded="open" aria-haspopup="dialog" @click="toggle">
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-13 4h3m3 0h2" />
      </svg>
      <span :class="{ 'share-date-picker__placeholder': !selected }">{{ selected ? format(selected) : placeholder }}</span>
    </button>
    <BasePopover :open="open" :anchor="anchor" :min-width="0" :z-index="zIndex" role="dialog" :aria-label="ariaLabel"
      transition-preset="action-menu" :close-on-scroll="false" @update:open="setOpen">
      <div ref="calendar" class="share-date-picker__calendar" @keydown="onCalendarKey">
        <div class="share-date-picker__heading">
          <button type="button" :aria-label="previousLabel" @click="changeMonth(-1)">‹</button>
          <FormSelect :value="month" :aria-label="monthLabel" @update:value="setMonth(Number($event))">
            <option v-for="(label, index) in months" :key="index" :value="index">{{ label }}</option>
          </FormSelect>
          <FormSelect :value="year" :aria-label="yearLabel" @update:value="setYear(Number($event))">
            <option v-for="value in years" :key="value" :value="value">{{ value }}</option>
          </FormSelect>
          <button type="button" :aria-label="nextLabel" @click="changeMonth(1)">›</button>
        </div>
        <div role="grid" :aria-label="`${months[month]} ${year}`">
          <div class="share-date-picker__week" role="row">
            <span v-for="day in weekdays" :key="day" role="columnheader">{{ day }}</span>
          </div>
          <div v-for="(week, index) in weeks" :key="index" class="share-date-picker__week" role="row">
            <span v-for="day in week" :key="day.value" role="gridcell" :aria-selected="day.value === modelValue">
              <button type="button" :data-date="day.value" :tabindex="day.value === focused ? 0 : -1"
                :disabled="unavailable(day.value)" :aria-label="format(parseDate(day.value), true)" :aria-current="day.value === today ? 'date' : undefined"
                :class="{ outside: day.outside, selected: day.value === modelValue, today: day.value === today }"
                @click="pick(day.value)" @keydown="navigate($event, day.value)">{{ day.day }}</button>
            </span>
          </div>
        </div>
        <div class="share-date-picker__footer">
          <button type="button" :disabled="unavailable(today)" @click="pick(today)">{{ todayLabel }}</button>
          <button v-if="allowClear" type="button" @click="pick('')">{{ clearLabel }}</button>
        </div>
      </div>
    </BasePopover>
  </span>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import BasePopover from '../floating/BasePopover.vue'
import FormSelect from './FormSelect.vue'
import { dateUnavailable, dateValue, monthDays, moveDate, parseDate } from '../../lib/calendar.js'

const props = defineProps({
  modelValue: { type: String, default: '' },
  locale: { type: String, default: 'en-US' },
  weekStartsOn: { type: Number, default: 1 },
  disabled: Boolean,
  min: { type: String, default: '' }, max: { type: String, default: '' },
  placeholder: { type: String, default: 'Choose a date' },
  ariaLabel: { type: String, default: 'Choose a date' },
  previousLabel: { type: String, default: 'Previous month' }, nextLabel: { type: String, default: 'Next month' },
  monthLabel: { type: String, default: 'Month' }, yearLabel: { type: String, default: 'Year' },
  todayLabel: { type: String, default: 'Today' }, clearLabel: { type: String, default: 'Clear' },
  allowClear: Boolean, zIndex: { type: Number, default: 4000 },
})
const emit = defineEmits(['update:modelValue'])
const anchor = ref(null), calendar = ref(null), open = ref(false)
const today = dateValue(new Date())
const selected = computed(() => parseDate(props.modelValue))
const focused = ref(props.modelValue || today)
const year = ref(new Date().getFullYear()), month = ref(new Date().getMonth())
const months = computed(() => Array.from({ length: 12 }, (_, index) => new Intl.DateTimeFormat(props.locale, { month: 'long' }).format(new Date(2024, index, 1))))
const years = computed(() => Array.from({ length: 201 }, (_, i) => year.value - 100 + i).filter(value => value >= 1 && value <= 9999))
const weekdays = computed(() => Array.from({ length: 7 }, (_, index) => new Intl.DateTimeFormat(props.locale, { weekday: 'short' }).format(new Date(2024, 0, 7 + (props.weekStartsOn + index) % 7))))
const weeks = computed(() => {
  const days = monthDays(year.value, month.value, props.weekStartsOn)
  return Array.from({ length: 6 }, (_, index) => days.slice(index * 7, index * 7 + 7))
})
function format(date, full = false) { return new Intl.DateTimeFormat(props.locale, { day: 'numeric', month: 'long', year: 'numeric', ...(full ? { weekday: 'long' } : {}) }).format(date) }
function unavailable(value) { return dateUnavailable(value, props.min, props.max) }
function show(value) {
  const date = parseDate(value) || new Date()
  year.value = date.getFullYear(); month.value = date.getMonth(); focused.value = dateValue(date)
}
async function focusDay() { await nextTick(); calendar.value?.querySelector(`[data-date="${focused.value}"]`)?.focus({ preventScroll: true }) }
function setOpen(value) { open.value = value; if (!value) anchor.value?.focus() }
async function toggle() {
  if (props.disabled) return
  if (open.value) { setOpen(false); return }
  let value = selected.value ? props.modelValue : today
  if (props.min && value < props.min) value = props.min
  if (props.max && value > props.max) value = props.max
  show(value); open.value = true; await focusDay()
}
function pick(value) { if (props.disabled || (value && unavailable(value))) return; emit('update:modelValue', value); setOpen(false) }
function changeMonth(delta) {
  const target = moveDate(focused.value, 0, delta)
  if (parseDate(target)) show(target)
}
function setMonth(value) { changeMonth(value - month.value) }
function setYear(value) { changeMonth((value - year.value) * 12) }
function navigate(event, value) {
  const offsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }
  let target
  if (event.key in offsets) target = moveDate(value, offsets[event.key])
  else if (event.key === 'PageUp' || event.key === 'PageDown') target = moveDate(value, 0, (event.key === 'PageUp' ? -1 : 1) * (event.shiftKey ? 12 : 1))
  else if (event.key === 'Home' || event.key === 'End') {
    const offset = (parseDate(value).getDay() - props.weekStartsOn + 7) % 7
    target = moveDate(value, event.key === 'Home' ? -offset : 6 - offset)
  } else return
  event.preventDefault()
  if (!unavailable(target)) { show(target); focusDay() }
}
function trapTab(event) {
  if (event.key !== 'Tab') return
  const items = [...calendar.value.querySelectorAll('button:not(:disabled), select:not(:disabled)')].filter(el => el.tabIndex >= 0)
  const first = items[0], last = items.at(-1)
  if (event.shiftKey && event.target === first) { event.preventDefault(); last?.focus() }
  else if (!event.shiftKey && event.target === last) { event.preventDefault(); first?.focus() }
}
function onCalendarKey(event) {
  if (event.key === 'Escape') { event.stopPropagation(); event.preventDefault(); setOpen(false) }
  if (event.key === 'Tab') { event.stopPropagation(); trapTab(event) }
}
watch(() => props.disabled, value => { if (value) open.value = false })
watch(() => props.modelValue, value => { if (open.value) show(value) })
</script>

<style scoped>
.share-date-picker { display: block; min-width: 0; }
.share-date-picker__trigger { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 42px; padding: 10px 12px; border: 1px solid var(--border-strong); border-radius: 8px; background: var(--input-bg, var(--surface)); color: var(--text-1); text-align: left; font: inherit; font-size: 14px; cursor: pointer; }
.share-date-picker__trigger svg { flex: none; color: var(--accent); }
.share-date-picker__placeholder { color: var(--text-muted); }
.share-date-picker__trigger:hover:not(:disabled) { border-color: var(--accent); }
.share-date-picker__trigger:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.share-date-picker__calendar { width: min(294px, calc(100vw - 44px)); padding: 4px; color: var(--text-1); }
.share-date-picker__heading { display: grid; grid-template-columns: 28px minmax(0, 1fr) 76px 28px; align-items: center; gap: 4px; padding-bottom: 14px; }
.share-date-picker__heading > button { height: 32px; font-size: 25px; }
.share-date-picker__week { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; text-align: center; }
.share-date-picker__week > [role="columnheader"] { padding: 5px 0 9px; color: var(--text-muted); font-size: 11px; }
.share-date-picker__week button { width: 100%; aspect-ratio: 1; font-size: 13px; font-variant-numeric: tabular-nums; }
.share-date-picker__calendar button { border: 1px solid transparent; border-radius: 8px; background: transparent; color: var(--text-1); cursor: pointer; }
.share-date-picker__calendar button:hover:not(:disabled) { background: var(--surface-raised); }
.share-date-picker__calendar button:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.share-date-picker__week button.outside { color: var(--text-muted); opacity: .65; }
.share-date-picker__week button.today { border-color: var(--accent); color: var(--accent); }
.share-date-picker__week button.selected { background: var(--accent); color: var(--text-on-accent); font-weight: 700; opacity: 1; }
.share-date-picker__calendar button.selected:hover { background: var(--accent-hover); }
.share-date-picker__footer { display: flex; justify-content: space-between; border-top: 1px solid var(--border); margin-top: 12px; padding-top: 8px; }
.share-date-picker__footer button { padding: 7px 10px; color: var(--accent); font: inherit; font-size: 12px; }
.share-date-picker button:disabled { opacity: .4; cursor: default; }
.share-date-picker__calendar button:disabled { opacity: .3; cursor: default; }
</style>
