import { expect, it } from 'vitest'
import { claimSortableGesture, isSortableGestureActive } from '../src/internal/sortableGesture.js'

it('retains ownership until every sortable releases its pointer, with idempotent cleanup', () => {
  expect(isSortableGestureActive()).toBe(false)
  const releaseFirst = claimSortableGesture(), releaseSecond = claimSortableGesture()
  try {
    expect(isSortableGestureActive()).toBe(true)
    releaseFirst()
    releaseFirst()
    expect(isSortableGestureActive()).toBe(true)
    releaseSecond()
    expect(isSortableGestureActive()).toBe(false)
  } finally { releaseFirst(); releaseSecond() }
})
