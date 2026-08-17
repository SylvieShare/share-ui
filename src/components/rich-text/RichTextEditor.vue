<template>
  <div class="input-desc">
    <template v-if="editable">
      <div class="desc-toolbar" role="toolbar" :aria-label="copy.toolbar">
        <button type="button" class="desc-btn" :title="copy.bold" @mousedown.prevent="format('bold')"><b>{{ copy.boldShort }}</b></button>
        <button type="button" class="desc-btn" :title="copy.italic" @mousedown.prevent="format('italic')"><i>{{ copy.italicShort }}</i></button>
        <button type="button" class="desc-btn" :title="copy.underline" @mousedown.prevent="format('underline')"><u>{{ copy.underlineShort }}</u></button>

        <div class="desc-sep" />

        <button
          ref="headingTrigger"
          type="button"
          class="desc-btn desc-btn-wide"
          :aria-expanded="headingOpen"
          aria-haspopup="menu"
          @mousedown.prevent="headingOpen = !headingOpen"
        >
          {{ copy.paragraph }} <span class="desc-caret" aria-hidden="true">▾</span>
        </button>
        <BasePopover
          :open="headingOpen"
          :anchor="headingTrigger"
          :min-width="160"
          :z-index="4500"
          role="menu"
          :aria-label="copy.paragraph"
          @update:open="headingOpen = $event"
        >
          <button type="button" class="desc-drop-item drop-p" role="menuitem" @mousedown.prevent="applyBlock('p')">{{ copy.normal }}</button>
          <button
            v-for="level in headingLevels"
            :key="level"
            type="button"
            class="desc-drop-item"
            :class="`drop-h${level}`"
            role="menuitem"
            @mousedown.prevent="applyBlock(`h${level}`)"
          >
            {{ headingLabel(level) }}
          </button>
        </BasePopover>

        <div class="desc-sep" />

        <ColorPresetPicker
          allow-clear
          :colors="colors"
          :model-value="''"
          :clear-label="copy.clearColor"
          :aria-label="copy.color"
          @update:model-value="applyColor"
        >
          <template #trigger="{ toggle }">
            <button type="button" class="desc-btn" :title="copy.color" @mousedown.prevent="headingOpen = false; toggle()">
              <span class="desc-color-icon">{{ copy.colorShort }}</span>
            </button>
          </template>
        </ColorPresetPicker>

        <div class="desc-sep" />

        <button
          ref="linkTrigger"
          type="button"
          class="desc-btn"
          :class="{ active: linkOpen }"
          :title="copy.link"
          :aria-label="copy.link"
          :aria-expanded="linkOpen"
          aria-haspopup="dialog"
          @mousedown.prevent="openLinkEditor()"
        >
          <span aria-hidden="true">↗</span>
        </button>

        <slot
          name="toolbar"
          :editor="editorApi"
          :insert-rich-node="insertRichNode"
          :update-rich-node="updateRichNode"
          :remove-rich-node="removeRichNode"
        />
      </div>

      <BasePopover
        :open="linkOpen"
        :anchor="linkAnchor"
        :min-width="260"
        :z-index="4500"
        role="dialog"
        :aria-label="copy.link"
        @update:open="closeLinkEditor"
      >
        <form class="desc-link-form" @submit.prevent="applyLink">
          <label class="desc-link-field">
            <span>{{ copy.linkText }}</span>
            <input v-model="linkForm.text" type="text" :placeholder="copy.linkTextPlaceholder" />
          </label>
          <label class="desc-link-field">
            <span>{{ copy.linkUrl }}</span>
            <input ref="linkUrlInput" v-model="linkForm.url" type="text" inputmode="url" placeholder="https://…" />
          </label>
          <span v-if="linkError" class="desc-link-error">{{ copy.linkInvalid }}</span>
          <div class="desc-link-actions">
            <button v-if="editingLink" type="button" class="desc-link-remove" @click="removeLink">{{ copy.removeLink }}</button>
            <button type="button" class="desc-link-cancel" @click="closeLinkEditor(false)">{{ copy.cancel }}</button>
            <button type="submit" class="desc-link-save">{{ copy.saveLink }}</button>
          </div>
        </form>
      </BasePopover>

      <div
        ref="editorEl"
        class="desc-editor"
        contenteditable="true"
        spellcheck="false"
        translate="no"
        autocorrect="off"
        :data-placeholder="placeholder"
        :aria-label="ariaLabel || placeholder"
        @input="onInput"
        @keydown="onKeydown"
        @keyup="rememberSelection"
        @mouseup="rememberSelection"
        @click="onEditorClick"
        @paste="onPaste"
        @drop="onDrop"
        @focus="$emit('focus', $event)"
        @blur="onBlur"
      />
    </template>

    <RichContent v-else-if="modelValue" class="desc-view" :html="modelValue">
      <template v-if="$slots.node" #node="scope"><slot name="node" v-bind="scope" /></template>
    </RichContent>
    <div v-else class="desc-empty">{{ placeholder }}</div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue'
