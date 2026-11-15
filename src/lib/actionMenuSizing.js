export function hasContentSizedMenuContent(popover) {
  const content = [...popover.childNodes].filter(node => {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim().length > 0
    return node.nodeType === Node.ELEMENT_NODE && !node.hidden && getComputedStyle(node).display !== 'none'
  })
  return content.length > 0 && content.every(node =>
    node.nodeType === Node.ELEMENT_NODE && node.getAttribute('data-action-menu-size') === 'content')
}

export function actionMenuWidthBounds({ requestedWidth, expanded = false, contentSized = false, availableWidth }) {
  const fit = contentSized && requestedWidth == null
  return {
    contentSized: fit,
    minimumWidth: fit ? 0 : Math.min(requestedWidth ?? (expanded ? 360 : 200), availableWidth),
    maximumWidth: fit ? availableWidth : Math.min(requestedWidth ?? (expanded ? 360 : 280), availableWidth),
  }
}
