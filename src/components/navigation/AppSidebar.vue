<template>
  <aside
    class="share-app-sidebar app-sidebar"
    :class="[
      expanded && 'share-app-sidebar--expanded app-sidebar--expanded',
      `share-app-sidebar--${position}`,
      `share-app-sidebar--mobile-${mobileMode}`,
      `share-app-sidebar--breakpoint-${mobileBreakpoint}`,
    ]"
  >
    <div v-if="$slots.brand" class="share-sidebar-head">
      <slot name="brand" :expanded="expanded" :toggle="toggle" />
    </div>

    <nav class="share-sidebar-nav" :aria-label="ariaLabel">
      <slot :expanded="expanded" :toggle="toggle" />
    </nav>

    <div v-if="showToggle || $slots.tools" class="share-sidebar-tools">
      <SidebarToggle
        v-if="showToggle"
        :expanded="expanded"
        :expand-label="expandLabel"
        :collapse-label="collapseLabel"
        @click="toggle"
      />
      <slot name="tools" :expanded="expanded" :expand="expand" :collapse="collapse" :toggle="toggle" />
    </div>

    <div v-if="$slots.account" class="share-sidebar-account">
      <slot name="account" :expanded="expanded" />
    </div>
  </aside>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import SidebarToggle from './SidebarToggle.vue'

const props = defineProps({
  modelValue: { type: Boolean, default: undefined },
  defaultExpanded: { type: Boolean, default: false },
  storageKey: { type: String, default: '' },
  position: {
    type: String,
    default: 'fixed',
    validator: value => ['fixed', 'sticky'].includes(value),
  },
  mobileMode: {
    type: String,
    default: 'hide',
    validator: value => ['hide', 'top'].includes(value),
  },
  mobileBreakpoint: {
    type: Number,
    default: 768,
    validator: value => [640, 768].includes(value),
  },
  ariaLabel: { type: String, default: 'Main navigation' },
  showToggle: { type: Boolean, default: true },
  expandLabel: { type: String, default: 'Expand sidebar' },
  collapseLabel: { type: String, default: 'Collapse sidebar' },
})
const emit = defineEmits(['update:modelValue', 'change'])

function readStoredValue() {
  if (!props.storageKey || typeof window === 'undefined') return props.defaultExpanded
  try {
    const stored = window.localStorage.getItem(props.storageKey)
    return stored == null ? props.defaultExpanded : stored === 'true'
  } catch {
    return props.defaultExpanded
  }
}

const internalExpanded = ref(readStoredValue())
const expanded = computed({
  get: () => props.modelValue ?? internalExpanded.value,
  set: value => {
    internalExpanded.value = value
    emit('update:modelValue', value)
    emit('change', value)
  },
})

watch(expanded, value => {
  if (!props.storageKey || typeof window === 'undefined') return
  try {
    window.localStorage.setItem(props.storageKey, String(value))
  } catch {
    // Persistence is optional when storage is unavailable.
  }
})

function expand() { expanded.value = true }
function collapse() { expanded.value = false }
function toggle() { expanded.value = !expanded.value }

defineExpose({ expanded, expand, collapse, toggle })
</script>

<style scoped>
.share-app-sidebar {
  z-index: 60;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: var(--share-sidebar-collapsed-w, 64px);
  height: 100vh;
  height: 100dvh;
  overflow: visible;
  background: var(--bg);
  border-right: 1px solid var(--border);
  transition: width 0.28s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s ease;
}

.share-app-sidebar--fixed { position: fixed; inset: 0 auto 0 0; }
.share-app-sidebar--sticky { position: sticky; top: 0; }

.share-app-sidebar--expanded {
  width: var(--share-sidebar-expanded-w, 224px);
  box-shadow: var(--shadow-lg);
}

.share-sidebar-head {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 10px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.share-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 0;
  padding: 12px 10px 10px;
  overflow-x: hidden;
  overflow-y: auto;
}

.share-sidebar-tools {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: auto;
  padding: 10px;
  border-top: 1px solid var(--border);
}

.share-sidebar-account {
  min-height: 54px;
  padding: 10px;
  border-top: 1px solid var(--border);
}

@media (max-width: 768px) {
  .share-app-sidebar--breakpoint-768.share-app-sidebar--mobile-hide { display: none; }

  .share-app-sidebar--breakpoint-768.share-app-sidebar--mobile-top {
    position: sticky;
    inset: auto;
    top: 0;
    z-index: 100;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: auto;
    padding: 8px 12px;
    overflow-x: auto;
    border-right: 0;
    border-bottom: 1px solid var(--border);
    box-shadow: none;
  }

  .share-app-sidebar--breakpoint-768.share-app-sidebar--mobile-top .share-sidebar-head {
    width: auto;
    height: auto;
    padding: 0;
    border: 0;
  }

  .share-app-sidebar--breakpoint-768.share-app-sidebar--mobile-top .share-sidebar-nav {
    flex: 1;
    flex-direction: row;
    gap: 4px;
    padding: 0;
    overflow-x: auto;
  }

  .share-app-sidebar--breakpoint-768.share-app-sidebar--mobile-top .share-sidebar-tools,
  .share-app-sidebar--breakpoint-768.share-app-sidebar--mobile-top .share-sidebar-account { display: none; }
}

@media (max-width: 640px) {
  .share-app-sidebar--breakpoint-640.share-app-sidebar--mobile-hide { display: none; }

  .share-app-sidebar--breakpoint-640.share-app-sidebar--mobile-top {
    position: sticky;
    inset: auto;
    top: 0;
    z-index: 100;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: auto;
    padding: 8px 12px;
    overflow-x: auto;
    border-right: 0;
    border-bottom: 1px solid var(--border);
    box-shadow: none;
  }

  .share-app-sidebar--breakpoint-640.share-app-sidebar--mobile-top .share-sidebar-head {
    width: auto;
    height: auto;
    padding: 0;
    border: 0;
  }

  .share-app-sidebar--breakpoint-640.share-app-sidebar--mobile-top .share-sidebar-nav {
    flex: 1;
    flex-direction: row;
    gap: 4px;
    padding: 0;
    overflow-x: auto;
  }

  .share-app-sidebar--breakpoint-640.share-app-sidebar--mobile-top .share-sidebar-tools,
  .share-app-sidebar--breakpoint-640.share-app-sidebar--mobile-top .share-sidebar-account { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .share-app-sidebar { transition: none; }
}
</style>