import { PRESET_COLORS } from '../../lib/colorPresets.js'
import {
  createRichNodeHtml,
  plainTextToRichHtml,
  readRichNode,
  sanitizeRichHtml,
  sanitizeRichTextUrl,
} from '../../lib/richText.js'
import BasePopover from '../floating/BasePopover.vue'
import ColorPresetPicker from '../floating/ColorPresetPicker.vue'
import RichContent from './RichContent.vue'

const DEFAULT_LABELS = {
  toolbar: 'Text formatting',
  bold: 'Bold',
  boldShort: 'B',
  italic: 'Italic',
  italicShort: 'I',
  underline: 'Underline',
  underlineShort: 'U',
  paragraph: 'Paragraph',
  normal: 'Normal text',
  heading: 'Heading {level}',
  color: 'Text color',
  colorShort: 'A',
  clearColor: 'Clear color',
  link: 'Link',
  linkText: 'Text',
  linkTextPlaceholder: 'Link text',
  linkUrl: 'Address',
  linkInvalid: 'Enter a safe link address',
  saveLink: 'Apply',
  removeLink: 'Remove link',
  cancel: 'Cancel',
}

const props = defineProps({
  modelValue: { type: String, default: '' },
  editable: { type: Boolean, default: true },
  placeholder: { type: String, default: 'Text…' },
  ariaLabel: { type: String, default: '' },
  colors: { type: Array, default: () => PRESET_COLORS },
  maxHeadingLevel: {
    type: Number,
    default: 6,
    validator: value => value >= 1 && value <= 6,
  },
  labels: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'node-select'])

const copy = computed(() => ({ ...DEFAULT_LABELS, ...props.labels }))
const headingLevels = computed(() => Array.from({ length: props.maxHeadingLevel }, (_, index) => index + 1))
const headingOpen = ref(false)
const headingTrigger = ref(null)
const editorEl = ref(null)
const linkTrigger = ref(null)
const linkUrlInput = ref(null)
const linkOpen = ref(false)
const editingLink = ref(null)
const editingNode = ref(null)
const savedRange = ref(null)
const linkError = ref(false)
const linkForm = reactive({ text: '', url: '' })
const linkAnchor = computed(() => editingLink.value || linkTrigger.value)

function emptyEditorHtml(value) {
  const sanitized = sanitizeRichHtml(value)
  return sanitized || '<p><br></p>'
}

function syncEditor(value) {
  if (!props.editable || !editorEl.value) return
  if (document.activeElement === editorEl.value) return
  editorEl.value.innerHTML = emptyEditorHtml(value)
}

watch(() => props.modelValue, syncEditor)
watch(() => props.editable, value => {
  if (value) nextTick(() => syncEditor(props.modelValue))
})

onMounted(() => {
  syncEditor(props.modelValue)
  document.execCommand('defaultParagraphSeparator', false, 'p')
})

function rangeInsideEditor(range) {
  return Boolean(range && editorEl.value?.contains(range.commonAncestorContainer))
}

