import type { Component, ComputedRef, DefineComponent, Ref } from 'vue'

export const BaseTile: DefineComponent<{
  color?: string | null
  strip?: boolean
  tint?: boolean
  framed?: boolean
  interactive?: boolean
}>

export const AddButton: DefineComponent<{
  label?: string
  variant?: 'inline' | 'icon'
  block?: boolean
  disabled?: boolean
}>

export const RemoveButton: DefineComponent<{
  label: string
  variant?: 'inline' | 'boxed'
  disabled?: boolean
}>

export const ToggleSwitch: DefineComponent<{
  modelValue?: boolean
  label?: string
  ariaLabel?: string
  disabled?: boolean
}>

export interface ToggleOption<T = unknown> {
  value: T
  label: string
  disabled?: boolean
}

export const MultiToggle: DefineComponent<{
  options: ToggleOption[]
  modelValue?: unknown
  block?: boolean
  neutralValue?: unknown
  disabled?: boolean
  ariaLabel?: string
}>

export const CompactCheckbox: DefineComponent<{
  modelValue?: boolean
  disabled?: boolean
  label: string
}>

export const SectionLabel: DefineComponent<{
  title?: string
  border?: boolean
  align?: 'left' | 'center' | 'right' | ''
}>

export interface SegmentDonutChartSegment {
  key?: string | number
  label?: string
  value: number
  color?: string
}

export const SegmentDonutChart: DefineComponent<{
  segments?: SegmentDonutChartSegment[]
  totalLabel?: string
  ariaLabel?: string
  formatValue?: (value: number) => string
  size?: number
  strokeWidth?: number
  showLegend?: boolean
  showPercent?: boolean
}>

export interface SlidingTab<T = string | number> {
  key: T
  title: string
  icon?: string
  svg?: string
  disabled?: boolean
  id?: string
  panelId?: string
}

export const SlidingTabs: DefineComponent<{
  tabs: SlidingTab[]
  modelValue?: string | number | null
  ariaLabel?: string
}>

export const AppSlider: DefineComponent<{
  modelValue: number
  min?: number
  max?: number
  step?: number | string
  disabled?: boolean
  label?: string
}>

export const EditorPanel: DefineComponent<{ title?: string; compact?: boolean }>
export const EditorSection: DefineComponent<{ title?: string }>
export const EditorSectionTitle: DefineComponent<{ title?: string }>
export const EditorTotal: DefineComponent<{}>

export const BasePopover: DefineComponent<{
  open?: boolean
  anchor?: HTMLElement | Ref<HTMLElement | null> | null
  placement?: 'bottom-start' | 'bottom-end' | 'right-start'
  offset?: number
  minWidth?: number | string
  zIndex?: number
  transition?: string
  transitionPreset?: 'none' | 'action-menu'
  popoverClass?: string | string[] | Record<string, boolean>
  closeOnScroll?: boolean
  closeOnResize?: boolean
  related?: boolean
  role?: string
  ariaLabel?: string
  id?: string
}>

export const ActionMenu: DefineComponent<{
  title?: string
  disabled?: boolean
  block?: boolean
}>
export const RowActionMenu: typeof ActionMenu

export const ActionMenuItem: DefineComponent<{
  icon?: Component | null
  submenu?: boolean
  submenuOpen?: boolean
  tone?: 'default' | 'accent' | 'warning' | 'success' | 'info' | 'danger'
}>
export const RowActionItem: typeof ActionMenuItem

export const ActionMenuSubmenu: DefineComponent<{
  label?: string
  minWidth?: number
  disabled?: boolean
  mobileBreakpoint?: number
}>
export const RowActionSubmenu: typeof ActionMenuSubmenu

export interface ValueSelectOption<T = unknown> {
  value: T
  label?: string
  disabled?: boolean
  key?: string | number
}

export const ValueSelect: DefineComponent<{
  modelValue?: unknown
  options?: Array<ValueSelectOption | string | number>
  placeholder?: string
  searchable?: boolean
  searchThreshold?: number
  searchPlaceholder?: string
  searchAriaLabel?: string
  emptyLabel?: string
  ariaLabel?: string
  dropUp?: boolean
  disabled?: boolean
}>

export const ColorPresetPicker: DefineComponent<{
  modelValue?: string
  colors?: string[]
  columns?: number
  allowCustom?: boolean
  allowClear?: boolean
  clearValue?: unknown
  clearLabel?: string
  customLabel?: string
  ariaLabel?: string
  inline?: boolean
  placement?: 'bottom-start' | 'bottom-end' | 'right-start'
  zIndex?: number
}>

export const RichContent: DefineComponent<{
  html?: string
}>

export interface RichNode<T extends Record<string, unknown> = Record<string, unknown>> {
  kind: string
  payload: T
  label: string
}

