<template>
  <AppModalFrame v-if="isOpen" :title="title" :z-index="zIndex" :show-close="false" :dismissible="!loading" @close="cancel">
    <div v-if="message" class="tpd-message">{{ message }}</div>
    <label v-if="label" class="tpd-label">{{ label }}</label>
    <FormTextInput
      :value="draft"
      :placeholder="placeholder"
      :maxlength="maxlength"
      autofocus
      @update:value="draft = $event"
      @enter="submit"
    />
    <template #footer>
      <FormActionButtons
        :submit-text="resolvedConfirmLabel"
        :cancel-text="resolvedCancelLabel"
        :loading-text="loadingLabel"
        :loading="loading"
        :can-submit="!!draft.trim()"
        @cancel="cancel"
        @submit="submit"
      />
    </template>
  </AppModalFrame>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import AppModalFrame from './AppModalFrame.vue'
import FormActionButtons from '../form/FormActionButtons.vue'
import FormTextInput from '../form/FormTextInput.vue'

const props = defineProps({
  title: { type: String, required: true },
  open: { type: Boolean, default: null },
  message: { type: String, default: '' },
  value: { type: String, default: '' },
  initial: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  maxlength: { type: Number, default: 255 },
  confirmLabel: { type: String, default: 'Сохранить' },
  cancelLabel: { type: String, default: 'Отмена' },
  confirmText: { type: String, default: '' },
  cancelText: { type: String, default: '' },
  loadingLabel: { type: String, default: 'Сохранение…' },
  loading: { type: Boolean, default: false },
  zIndex: { type: Number, default: 5000 },
})
const emit = defineEmits(['update:open', 'confirm', 'submit', 'cancel'])
const isOpen = computed(() => props.open === null ? true : props.open)
const resolvedConfirmLabel = computed(() => props.confirmText || props.confirmLabel)
const resolvedCancelLabel = computed(() => props.cancelText || props.cancelLabel)
const draft = ref(props.value || props.initial)

watch(() => props.value, value => { draft.value = value })
watch(() => props.open, open => {
  if (open) nextTick(() => { draft.value = props.initial || props.value })
})

function closeControlled() { if (props.open !== null) emit('update:open', false) }

function cancel() {
  if (!props.loading) { emit('cancel'); closeControlled() }
}

function submit() {
  const value = draft.value.trim()
  if (value && !props.loading) {
    emit('confirm', value)
    emit('submit', value)
    closeControlled()
  }
}
</script>

<style scoped>
.tpd-message {
  color: var(--text-2);
  font-size: 13px;
  line-height: 1.5;
}
.tpd-label { color: var(--text-muted); font-size: 12px; }
</style>
