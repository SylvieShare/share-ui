<template>
  <ActionMenu :title="title" :disabled="disabled" block>
    <template #trigger="{ open }">
      <button
        type="button"
        class="share-account-trigger"
        :class="{
          'share-account-trigger--expanded': expanded,
          'share-account-trigger--open': open,
        }"
        :aria-label="ariaLabel || label || title"
        :aria-expanded="open"
        aria-haspopup="menu"
        :disabled="disabled"
      >
        <span class="share-account-avatar" aria-hidden="true">
          <slot name="avatar">{{ resolvedAvatarText }}</slot>
        </span>
        <span v-if="expanded" class="share-account-label">{{ label }}</span>
        <svg
          v-if="expanded"
          class="share-account-chevron"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </template>

    <template #default="{ close }">
      <slot :close="close" />
    </template>
  </ActionMenu>
</template>

<script setup>
import { computed } from 'vue'
import ActionMenu from '../floating/ActionMenu.vue'

const props = defineProps({
  label: { type: String, default: '' },
  avatarText: { type: String, default: '' },
  expanded: { type: Boolean, default: true },
  title: { type: String, default: 'Account actions' },
  ariaLabel: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})

const resolvedAvatarText = computed(() => (
  props.avatarText || props.label.trim().charAt(0) || '?'
).toUpperCase())
</script>

<style scoped>
.share-account-trigger {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  min-width: 0;
  height: 38px;
  padding: 3px;
  background: none;
  border: none;
  border-radius: 8px;
  color: var(--text-1);
  font: inherit;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.share-account-trigger--expanded {
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  padding-right: 8px;
}

.share-account-trigger:hover:not(:disabled),
.share-account-trigger--open {
  background: var(--surface-raised);
}

.share-account-trigger:disabled { cursor: default; opacity: 0.5; }

.share-account-avatar {
  display: grid;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--text-on-accent);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  place-items: center;
  flex: 0 0 32px;
  user-select: none;
}

.share-account-label {
  min-width: 0;
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.share-account-chevron {
  width: 16px;
  height: 16px;
  margin-left: auto;
  color: var(--text-muted);
  flex: 0 0 16px;
  transition: transform 0.15s ease;
}

.share-account-trigger--open .share-account-chevron { transform: rotate(180deg); }

@media (prefers-reduced-motion: reduce) {
  .share-account-trigger,
  .share-account-chevron { transition: none; }
}
</style>
