import { describe, expect, it } from 'vitest'
import * as shareUi from '../src/index.js'

describe('public API', () => {
  it.each([
    'AddButton',
    'ActionMenu',
    'ActionMenuItem',
    'ActionMenuSubmenu',
    'AppModal',
    'AppModalFrame',
    'AppShell',
    'AppSidebar',
    'AppSlider',
    'CompactCheckbox',
    'BasePopover',
    'ColorPresetPicker',
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
    'RichContent',
    'RichTextEditor',
    'SectionLabel',
    'SidebarBrand',
    'SidebarGroup',
    'SidebarNavItem',
    'SidebarToggle',
    'SlidingTabs',
    'ToggleSwitch',
    'TextPromptDialog',
    'ValueSelect',
  ])('exports %s', name => {
    expect(shareUi[name]).toBeTruthy()
  })

  it.each(['restoreFocus', 'useFullscreenViewportHeight', 'useIsMobile', 'useMediaQuery', 'useSheetSubpages'])(
    'exports %s',
    name => expect(shareUi[name]).toBeTypeOf('function'),
  )

  it.each(['computeActionMenuPlacement', 'computeRowActionPlacement', 'isValidHexColor', 'randomPreset'])(
    'exports %s',
    name => expect(shareUi[name]).toBeTypeOf('function'),
  )

  it.each(['escapeHtml', 'plainTextToRichHtml', 'sanitizeRichHtml', 'sanitizeRichTextColor', 'sanitizeRichTextUrl'])(
    'exports %s',
    name => expect(shareUi[name]).toBeTypeOf('function'),
  )
})
