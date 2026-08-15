import { describe, expect, it } from 'vitest'
import * as shareUi from '../src/index.js'

describe('public API', () => {
  it.each([
    'AddButton',
    'AppModal',
    'AppModalFrame',
    'AppSlider',
    'CompactCheckbox',
    'EditorPanel',
    'EditorSection',
    'EditorSectionTitle',
    'EditorTotal',
    'MultiToggle',
    'ModalShell',
    'MorphSheet',
    'ConfirmDialog',
    'PromptDialog',
    'RemoveButton',
    'SectionLabel',
    'SlidingTabs',
    'ToggleSwitch',
    'TextPromptDialog',
  ])('exports %s', name => {
    expect(shareUi[name]).toBeTruthy()
  })

  it.each(['restoreFocus', 'useFullscreenViewportHeight', 'useIsMobile', 'useMediaQuery', 'useSheetSubpages'])(
    'exports %s',
    name => expect(shareUi[name]).toBeTypeOf('function'),
  )
})
