import type { ComputedRef, DefineComponent, Ref } from 'vue'

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
