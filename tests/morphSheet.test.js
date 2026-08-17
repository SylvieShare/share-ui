import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const source = readFileSync(
  fileURLToPath(new URL('../src/components/overlay/MorphSheet.vue', import.meta.url)),
  'utf8',
)

describe('MorphSheet overlay layer', () => {
  it('keeps the existing default and allows consumers to raise nested morphs', () => {
    expect(source).toContain("zIndex: { type: Number, default: 1000 }")
    expect(source).toContain(":style=\"zIndex !== 1000 ? { zIndex } : null\"")
  })
})
