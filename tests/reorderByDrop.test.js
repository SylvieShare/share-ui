import { describe, expect, it } from 'vitest'
import { reorderByDrop, sortableItemElements, sortableTargetIndex } from '../src/composables/useSortable.js'

describe('reorderByDrop', () => {
  it('moves an item forward in source-removed coordinates', () => {
    expect(reorderByDrop(['a', 'b', 'c', 'd'], 1, 3)).toEqual(['a', 'c', 'd', 'b'])
  })

  it('moves an item backward', () => {
    expect(reorderByDrop(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b'])
  })

  it('clamps an oversized target to the end', () => {
    expect(reorderByDrop(['a', 'b', 'c'], 0, 99)).toEqual(['b', 'c', 'a'])
  })

  it('does not mutate the source array', () => {
    const source = ['a', 'b']
    const result = reorderByDrop(source, -1, 0)

    expect(result).toEqual(source)
    expect(result).not.toBe(source)
  })
})

describe('sortableItemElements', () => {
  it('finds sortable rows inside direct UI wrappers', () => {
    const container = {}
    const direct = item('direct', container)
    const wrapped = item('wrapped', container)
    const nestedContainer = {}
    const nested = item('nested', nestedContainer)
    container.querySelectorAll = () => [direct, wrapped, nested]

    expect(sortableItemElements(container).map(el => el.key)).toEqual(['direct', 'wrapped'])
  })

  it('excludes the dragged source row', () => {
    const container = {}
    const source = item('source', container)
    const target = item('target', container)
    container.querySelectorAll = () => [source, target]

    expect(sortableItemElements(container, 'source')).toEqual([target])
  })
})

function item(key, container) {
  return {
    key,
    closest: () => container,
    getAttribute: name => name === 'data-sortable-key' ? key : null,
  }
}


describe('sortable grid targets', () => {
  function grid() {
    const container = {}
    const cell = (index, left, top, owner = container) => ({
      closest: () => owner,
      getAttribute: () => String(index),
      getBoundingClientRect: () => ({ left, top, right: left + 60, bottom: top + 60 }),
    })
    container.querySelectorAll = () => [cell(0, 0, 0), cell(1, 68, 0), cell(4, 0, 68), cell(7, 68, 68, {})]
    return container
  }
  it('uses both coordinates and exact slots, including the source and empty cells', () => {
    expect(sortableTargetIndex(grid(), 20, 20, 'source', 'grid')).toBe(0)
    expect(sortableTargetIndex(grid(), 80, 20, 'source', 'grid')).toBe(1)
    expect(sortableTargetIndex(grid(), 20, 80, 'source', 'grid')).toBe(4)
  })
  it('rejects gutters, outside points and nested grid cells', () => {
    expect(sortableTargetIndex(grid(), 64, 20, null, 'grid')).toBe(-1)
    expect(sortableTargetIndex(grid(), -1, 20, null, 'grid')).toBe(-1)
    expect(sortableTargetIndex(grid(), 80, 80, null, 'grid')).toBe(-1)
  })
})
