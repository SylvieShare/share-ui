import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import BasePopover from '../src/components/floating/BasePopover.vue'

const baseSource = readFileSync(fileURLToPath(new URL('../src/components/floating/BasePopover.vue', import.meta.url)), 'utf8')
const actionSource = readFileSync(fileURLToPath(new URL('../src/components/floating/ActionMenu.vue', import.meta.url)), 'utf8')

describe('BasePopover transitions', () => {
  it('owns the reusable action-menu transition preset', () => {
    expect(BasePopover.props.transitionPreset.default).toBe('none')
    expect(BasePopover.props.transitionPreset.validator('action-menu')).toBe(true)
    expect(BasePopover.props.transitionPreset.validator('unknown')).toBe(false)
    expect(baseSource).toContain("props.transitionPreset === 'action-menu' ? 'share-popover-action' : ''")
    expect(baseSource).toContain('.share-popover-action-enter-active')
    expect(baseSource).toContain('--share-popover-origin-x')
    expect(baseSource).toContain('@media (prefers-reduced-motion: reduce)')
  })

  it('lets ActionMenu consume the preset without owning duplicate transition CSS', () => {
    expect(actionSource).toContain('<Transition name="share-popover-action">')
    expect(actionSource).not.toContain('.ram-popover-enter-active')
  })
})