function rememberSelection() {
  const selection = window.getSelection()
  if (!selection?.rangeCount) return
  const range = selection.getRangeAt(0)
  if (rangeInsideEditor(range)) savedRange.value = range.cloneRange()
}

function restoreSelection() {
  editorEl.value?.focus()
  const selection = window.getSelection()
  if (!selection || !rangeInsideEditor(savedRange.value)) return false
  selection.removeAllRanges()
  selection.addRange(savedRange.value)
  return true
}

function selectedText() {
  if (!rangeInsideEditor(savedRange.value)) return ''
  return savedRange.value.toString().trim()
}

function insertRichNode(node) {
  const html = createRichNodeHtml(node?.kind, node?.payload, node?.label)
  if (!html || !editorEl.value) return null
  restoreSelection()
  document.execCommand('insertHTML', false, html)
  commitEditor()
  const elements = editorEl.value.querySelectorAll('[data-rich-node]')
  const element = elements[elements.length - 1] || null
  if (element) {
    editingNode.value = element
    placeCaretAfter(element)
  }
  return element
}

function resolveRichNodeElement(target) {
  if (target?.nodeType === Node.ELEMENT_NODE && target.matches?.('[data-rich-node]')) return target
  if (target?.element?.matches?.('[data-rich-node]')) return target.element
  return editingNode.value?.isConnected ? editingNode.value : null
}

function updateRichNode(target, nextNode) {
  const element = resolveRichNodeElement(target)
  const html = createRichNodeHtml(nextNode?.kind, nextNode?.payload, nextNode?.label)
  if (!element || !html) return null
  const template = document.createElement('template')
  template.innerHTML = html
  const replacement = template.content.firstElementChild
  element.replaceWith(replacement)
  editingNode.value = replacement
  commitEditor()
  return replacement
}

function removeRichNode(target) {
  const element = resolveRichNodeElement(target)
  if (!element) return false
  const next = element.nextSibling || element.parentNode
  element.remove()
  editingNode.value = null
  if (next?.nodeType === Node.ELEMENT_NODE) placeCaretAtStart(next)
  commitEditor()
  return true
}

function placeCaretAfter(element) {
  const range = document.createRange()
  const selection = window.getSelection()
  range.setStartAfter(element)
  range.collapse(true)
  selection.removeAllRanges()
  selection.addRange(range)
  savedRange.value = range.cloneRange()
}

function openLinkEditor(element = null) {
  rememberSelection()
  editingLink.value = element
  linkError.value = false
  linkForm.text = element?.textContent || selectedText()
  linkForm.url = element?.getAttribute?.('href') || ''
  linkOpen.value = true
  nextTick(() => linkUrlInput.value?.focus())
}

function closeLinkEditor(value = false) {
  if (value === true) return
  linkOpen.value = false
  editingLink.value = null
  linkError.value = false
}

function applyLink() {
  const url = sanitizeRichTextUrl(linkForm.url)
  if (!url) {
    linkError.value = true
    return
  }
  const text = linkForm.text.trim() || url
  if (editingLink.value?.isConnected) {
    editingLink.value.setAttribute('href', url)
    editingLink.value.textContent = text
  } else {
    restoreSelection()
    const selection = window.getSelection()
    if (selection?.rangeCount && !selection.getRangeAt(0).collapsed && text === selection.toString().trim()) {
      document.execCommand('createLink', false, url)
    } else {
      const link = document.createElement('a')
      link.href = url
      link.textContent = text
      const range = selection?.rangeCount ? selection.getRangeAt(0) : null
      if (range && rangeInsideEditor(range)) {
        range.deleteContents()
        range.insertNode(link)
        placeCaretAfter(link)
      }
    }
  }
  closeLinkEditor(false)
  commitEditor()
}

function removeLink() {
  const link = editingLink.value
  if (!link?.isConnected) return closeLinkEditor(false)
  link.replaceWith(...link.childNodes)
  closeLinkEditor(false)
  commitEditor()
}

