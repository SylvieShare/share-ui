const owners = new Set()

// Includes the movement threshold: navigation must not claim the same pointer.
export function claimSortableGesture() {
  const owner = Symbol('sortable-gesture')
  owners.add(owner)
  return () => owners.delete(owner)
}

export function isSortableGestureActive() {
  return owners.size > 0
}