export interface RichTextLabels {
  toolbar?: string
  bold?: string
  boldShort?: string
  italic?: string
  italicShort?: string
  underline?: string
  underlineShort?: string
  paragraph?: string
  normal?: string
  heading?: string
  color?: string
  colorShort?: string
  clearColor?: string
  link?: string
  linkText?: string
  linkTextPlaceholder?: string
  linkUrl?: string
  linkInvalid?: string
  saveLink?: string
  removeLink?: string
  cancel?: string
}

export const RichTextEditor: DefineComponent<{
  modelValue?: string
  editable?: boolean
  placeholder?: string
  ariaLabel?: string
  colors?: string[]
  maxHeadingLevel?: number
  labels?: RichTextLabels
}>

export const AccountMenu: DefineComponent<{
  label?: string
  avatarText?: string
  expanded?: boolean
  title?: string
  ariaLabel?: string
  disabled?: boolean
}>

export const AppShell: DefineComponent<{
  sidebarMode?: 'column' | 'fixed'
  sidebarVisible?: boolean
  mobileBreakpoint?: 640 | 768
  contentTag?: string
  railWidth?: number | string
  canvas?: boolean
}>

export const AppSidebar: DefineComponent<{
  modelValue?: boolean
  defaultExpanded?: boolean
  storageKey?: string
  position?: 'fixed' | 'sticky'
  mobileMode?: 'hide' | 'top'
  mobileBreakpoint?: 640 | 768
  ariaLabel?: string
  showToggle?: boolean
  expandLabel?: string
  collapseLabel?: string
}>

export const SidebarBrand: DefineComponent<{
  as?: string | Component
  icon?: Component | null
  label?: string
  ariaLabel?: string
}>

export const SidebarNavItem: DefineComponent<{
  as?: string | Component
  icon?: Component | null
  label?: string
  title?: string
  active?: boolean
}>

export const SidebarGroup: DefineComponent<{ label?: string }>
export const SidebarToggle: DefineComponent<{
  expanded?: boolean
  expandLabel?: string
  collapseLabel?: string
}>

export const AppModal: DefineComponent<{
  zIndex?: number
  wide?: boolean
  extraWide?: boolean
  fullscreen?: boolean
  showClose?: boolean
  showHandle?: boolean
  dismissible?: boolean
  flush?: boolean
  width?: number | string
  ariaLabel?: string
  closeLabel?: string
  escapeBlursInput?: boolean
}>

export const AppModalFrame: DefineComponent<{
  title?: string
  subtitle?: string | number
  wide?: boolean
  extraWide?: boolean
  fullscreen?: boolean
  padded?: boolean
  bodyScroll?: boolean
  dismissible?: boolean
  showClose?: boolean
  zIndex?: number
  width?: number | string
  closeLabel?: string
}>

export const ModalShell: DefineComponent<{
  open?: boolean
  width?: number | string
  zIndex?: number
  ariaLabel?: string
  dismissible?: boolean
  escapeBlursInput?: boolean
}>

export const ConfirmDialog: DefineComponent<{
  open?: boolean | null
  title: string
  message?: string
  confirmLabel?: string
  cancelLabel?: string
  confirmText?: string
  cancelText?: string
  loadingLabel?: string
  loading?: boolean
  variant?: 'danger' | 'warning' | 'success'
  confirmKind?: 'danger' | 'warning' | 'success' | ''
  zIndex?: number
}>

export const TextPromptDialog: DefineComponent<{
  open?: boolean | null
  title: string
  message?: string
  value?: string
  initial?: string
  label?: string
  placeholder?: string
  maxlength?: number
  confirmLabel?: string
  cancelLabel?: string
  confirmText?: string
  cancelText?: string
  loadingLabel?: string
  loading?: boolean
  zIndex?: number
}>
export const PromptDialog: typeof TextPromptDialog

export const MorphSheet: DefineComponent<{
  mode?: 'edit' | 'add'
  originRect?: ContainerRect | null
  originEl?: HTMLElement | null
  originRadius?: string
  width?: number
  showBack?: boolean
  nav?: UseSheetSubpagesResult | null
  frameColor?: string
  backgroundTarget?: string | HTMLElement
  blurBackground?: boolean
  zIndex?: number
  ariaLabel?: string
  showFoot?: boolean
  showClose?: boolean | null
  closeLabel?: string
}>

export function restoreFocus(element: { focus: (options?: FocusOptions) => void }): void

export const FormActionButtons: DefineComponent<{
  submitText?: string
  cancelText?: string
  loadingText?: string
  loading?: boolean
  canSubmit?: boolean
  disabled?: boolean
}>

export const FormField: DefineComponent<{
  label: string
  vertical?: boolean
  hint?: string
}>

