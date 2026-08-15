<template>
  <div class="rc" v-html="rendered" />
</template>

<script setup>
import { computed } from 'vue'
import { sanitizeRichHtml } from '../../lib/richText.js'

const props = defineProps({
  html: { type: String, default: '' },
})

const rendered = computed(() => sanitizeRichHtml(props.html))
</script>

<style scoped>
.rc {
  overflow-wrap: anywhere;
  color: inherit;
  font: inherit;
  line-height: 1.45;
  word-break: normal;
}

.rc :deep(p) { margin: 0 0 6px; }
.rc :deep(p:last-child) { margin-bottom: 0; }
.rc :deep(h1) { margin: 0 0 8px; color: var(--text-1); font-size: 22px; font-weight: 700; line-height: 1.3; }
.rc :deep(h2) { margin: 0 0 8px; color: var(--text-1); font-size: 18px; font-weight: 700; line-height: 1.3; }
.rc :deep(h3) { margin: 0 0 6px; color: var(--text-2); font-size: 16px; font-weight: 600; line-height: 1.3; }
.rc :deep(h4) { margin: 0 0 6px; color: var(--text-2); font-size: 14px; font-weight: 600; }
.rc :deep(h5) { margin: 0 0 4px; color: var(--text-2); font-size: 13px; font-weight: 600; }
.rc :deep(h6) { margin: 0 0 4px; color: var(--text-muted); font-size: 12px; font-weight: 600; }
.rc :deep(ul), .rc :deep(ol) { margin: 6px 0 8px 20px; padding: 0; }
.rc :deep(li) { margin: 3px 0; }
.rc :deep(a) { color: var(--accent); text-decoration: underline; }
.rc :deep(blockquote) { margin: 8px 0; padding-left: 12px; border-left: 2px solid var(--accent); color: var(--text-2); }
.rc :deep(code) { padding: 1px 4px; border-radius: var(--r-xs); background: var(--surface-raised); font-family: ui-monospace, SFMono-Regular, Consolas, monospace; }
.rc :deep(pre) { margin: 8px 0; padding: 8px; overflow: auto; border-radius: var(--r-sm); background: var(--surface-raised); }
.rc :deep(pre code) { padding: 0; background: none; }
.rc :deep(table) { margin: 8px 0; border-collapse: collapse; font-size: 0.92em; }
.rc :deep(td), .rc :deep(th) { padding: 3px 8px; border: 1px solid var(--border); }
</style>
