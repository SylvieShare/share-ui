import { expect, it } from 'vitest'
import { rewriteSortableReference } from '../src/internal/sortableGhost.js'

const ids = new Map([['clip:v-1', 'ghost-clip'], ['glow', 'ghost-glow']])

it('keeps SVG paint, clipping and filter fragments local to the cloned definitions', () => {
  expect(rewriteSortableReference('url(#clip:v-1)', 'clip-path', ids)).toBe('url(#ghost-clip)')
  expect(rewriteSortableReference('filter:url( "#glow" ); clip-path: url(\'#clip:v-1\')', 'style', ids))
    .toBe('filter:url("#ghost-glow"); clip-path: url(\'#ghost-clip\')')
  expect(rewriteSortableReference('#clip:v-1', 'href', ids)).toBe('#ghost-clip')
  expect(rewriteSortableReference('#glow', 'xlink:href', ids)).toBe('#ghost-glow')
})

it('preserves external resources and references outside the cloned subtree', () => {
  expect(rewriteSortableReference('url(/sprites.svg#glow)', 'fill', ids)).toBe('url(/sprites.svg#glow)')
  expect(rewriteSortableReference('url(#external)', 'filter', ids)).toBe('url(#external)')
  expect(rewriteSortableReference('/other#glow', 'href', ids)).toBe('/other#glow')
})

it('remaps local ID lists without breaking references to external labels', () => {
  expect(rewriteSortableReference('clip:v-1 external glow', 'aria-labelledby', ids)).toBe('ghost-clip external ghost-glow')
  expect(rewriteSortableReference('glow', 'for', ids)).toBe('ghost-glow')
  expect(rewriteSortableReference('glow', 'data-value', ids)).toBe('glow')
})