function onEditorClick(event) {
  const link = event.target.closest?.('a')
  if (link && editorEl.value?.contains(link)) {
    event.preventDefault()
    openLinkEditor(link)
    return
  }
  const element = event.target.closest?.('[data-rich-node]')
  if (!element || !editorEl.value?.contains(element)) return
  event.preventDefault()
  editingNode.value = element
  emit('node-select', { element, node: readRichNode(element) })
}

const editorApi = {
  focus: () => editorEl.value?.focus(),
  rememberSelection,
  insertRichNode,
  updateRichNode,
  removeRichNode,
}

function headingLabel(level) {
  return copy.value.heading.replace('{level}', String(level))
}

function format(command) {
  editorEl.value?.focus()
  document.execCommand('styleWithCSS', false, false)
  document.execCommand(command, false, null)
  nextTick(commitEditor)
}

function applyBlock(tag) {
  editorEl.value?.focus()
  document.execCommand('formatBlock', false, tag)
  headingOpen.value = false
  nextTick(commitEditor)
}

function applyColor(color) {
  editorEl.value?.focus()
  document.execCommand('styleWithCSS', false, true)
  if (color) {
    document.execCommand('foreColor', false, color)
    commitEditor()
    return
  }

  document.execCommand('removeFormat', false, null)
  nextTick(() => {
    if (!editorEl.value) return
    editorEl.value.querySelectorAll('span').forEach(span => {
      span.style.removeProperty('font-family')
      if (!span.style.cssText.trim()) span.replaceWith(...span.childNodes)
    })
    commitEditor()
  })
}

function onInput() {
  if (!editorEl.value) return
  autoCreateList()
  for (const child of [...editorEl.value.children]) {
    if (child.tagName !== 'DIV') continue
    const paragraph = document.createElement('p')
    paragraph.innerHTML = child.innerHTML
    child.replaceWith(paragraph)
  }
  commitEditor()
}

function normalizedHtml() {
  if (!editorEl.value) return ''
  normalizeInlineTags(editorEl.value)
  const sanitized = sanitizeRichHtml(editorEl.value.innerHTML)
  return sanitized === '<p><br></p>' || sanitized === '<br>' ? '' : sanitized
}

function commitEditor() {
  emit('update:modelValue', normalizedHtml())
}

function normalizeInlineTags(root) {
  root.querySelectorAll('strong').forEach(element => renameElement(element, 'b'))
  root.querySelectorAll('i').forEach(element => renameElement(element, 'em'))
  root.querySelectorAll('span').forEach(span => {
    const weight = span.style.fontWeight
    const style = span.style.fontStyle
    const decoration = span.style.textDecorationLine || span.style.textDecoration
    let replacement = null
    if (weight === 'bold' || Number(weight) >= 600) {
      span.style.removeProperty('font-weight')
      replacement = 'b'
    } else if (style === 'italic') {
      span.style.removeProperty('font-style')
      replacement = 'em'
    } else if (String(decoration).includes('underline')) {
      span.style.removeProperty('text-decoration')
      span.style.removeProperty('text-decoration-line')
      replacement = 'u'
    }
    if (replacement) renameElement(span, replacement)
  })
}

function renameElement(element, tag) {
  const replacement = document.createElement(tag)
  for (const attribute of [...element.attributes]) {
    if (attribute.name !== 'style' || element.style.cssText.trim()) {
      replacement.setAttribute(attribute.name, attribute.value)
    }
  }
  replacement.append(...element.childNodes)
  element.replaceWith(replacement)
  return replacement
}

