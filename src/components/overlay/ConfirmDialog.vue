<template>
  <AppModalFrame v-if="isOpen" :title="title" :z-index="zIndex" :show-close="false" :dismissible="!loading" @close="cancel">
    <div v-if="message" class="cd-message">{{ message }}</div>
    <template #footer>
      <div class="cd-actions">
        <button type="button" class="cd-btn-cancel" :disabled="loading" @click="cancel">{{ resolvedCancelLabel }}</button>
        <button
          type="button"
          class="cd-btn-confirm"
          :class="`cd-btn--${resolvedVariant}`"
          :disabled="loading"
          @click="confirm"
        >{{ loading ? loadingLabel : resolvedConfirmLabel }}</button>
      </div>
    </template>
  </AppModalFrame>
</template>

<script setup>
import { computed } from 'vue'
import AppModalFrame from './AppModalFrame.vue'

const props = defineProps({
  open:         { type: Boolean, default: null },
  title:        { type: String, required: true },
  message:      { type: String, default: '' },
  confirmLabel: { type: String, default: 'Подтвердить' },
  cancelLabel:  { type: String, default: 'Отмена' },
  confirmText:  { type: String, default: '' },
  cancelText:   { type: String, default: '' },
  loadingLabel: { type: String, default: 'Выполняется…' },
  loading:      { type: Boolean, default: false },
  variant:      { type: String, default: 'danger' },
  confirmKind:  { type: String, default: '' },
  zIndex:       { type: Number, default: 5000 },
})
const emit = defineEmits(['update:open', 'confirm', 'cancel'])
const isOpen = computed(() => props.open === null ? true : props.open)
const resolvedConfirmLabel = computed(() => props.confirmText || props.confirmLabel)
const resolvedCancelLabel = computed(() => props.cancelText || props.cancelLabel)
const resolvedVariant = computed(() => props.confirmKind || props.variant)
function closeControlled() { if (props.open !== null) emit('update:open', false) }
function cancel() { if (props.loading) return; emit('cancel'); closeControlled() }
function confirm() { if (props.loading) return; emit('confirm'); closeControlled() }
</script>

<style scoped>
.cd-message {
  font-size: 13px;
  color: var(--text-2);
  line-height: 1.5;
}

.cd-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.cd-btn-cancel {
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid var(--border-strong);
  background: none;
  color: var(--text-2);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.cd-btn-cancel:hover {
  background: var(--surface-raised);
  color: var(--text-1);
}

.cd-btn-confirm {
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.cd-btn--danger {
  background: color-mix(in srgb, var(--danger) 24%, var(--surface-raised));
  color: color-mix(in srgb, var(--danger) 42%, var(--text-on-accent));
}

.cd-btn--danger:hover {
  background: color-mix(in srgb, var(--danger) 36%, var(--surface-raised));
}

.cd-btn--warning {
  background: color-mix(in srgb, var(--warning) 20%, var(--surface-raised));
  color: color-mix(in srgb, var(--warning) 50%, var(--text-on-accent));
}

.cd-btn--warning:hover {
  background: color-mix(in srgb, var(--warning) 30%, var(--surface-raised));
}

.cd-btn--success {
  background: color-mix(in srgb, var(--success) 24%, var(--surface-raised));
  color: color-mix(in srgb, var(--success) 52%, var(--text-on-accent));
}

.cd-btn--success:hover { background: color-mix(in srgb, var(--success) 36%, var(--surface-raised)); }

.cd-btn-cancel:disabled,
.cd-btn-confirm:disabled {
  cursor: wait;
  opacity: 0.55;
}
</style>
