const ALLOWED_TAGS = new Set([
  'a', 'b', 'blockquote', 'br', 'code', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'li', 'ol', 'p', 'pre', 's', 'span', 'strike', 'strong', 'table', 'tbody', 'td',
  'th', 'thead', 'tr', 'u', 'ul',
])

const DROP_WITH_CONTENT = new Set(['embed', 'iframe', 'math', 'object', 'script', 'style', 'svg', 'template'])
const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function sanitizeRichTextUrl(value) {
  const candidate = String(value || '').trim()
  if (!candidate || /[\u0000-\u001f\u007f]/.test(candidate)) return ''
  if (/^(?:#|\?|\.?\.\/|\/)/.test(candidate)) return candidate
  try {
    const url = new URL(candidate, 'https://share-ui.invalid')
    return SAFE_PROTOCOLS.has(url.protocol) ? candidate : ''
  } catch {
    return ''
  }
}

export function sanitizeRichTextColor(value) {
  const candidate = String(value || '').trim()
  if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(candidate)) return candidate
  if (/^var\(--[a-z0-9-]+\)$/i.test(candidate)) return candidate

  const match = candidate.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i)
  if (!match) return ''
  const channels = match.slice(1, 4).map(Number)
  if (channels.some(channel => channel < 0 || channel > 255)) return ''
  const alpha = match[4] == null ? null : Number(match[4])
  if (alpha != null && (alpha < 0 || alpha > 1)) return ''
  return candidate
}

function copySafeAttributes(source, target) {
  const title = source.getAttribute('title')
  if (title) target.setAttribute('title', title)

  const direction = source.getAttribute('dir')
  if (['ltr', 'rtl', 'auto'].includes(direction)) target.setAttribute('dir', direction)

  const color = sanitizeRichTextColor(source.style?.getPropertyValue('color'))
  if (color) target.style.setProperty('color', color)

  if (target.tagName === 'A') {
    const href = sanitizeRichTextUrl(source.getAttribute('href'))
    if (href) target.setAttribute('href', href)
    const targetValue = source.getAttribute('target')
    if (targetValue === '_blank') {
      target.setAttribute('target', '_blank')
      target.setAttribute('rel', 'noopener noreferrer')
    }
  }

  if (target.tagName === 'TD' || target.tagName === 'TH') {
    for (const attribute of ['colspan', 'rowspan']) {
      const value = Number.parseInt(source.getAttribute(attribute), 10)
      if (value >= 1 && value <= 100) target.setAttribute(attribute, String(value))
    }
  }
}

function appendSanitized(source, target, documentRef) {
  if (source.nodeType === 3) {
    target.appendChild(documentRef.createTextNode(source.nodeValue || ''))
    return
  }
  if (source.nodeType !== 1) return

  const tag = source.tagName.toLowerCase()
  if (DROP_WITH_CONTENT.has(tag)) return

  if (!ALLOWED_TAGS.has(tag)) {
    for (const child of [...source.childNodes]) appendSanitized(child, target, documentRef)
    return
  }

  const safeElement = documentRef.createElement(tag)
  copySafeAttributes(source, safeElement)
  for (const child of [...source.childNodes]) appendSanitized(child, safeElement, documentRef)
  target.appendChild(safeElement)
}

export function sanitizeRichHtml(html) {
  const source = String(html || '')
  if (!source) return ''
  if (typeof DOMParser === 'undefined') return escapeHtml(source)

  const parsed = new DOMParser().parseFromString(source, 'text/html')
  const output = parsed.createElement('div')
  for (const child of [...parsed.body.childNodes]) appendSanitized(child, output, parsed)
  return output.innerHTML
}

export function plainTextToRichHtml(text) {
  return escapeHtml(text).replace(/\r\n?|\n/g, '<br>')
}
