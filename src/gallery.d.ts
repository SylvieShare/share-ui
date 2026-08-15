import type { DefineComponent } from 'vue'

export const ComponentGallery: DefineComponent<{
  title?: string
  description?: string
}>

export const COMPONENT_GALLERY_COMPONENTS: readonly string[]
export const COMPONENT_GALLERY_ALIASES: Readonly<Record<string, string>>