function currentTextBlock(node) {
  let current = node.nodeType === Node.TEXT_NODE ? node.parentNode : node
  while (current && current !== editorEl.value) {
    if (['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(current.tagName)) return current
    current = current.parentNode
  }
  return null
}

function placeCaretAtStart(element) {
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(element)
  range.collapse(true)
  selection.removeAllRanges()
  selection.addRange(range)
}

function autoCreateList() {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0 || !editorEl.value?.contains(selection.anchorNode)) return
  const block = currentTextBlock(selection.anchorNode)
  if (!block || block.tagName === 'LI') return
  const text = block.textContent || ''
  if (text !== '- ' && text !== ' - ') return
  replaceWithList(block)
}

function replaceWithList(block) {
  const item = document.createElement('li')
  item.innerHTML = '<br>'
  const list = document.createElement('ul')
  list.appendChild(item)
  block.replaceWith(list)
  placeCaretAtStart(item)
}

function tryCreateListFromDash() {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0 || !editorEl.value?.contains(selection.anchorNode)) return false
  const block = currentTextBlock(selection.anchorNode)
  if (!block || block.tagName === 'LI') return false
  const text = (block.textContent || '').replace(/\u00a0/g, ' ')
  if (text !== '-' && text !== ' -') return false
  replaceWithList(block)
  return true
}

function onKeydown(event) {
  if (event.key === ' ') {
    if (tryCreateListFromDash()) {
      event.preventDefault()
      commitEditor()
    }
    return
  }
  if (event.key !== 'Enter') return
  event.preventDefault()
  document.execCommand(event.shiftKey ? 'insertLineBreak' : 'insertParagraph')
  commitEditor()
}

function insertClipboardHtml(html) {
  editorEl.value?.focus()
  document.execCommand('insertHTML', false, html)
  commitEditor()
}

function onPaste(event) {
  event.preventDefault()
  const rich = event.clipboardData?.getData('text/html')
  const plain = event.clipboardData?.getData('text/plain') || ''
  insertClipboardHtml(rich ? sanitizeRichHtml(rich) : plainTextToRichHtml(plain))
}

function moveCaretToPoint(event) {
  const position = document.caretPositionFromPoint?.(event.clientX, event.clientY)
  const legacyRange = document.caretRangeFromPoint?.(event.clientX, event.clientY)
  const range = document.createRange()
  if (position) range.setStart(position.offsetNode, position.offset)
  else if (legacyRange) range.setStart(legacyRange.startContainer, legacyRange.startOffset)
  else return
  range.collapse(true)
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
}

function onDrop(event) {
  event.preventDefault()
  moveCaretToPoint(event)
  const rich = event.dataTransfer?.getData('text/html')
  const plain = event.dataTransfer?.getData('text/plain') || ''
  insertClipboardHtml(rich ? sanitizeRichHtml(rich) : plainTextToRichHtml(plain))
}

function onBlur(event) {
  commitEditor()
  emit('blur', event)
}

defineExpose({
  focus: () => editorEl.value?.focus(),
  commit: commitEditor,
  rememberSelection,
  insertRichNode,
  updateRichNode,
  removeRichNode,
})
</script>

<style scoped>
.input-desc { display: flex; flex-direction: column; }
.desc-toolbar { display: flex; align-items: center; gap: 2px; margin-bottom: 2px; flex-wrap: wrap; }

.desc-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-width: 26px;
  height: 26px;
  padding: 0 5px;
  background: none;
  border: none;
  border-radius: var(--r-sm);
  color: var(--text-muted);
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.12s, color 0.12s;
}

.desc-btn:hover, .desc-btn.active { background: var(--surface-raised); color: var(--text-2); }
.desc-btn-wide { padding: 0 7px; font-size: 12px; }
.desc-caret { font-size: 9px; opacity: 0.6; }
.desc-sep { width: 1px; height: 16px; margin: 0 3px; background: var(--border); flex-shrink: 0; }
.desc-color-icon { display: flex; flex-direction: column; align-items: center; gap: 2px; font-size: 13px; font-weight: 700; line-height: 1; }
.desc-color-icon::after { width: 14px; height: 3px; border-radius: 2px; background: linear-gradient(90deg, var(--danger), var(--warning), var(--success), var(--info)); content: ''; }

