const ALLOWED_TAGS = new Set([
  'a', 'b', 'blockquote', 'br', 'code', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'li', 'ol', 'p', 'pre', 's', 'span', 'strike', 'strong', 'table', 'tbody', 'td',
  'th', 'thead', 'tr', 'u', 'ul',
])

const DROP_WITH_CONTENT = new Set(['embed', 'iframe', 'math', 'object', 'script', 'style', 'svg', 'template'])
const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])
const RICH_NODE_KIND_RE = /^[a-z][a-z0-9-]{0,39}$/
const MAX_RICH_NODE_PAYLOAD_LENGTH = 4096

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

export function encodeRichNodePayload(value) {
  try {
    const encoded = encodeURIComponent(JSON.stringify(value ?? {}))
    return encoded.length <= MAX_RICH_NODE_PAYLOAD_LENGTH ? encoded : ''
  } catch {
    return ''
  }
}

export function decodeRichNodePayload(value) {
  const source = String(value || '')
  if (!source || source.length > MAX_RICH_NODE_PAYLOAD_LENGTH) return null
  try {
    const decoded = JSON.parse(decodeURIComponent(source))
    return decoded && typeof decoded === 'object' && !Array.isArray(decoded) ? decoded : null
  } catch {
    try {
      const decoded = JSON.parse(source)
      return decoded && typeof decoded === 'object' && !Array.isArray(decoded) ? decoded : null
    } catch {
      return null
    }
  }
}

export function createRichNodeHtml(kind, payload, label) {
  const safeKind = String(kind || '').trim().toLowerCase()
  const safePayload = encodeRichNodePayload(payload)
  if (!RICH_NODE_KIND_RE.test(safeKind) || !safePayload) return ''
  return `<span data-rich-node="${safeKind}" data-rich-payload="${escapeHtml(safePayload)}" contenteditable="false">${escapeHtml(label || safeKind)}</span>`
}

export function readRichNode(element) {
  if (!element?.getAttribute) return null
  const kind = String(element.getAttribute('data-rich-node') || '').trim().toLowerCase()
  const payload = decodeRichNodePayload(element.getAttribute('data-rich-payload'))
  if (!RICH_NODE_KIND_RE.test(kind) || payload == null) return null
  return { kind, payload, label: element.textContent || kind }
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

  if (target.tagName === 'SPAN') {
    const node = readRichNode(source)
    if (node) {
      target.setAttribute('data-rich-node', node.kind)
      target.setAttribute('data-rich-payload', encodeRichNodePayload(node.payload))
      target.setAttribute('contenteditable', 'false')
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
  if (safeElement.hasAttribute('data-rich-node')) {
    safeElement.textContent = source.textContent || safeElement.getAttribute('data-rich-node')
  } else {
    for (const child of [...source.childNodes]) appendSanitized(child, safeElement, documentRef)
  }
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
