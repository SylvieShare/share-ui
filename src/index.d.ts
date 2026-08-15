import type { ComputedRef, DefineComponent, Ref } from 'vue'

export const BaseTile: DefineComponent<{
  color?: string | null
  strip?: boolean
  tint?: boolean
  framed?: boolean
  interactive?: boolean
}>

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
