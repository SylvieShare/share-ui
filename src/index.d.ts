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
