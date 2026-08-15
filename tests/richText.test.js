import { describe, expect, it } from 'vitest'
import {
  escapeHtml,
  plainTextToRichHtml,
  sanitizeRichHtml,
  sanitizeRichTextColor,
  sanitizeRichTextUrl,
} from '../src/lib/richText.js'

describe('rich text safety helpers', () => {
  it('escapes markup and converts plain text line breaks', () => {
    expect(escapeHtml('<script>')).toBe('&lt;script&gt;')
    expect(plainTextToRichHtml('<b>one</b>\ntwo')).toBe('&lt;b&gt;one&lt;/b&gt;<br>two')
  })

  it('allows navigation URLs but rejects executable protocols', () => {
    expect(sanitizeRichTextUrl('https://example.com')).toBe('https://example.com')
    expect(sanitizeRichTextUrl('/handbook/item')).toBe('/handbook/item')
    expect(sanitizeRichTextUrl('javascript:alert(1)')).toBe('')
    expect(sanitizeRichTextUrl('data:text/html,hello')).toBe('')
  })

  it('allows editor color formats but rejects CSS payloads', () => {
    expect(sanitizeRichTextColor('#7c5ce2')).toBe('#7c5ce2')
    expect(sanitizeRichTextColor('rgb(124, 92, 226)')).toBe('rgb(124, 92, 226)')
    expect(sanitizeRichTextColor('var(--accent)')).toBe('var(--accent)')
    expect(sanitizeRichTextColor('url(example)')).toBe('')
    expect(sanitizeRichTextColor('rgb(999, 0, 0)')).toBe('')
  })

  it('has a safe escaped fallback when DOMParser is unavailable', () => {
    expect(sanitizeRichHtml('<img src=x onerror=alert(1)>')).toBe('&lt;img src=x onerror=alert(1)&gt;')
  })
})
