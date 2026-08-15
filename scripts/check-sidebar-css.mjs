import { readFile } from 'node:fs/promises'

const css = await readFile(new URL('../dist/share-ui.css', import.meta.url), 'utf8')

const requiredSelectors = [
  '.share-app-sidebar--expanded .share-sidebar-group',
  '.share-app-sidebar--mobile-top .share-sidebar-brand',
  '.share-app-sidebar--mobile-top .share-sidebar-group',
  '.share-app-sidebar--mobile-top .share-sidebar-link',
]

const missingSelectors = requiredSelectors.filter(selector => !css.includes(selector))
if (missingSelectors.length > 0) {
  console.error(`Sidebar CSS is missing contextual selectors: ${missingSelectors.join(', ')}`)
  process.exit(1)
}

const brokenRules = [
  /\.share-app-sidebar--expanded\s*\{[^}]*max-height:/,
  /\.share-app-sidebar--mobile-top\s*\{[^}]*(?:display:\s*none|flex:\s*0\s+0\s+42px|min-width:\s*42px)/,
]

if (brokenRules.some(pattern => pattern.test(css))) {
  console.error('Sidebar child styles leaked onto the AppSidebar root')
  process.exit(1)
}

console.log('Sidebar CSS contract check passed.')
