const noHover = 'data-share-no-hover'
const hoverGate = `:where(:not(:root[${noHover}], :root[${noHover}] *))`

export function isMousePointer(event) {
  return event.pointerType === 'mouse'
}

export function canShowHoverHint(event) {
  return event.type === 'focus'
    ? !!event.currentTarget?.matches(':focus-visible')
    : isMousePointer(event)
}

/** Adopt the input that actually reached this window, including on hybrid devices. */
export function installPointerInput(target = globalThis.window) {
  if (!target?.document) return () => {}

  const root = target.document.documentElement
  const previouslyDisabled = root.hasAttribute(noHover)
  root.toggleAttribute(noHover, !target.matchMedia?.('(hover: hover)').matches)

  function update(event) {
    if (!event.pointerType) return
    const disabled = !isMousePointer(event)
    if (root.hasAttribute(noHover) !== disabled) root.toggleAttribute(noHover, disabled)
  }

  const events = ['pointerdown', 'pointermove']
  for (const type of events) target.addEventListener(type, update, { capture: true, passive: true })
  return () => {
    for (const type of events) target.removeEventListener(type, update, true)
    root.toggleAttribute(noHover, previouslyDisabled)
  }
}

/** Build-only PostCSS plugin. Apply the gate on the hovered part of each selector. */
export function pointerHoverCss(selectorParser) {
  const gate = selectorParser().astSync(hoverGate).first.first
  const transform = selectorParser(selectors => {
    selectors.walkPseudos(pseudo => {
      if (pseudo.value !== ':hover') return
      let pseudoElement
      for (let node = pseudo.prev(); node && node.type !== 'combinator'; node = node.prev()) {
        if (selectorParser.isPseudoElement(node)) pseudoElement = node
      }
      const existingGate = pseudoElement ? pseudoElement.prev() : pseudo.next()
      if (existingGate?.value === ':where' && existingGate.toString().includes(noHover)) return
      if (pseudoElement) pseudo.parent.insertBefore(pseudoElement, gate.clone())
      else pseudo.parent.insertAfter(pseudo, gate.clone())
    })
  })
  return {
    postcssPlugin: 'share-ui-pointer-hover',
    Rule(rule) {
      if (!rule.selector.includes(':hover')) return
      rule.selector = transform.processSync(rule.selector)
    },
  }
}
