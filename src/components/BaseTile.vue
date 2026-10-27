<template>
  <div
    class="base-tile"
    :class="{ 'base-tile--outlined': outlined, 'base-tile--interactive': interactive, 'base-tile--tint': tint, 'base-tile--framed': framed, 'base-tile--glass': surface === 'glass' }"
    :style="{ '--tile-color': resolvedColor, '--tile-frame-width': `${Math.max(1, Math.min(4, Number(frameWidth) || 1))}px`, ...(surface === 'glass' ? { 'backdrop-filter': 'blur(14px)', '-webkit-backdrop-filter': 'blur(14px)' } : {}) }"
    @click="$emit('click', $event)"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Accent color for tint and frame.
  color: { type: String, default: null },
  surface: { type: String, default: 'solid', validator: value => ['solid', 'glass'].includes(value) },
  // Faint always-on background tint in the tile color (a light accent).
  tint: { type: Boolean, default: false },
  // Gradient fill + colored border in the tile color (e.g. the HP block).
  framed: { type: Boolean, default: false },
  outlined: { type: Boolean, default: true },
  frameWidth: { type: Number, default: 1 },
  // Pointer cursor + hover tint.
  interactive: { type: Boolean, default: false },
})

defineEmits(['click'])

const resolvedColor = computed(() => props.color || 'var(--accent)')
</script>

<style scoped>
.base-tile {
  --tile-surface: var(--surface);
  position: relative;
  background: var(--tile-surface);
  border: none;
  border-radius: var(--r-lg);
  box-shadow: none;
  box-sizing: border-box;
  transition: background 0.15s, box-shadow 0.15s;
}

.base-tile--outlined { box-shadow: inset 0 0 0 1px var(--border); }

.base-tile--glass {
  --tile-surface: color-mix(in srgb, var(--surface) 76%, transparent);
}

.base-tile--tint {
  background: color-mix(in srgb, var(--tile-color) 6%, var(--tile-surface));
}

.base-tile--interactive {
  cursor: pointer;
}

.base-tile--interactive:hover {
  background: color-mix(in srgb, var(--tile-color) 11%, var(--tile-surface));
}
.base-tile--interactive.base-tile--outlined:hover { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--tile-color) 28%, var(--border)); }

/* gradient + colored border (HP block look) */
.base-tile--framed {
  background: linear-gradient(135deg, var(--tile-surface) 50%, color-mix(in srgb, var(--tile-color) 6%, var(--tile-surface)));
  box-shadow: none;
  transition: background 0.3s ease;
}
.base-tile--framed::before {
  content: "";
  position: absolute;
  inset: 0;
  border: var(--tile-frame-width) solid color-mix(in srgb, var(--tile-color) 35%, var(--border));
  border-radius: inherit;
  pointer-events: none;
  transition: border-color 0.3s ease;
  z-index: 2;
}
.base-tile--framed.base-tile--interactive:hover {
  background: linear-gradient(135deg, var(--tile-surface) 50%, color-mix(in srgb, var(--tile-color) 8%, var(--tile-surface)));
  box-shadow: none;
}
.base-tile--framed.base-tile--interactive:hover::before {
  border-color: color-mix(in srgb, var(--tile-color) 55%, var(--border));
}

</style>
