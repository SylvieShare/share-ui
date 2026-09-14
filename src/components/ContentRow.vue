<template>
  <div
    class="oli"
    :class="{ 'oli--interactive': interactive, 'oli--selected': selected }"
    :role="interactive ? 'button' : undefined"
    :tabindex="interactive ? 0 : undefined"
    :aria-current="selected ? 'true' : undefined"
    @click="interactive && $emit('activate', $event)"
    @keydown="onKeydown"
  >
    <div class="oli-icon">
      <slot name="icon" />
    </div>

    <div v-if="$slots.metric" class="oli-metric">
      <slot name="metric" />
    </div>

    <div class="oli-main">
      <div class="oli-name-row" :class="{ 'oli-name-row--center': nameCenter }">
        <span class="oli-name">{{ title }}</span>
        <span v-if="alternateLabel" class="oli-name-en">{{ alternateLabel }}</span>
        <span v-if="marker" class="oli-custom"  :title="markerLabel">{{ marker }}</span>
        <slot name="name-extras" />
      </div>
      <div v-if="$slots.subtitle || subtitle" class="oli-sub">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>

    <div class="oli-right">
      <slot name="trailing" />
      <svg v-if="showChevron" class="oli-chevron" viewBox="0 0 16 16" fill="none" width="14" height="14">
        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  alternateLabel: { type: String, default: '' },
  marker: { type: String, default: '' },
  markerLabel: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  nameCenter: { type: Boolean, default: false },
  showChevron: { type: Boolean, default: true },
  interactive: { type: Boolean, default: false },
  selected: { type: Boolean, default: false },
})
const emit = defineEmits(['activate'])
function onKeydown(event) {
  if (!props.interactive || event.target !== event.currentTarget || !['Enter', ' '].includes(event.key)) return
  event.preventDefault()
  emit('activate', event)
}
</script>

<style scoped>
.oli {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  min-height: 64px;
}

.oli-icon {
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.oli-metric {
  min-width: clamp(40px, 4.5vw, 52px);
  flex: 0 0 auto;
  padding-inline: clamp(0px, .5vw, 4px);
  display: grid;
  place-items: center;
  font-family: var(--font-ui);
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.oli-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.oli-name-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
}
.oli-name-row--center { align-items: center; }

.oli-name {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  color: var(--text-1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
}

.oli-name-en {
  font-size: 11px;
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
}

.oli-custom {
  color: var(--accent);
  font-size: 8px;
  flex-shrink: 0;
}

.oli-sub {
  font-size: 11px;
  color: var(--text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.oli-right {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.oli-chevron {
  color: var(--text-muted);
  flex-shrink: 0;
}
.oli--interactive { width: auto; min-height: 66px; padding: 0 12px 0 0; border: 1px solid var(--border); border-radius: 10px; background: var(--surface); overflow: hidden; cursor: pointer; transition: background .12s; }
.oli--interactive:hover { background: var(--surface-active); border-color: var(--border-strong); }
.oli--interactive:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.oli--selected { background: color-mix(in srgb, var(--accent) 20%, var(--surface-active)); border-color: var(--accent); }
</style>
