import { describe, expect, it } from 'vitest'
import * as shareUi from '../src/index.js'

describe('public API', () => {
  it.each([
    'AddButton',
    'AppSlider',
    'CompactCheckbox',
    'EditorPanel',
    'EditorSection',
    'EditorSectionTitle',
    'EditorTotal',
    'MultiToggle',
    'RemoveButton',
    'SectionLabel',
    'SlidingTabs',
    'ToggleSwitch',
  ])('exports %s', name => {
    expect(shareUi[name]).toBeTruthy()
  })

  it.each(['useFullscreenViewportHeight', 'useIsMobile', 'useMediaQuery'])(
    'exports %s',
    name => expect(shareUi[name]).toBeTypeOf('function'),
  )
})