.desc-editor {
  min-width: 0;
  min-height: 80px;
  padding: 10px 12px;
  overflow-wrap: anywhere;
  -webkit-touch-callout: none;
  background: var(--surface-raised);
  border: none;
  border-radius: var(--r-md);
  color: var(--text-2);
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.desc-editor:focus { box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 35%, transparent); }
.desc-editor:empty::before { color: var(--text-muted); content: attr(data-placeholder); pointer-events: none; }
.desc-editor :deep(h1) { margin: 0 0 8px; color: var(--text-1); font-size: 22px; font-weight: 700; line-height: 1.3; }
.desc-editor :deep(h2) { margin: 0 0 8px; color: var(--text-1); font-size: 18px; font-weight: 700; line-height: 1.3; }
.desc-editor :deep(h3) { margin: 0 0 6px; color: var(--text-2); font-size: 16px; font-weight: 600; line-height: 1.3; }
.desc-editor :deep(h4) { margin: 0 0 6px; color: var(--text-2); font-size: 14px; font-weight: 600; }
.desc-editor :deep(h5) { margin: 0 0 4px; color: var(--text-2); font-size: 13px; font-weight: 600; }
.desc-editor :deep(h6) { margin: 0 0 4px; color: var(--text-muted); font-size: 12px; font-weight: 600; }
.desc-editor :deep(ul), .desc-editor :deep(ol) { margin: 6px 0 8px 20px; padding: 0; }
.desc-editor :deep(li) { margin: 3px 0; }
.desc-editor :deep(p) { margin: 0 0 6px; }
.desc-editor :deep(p:last-child) { margin-bottom: 0; }
.desc-editor :deep(a) { color: var(--accent); text-decoration: underline; cursor: pointer; }
.desc-editor :deep([data-rich-node]) {
  display: inline-flex;
  align-items: baseline;
  max-width: 100%;
  padding: 1px 5px;
  border: 1px solid color-mix(in srgb, var(--accent) 45%, var(--border));
  border-radius: var(--r-xs);
  background: color-mix(in srgb, var(--accent) 9%, var(--surface-raised));
  color: var(--text-1);
  cursor: pointer;
  user-select: all;
}
.desc-view { min-width: 0; padding: 2px 0; overflow-wrap: anywhere; color: var(--text-2); font-size: 14px; line-height: 1.42; }
.desc-empty { color: var(--text-muted); font-size: 13px; }
</style>

<style>
.desc-drop-item {
  display: block;
  width: 100%;
  padding: 6px 10px;
  background: none;
  border: none;
  border-radius: var(--r-sm);
  color: var(--text-2);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
}

.desc-drop-item:hover { background: var(--surface-raised); color: var(--text-1); }
.drop-p { font-size: 13px; }
.drop-h1 { color: var(--text-1); font-size: 20px; font-weight: 700; }
.drop-h2 { color: var(--text-1); font-size: 17px; font-weight: 700; }
.drop-h3 { color: var(--text-2); font-size: 15px; font-weight: 600; }
.drop-h4 { color: var(--text-2); font-size: 13px; font-weight: 600; }
.drop-h5 { color: var(--text-2); font-size: 12px; font-weight: 600; }
.drop-h6 { color: var(--text-muted); font-size: 11px; font-weight: 600; }

.desc-link-form { display: flex; flex-direction: column; gap: 10px; min-width: 260px; }
.desc-link-field { display: flex; flex-direction: column; gap: 4px; color: var(--text-muted); font-size: 11px; font-weight: 650; }
.desc-link-field input {
  width: 100%;
  box-sizing: border-box;
  padding: 7px 9px;
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  outline: none;
  background: var(--surface-raised);
  color: var(--text-1);
  font: inherit;
  font-size: 13px;
}
.desc-link-field input:focus { border-color: var(--accent); }
.desc-link-error { color: var(--danger); font-size: 11px; }
.desc-link-actions { display: flex; align-items: center; justify-content: flex-end; gap: 6px; }
.desc-link-actions button { padding: 5px 8px; border: 0; border-radius: var(--r-sm); font: inherit; font-size: 12px; cursor: pointer; }
.desc-link-remove { margin-right: auto; background: transparent; color: var(--danger); }
.desc-link-cancel { background: transparent; color: var(--text-2); }
.desc-link-save { background: var(--accent); color: var(--text-on-accent); font-weight: 700; }
</style>
