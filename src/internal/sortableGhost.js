let nextGhostId = 0

// A ghost leaves its theme ancestors when it is mounted under body. Resolve
// inherited variables before the source is hidden, including var() aliases.
export function copySortableContext(source, target) {
  const style = getComputedStyle(source)
  for (const name of style) {
    if (name.startsWith('--')) target.style.setProperty(name, style.getPropertyValue(name))
  }
  for (const name of ['color', 'font-family', 'font-size', 'font-style', 'font-weight', 'line-height', 'letter-spacing', 'text-align', 'text-transform', 'direction']) {
    target.style.setProperty(name, style.getPropertyValue(name))
  }
}

const ID_REFERENCES = new Set(['for', 'list', 'headers', 'aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-owns', 'aria-activedescendant', 'aria-flowto', 'aria-details', 'aria-errormessage'])

export function rewriteSortableReference(value, name, ids) {
  if ((name === 'href' || name === 'xlink:href') && value.startsWith('#')) {
    return ids.has(value.slice(1)) ? `#${ids.get(value.slice(1))}` : value
  }
  if (ID_REFERENCES.has(name)) return value.replace(/\S+/g, id => ids.get(id) || id)
  // SVG presentation attributes and inline CSS may quote their fragment URLs.
  return value.replace(/url\(\s*(['"]?)#([^\s'"\)]+)\1\s*\)/g,
    (url, quote, id) => ids.has(id) ? `url(${quote}#${ids.get(id)}${quote})` : url)
}

export function cloneSortableSource(source) {
  const clone = source.cloneNode(true)
  const nodes = [clone, ...clone.querySelectorAll('*')]
  const ids = new Map()
  for (const node of nodes) {
    if (!node.id) continue
    let id
    do { id = `share-sortable-ghost-${++nextGhostId}` } while (document.getElementById(id))
    ids.set(node.id, id)
    node.id = id
  }
  // Never let a cloned clipPath/filter resolve to the source's now hidden defs.
  for (const node of nodes) {
    for (const attribute of Array.from(node.attributes)) {
      if (attribute.name === 'id') continue
      const value = rewriteSortableReference(attribute.value, attribute.name, ids)
      if (value !== attribute.value) node.setAttributeNS(attribute.namespaceURI, attribute.name, value)
    }
  }
  copySortableContext(source, clone)
  return clone
}
