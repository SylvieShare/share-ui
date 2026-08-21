import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const editorSource = readFileSync(
  fileURLToPath(new URL('../src/components/rich-text/RichTextEditor.vue', import.meta.url)),
  'utf8',
)

describe('RichTextEditor public toolbar contract', () => {
  it('allows a consumer toolbar to own the native link action', () => {
    expect(editorSource).toContain('showLinkButton: { type: Boolean, default: true }')
    expect(editorSource).toContain('v-if="showLinkButton"')
    expect(editorSource).toContain('openLinkEditor,')
    expect(editorSource).toContain('customLinkAnchor.value || linkTrigger.value')
  })

  it('does not add a gap below the toolbar', () => {
    const toolbarRule = editorSource.match(/\.desc-toolbar \{([^}]+)\}/)?.[1] || ''
    expect(toolbarRule).not.toContain('margin-bottom')
  })
})
