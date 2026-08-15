const floatingStack = []

let activeActionMenu = null
let activeActionSubmenu = null

function removeFromStack(token) {
  const index = floatingStack.lastIndexOf(token)
  if (index >= 0) floatingStack.splice(index, 1)
}

export function registerFloating(token) {
  removeFromStack(token)
  floatingStack.push(token)
}

export function unregisterFloating(token) {
  removeFromStack(token)
}

export function isTopFloating(token) {
  return floatingStack.at(-1) === token
}

export function activateActionMenu(token, close) {
  if (activeActionMenu?.token !== token) activeActionMenu?.close()
  activeActionMenu = { token, close }
  registerFloating(token)
}

export function deactivateActionMenu(token) {
  if (activeActionMenu?.token === token) activeActionMenu = null
  unregisterFloating(token)
}

export function activateActionSubmenu(token, close) {
  if (activeActionSubmenu?.token !== token) activeActionSubmenu?.close()
  activeActionSubmenu = { token, close }
}

export function deactivateActionSubmenu(token) {
  if (activeActionSubmenu?.token === token) activeActionSubmenu = null
}

export function closeActiveActionSubmenu() {
  if (!activeActionSubmenu) return false
  const current = activeActionSubmenu
  activeActionSubmenu = null
  current.close()
  return true
}

export function resetFloatingState() {
  floatingStack.splice(0)
  activeActionMenu = null
  activeActionSubmenu = null
}
