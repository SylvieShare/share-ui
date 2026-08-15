import { describe, expect, it } from 'vitest'
import { reorderByDrop } from '../src/composables/useSortable.js'

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