export const FormNumberInput: DefineComponent<{
  value?: unknown
  min?: number
  max?: number
}>

export const FormSelect: DefineComponent<{
  value?: unknown
  autofocus?: boolean
}>

export const FormTextarea: DefineComponent<{
  value?: unknown
  placeholder?: string
  rows?: number
  maxlength?: number
}>

export const FormTextInput: DefineComponent<{
  value?: unknown
  type?: string
  placeholder?: string
  maxlength?: number
  autocomplete?: string
  mono?: boolean
  autofocus?: boolean
  invalid?: boolean
}>

export interface SortableGroup<T> {
  items: Ref<T[]>
  accepts?: (item: T, fromGroup: string, toGroup: string) => boolean
}

export interface SortableDrop<T> {
  item: T
  fromGroup: string
  fromIndex: number
  toGroup: string
  toIndex: number
}

export interface UseSortableConfig<T> {
  groups: Record<string, SortableGroup<T>>
  getKey: (item: T) => string | number
  onDrop?: (drop: SortableDrop<T>) => void
  canDropAt?: (drop: Omit<SortableDrop<T>, 'fromIndex'>) => boolean
}

export interface UseSortableResult<T> {
  dragging: Ref<boolean>
  sourceItem: Ref<T | null>
  sourceGroup: Ref<string | null>
  targetGroup: Ref<string | null>
  targetIndex: Ref<number>
  suppressNextClick: Ref<boolean>
  startDrag: (event: PointerEvent, item: T, groupName: string, index: number) => void
  shouldSuppressClick: () => boolean
  isSource: (item: T) => boolean
  displayItems: (groupName: string) => T[]
}

export function reorderByDrop<T>(array: T[], fromIndex: number, toIndex: number): T[]
export function useSortable<T>(config: UseSortableConfig<T>): UseSortableResult<T>

export interface ContainerRect {
  left: number
  top: number
  width: number
  height: number
}

export interface UseContainerMorphResult {
  EASE: string
  visible: Ref<boolean>
  morphing: Ref<boolean>
  playOpen: (
    element: HTMLElement | null,
    fromRect: ContainerRect | null,
    radii?: { fromRadius?: string; toRadius?: string },
  ) => void
  playClose: (
    element: HTMLElement | null,
    toRect: ContainerRect | null,
    radii?: { fromRadius?: string; toRadius?: string },
    done?: () => void,
  ) => void
}

export function useContainerMorph(options?: { open?: number; close?: number }): UseContainerMorphResult
export function useMediaQuery(query: string): Ref<boolean>
export function useIsMobile(maxWidth?: number): Ref<boolean>
export function useFullscreenViewportHeight(scale?: number): Ref<string>

export interface UseSheetSubpagesResult {
  view: Ref<string>
  pos: Ref<number>
  animating: Ref<boolean>
  detailStyle: ComputedRef<Record<string, string>>
  subStyle: ComputedRef<Record<string, string>>
  goSub: (view: string) => void
  enterSub: () => void
  backToDetail: () => void
  dragStart: (width: number) => void
  dragMove: (distance: number) => void
  dragEnd: (distance: number, velocity: number) => void
}

export function useSheetSubpages(): UseSheetSubpagesResult

export interface ActionMenuPlacementInput {
  triggerRect: Pick<DOMRect, 'left' | 'right' | 'top' | 'bottom'>
  popoverWidth: number
  popoverHeight: number
  viewportWidth: number
  viewportHeight: number
  viewportLeft?: number
  viewportTop?: number
  originX: number
  originY: number
  margin?: number
  gap?: number
}

export interface ActionMenuPlacement {
  left: number
  top: number
  maxHeight: number
  opensAbove: boolean
  originX: number
  originY: number
}

export const ACTION_MENU_MARGIN: number
export const ACTION_MENU_GAP: number
export const ROW_ACTION_MARGIN: number
export const ROW_ACTION_GAP: number
export function computeActionMenuPlacement(input: ActionMenuPlacementInput): ActionMenuPlacement
export const computeRowActionPlacement: typeof computeActionMenuPlacement

export const PRESET_COLORS: string[]
export function isValidHexColor(value: unknown): boolean
export function randomPreset(colors?: string[]): string
export function escapeHtml(value: unknown): string
export function plainTextToRichHtml(text: unknown): string
export function sanitizeRichTextUrl(value: unknown): string
export function sanitizeRichTextColor(value: unknown): string
export function sanitizeRichHtml(html: unknown): string
export function encodeRichNodePayload(value: unknown): string
export function decodeRichNodePayload(value: unknown): Record<string, unknown> | null
export function createRichNodeHtml(kind: string, payload: unknown, label?: string): string
export function readRichNode(element: Element | null | undefined): RichNode | null
