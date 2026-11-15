import { expect, it } from 'vitest'
import { actionMenuWidthBounds } from '../src/lib/actionMenuSizing.js'

it('preserves default and expanded menu bounds without an opted-in content group', () => {
  expect(actionMenuWidthBounds({ availableWidth: 459 })).toEqual({ contentSized: false, minimumWidth: 200, maximumWidth: 280 })
  expect(actionMenuWidthBounds({ availableWidth: 459, expanded: true })).toEqual({ contentSized: false, minimumWidth: 360, maximumWidth: 360 })
})

it('fits opted-in groups to their intrinsic width up to the available viewport', () => {
  expect(actionMenuWidthBounds({ availableWidth: 459, contentSized: true })).toEqual({ contentSized: true, minimumWidth: 0, maximumWidth: 459 })
  expect(actionMenuWidthBounds({ availableWidth: 160, contentSized: true })).toEqual({ contentSized: true, minimumWidth: 0, maximumWidth: 160 })
})

it('keeps explicit widths authoritative and clamps every mode on narrow viewports', () => {
  expect(actionMenuWidthBounds({ requestedWidth: 340, availableWidth: 459, contentSized: true })).toEqual({ contentSized: false, minimumWidth: 340, maximumWidth: 340 })
  for (const options of [{}, { expanded: true }, { requestedWidth: 340, contentSized: true }]) {
    expect(actionMenuWidthBounds({ ...options, availableWidth: 160 })).toEqual({ contentSized: false, minimumWidth: 160, maximumWidth: 160 })
  }
})
