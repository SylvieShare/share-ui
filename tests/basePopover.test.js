import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import ActionMenu from '../src/components/floating/ActionMenu.vue'
import BasePopover from '../src/components/floating/BasePopover.vue'

const baseSource = readFileSync(fileURLToPath(new URL('../src/components/floating/BasePopover.vue', import.meta.url)), 'utf8')
const actionSource = readFileSync(fileURLToPath(new URL('../src/components/floating/ActionMenu.vue', import.meta.url)), 'utf8')

describe('BasePopover transitions', () => {
  it('renders closed and open server markup without binding browser listeners', async () => {
    for (const open of [false, true]) {
      const context = {}
      await renderToString(createSSRApp({ render: () => h(BasePopover, { open }, () => h('span', 'Details')) }), context)
      expect(context.teleports?.body?.includes('Details') || false).toBe(open)
    }
  })
  it('owns the reusable action-menu transition preset', () => {
    expect(BasePopover.props.transitionPreset.default).toBe('none')
    expect(BasePopover.props.transitionPreset.validator('action-menu')).toBe(true)
    expect(BasePopover.props.transitionPreset.validator('unknown')).toBe(false)
    expect(baseSource).toContain("props.transitionPreset === 'action-menu' ? 'share-popover-action' : ''")
    expect(baseSource).toContain('.share-popover-action-enter-active')
    expect(baseSource).toContain('--share-popover-origin-x')
    expect(baseSource).toContain('@media (prefers-reduced-motion: reduce)')
  })

  it('can mark a teleported action menu as related to its parent popover', () => {
    expect(ActionMenu.props.related.default).toBe(false)
    expect(actionSource).toContain(':data-share-popover-related="related ?')
    expect(baseSource).toContain('[data-share-popover-related]')
  })

  it('allows an external action-menu anchor without changing the default trigger contract', () => {
    expect(ActionMenu.props.anchor.default).toBe(null)
    expect(ActionMenu.props.anchor.type).toBe(Object)
  })

  it('lets ActionMenu consume the preset without owning duplicate transition CSS', () => {
    expect(actionSource).toContain('<Transition name="share-popover-action"')
    expect(actionSource).not.toContain('.ram-popover-enter-active')
  })
})
