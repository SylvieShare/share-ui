import fs from 'node:fs'
import { describe, expect, it } from 'vitest'
import * as shareUi from '../src/index.js'
import {
  COMPONENT_GALLERY_ALIASES,
  COMPONENT_GALLERY_COMPONENTS,
} from '../src/lib/componentGalleryCatalog.js'

const gallerySource = fs.readFileSync(new URL('../src/gallery/ComponentGallery.vue', import.meta.url), 'utf8')
const galleryMarkers = [...gallerySource.matchAll(/data-share-gallery="([^"]+)"/g)]
  .flatMap(([, names]) => names.split(/\s+/))

function isVueComponent(value) {
  return Boolean(value && typeof value === 'object' && (
    value.__name || value.name || value.setup || value.render || value.template
  ))
}

describe('component gallery coverage', () => {
  it('registers every public Vue component', () => {
    const registered = new Set([
      ...COMPONENT_GALLERY_COMPONENTS,
      ...Object.keys(COMPONENT_GALLERY_ALIASES),
    ])
    const publicComponents = Object.entries(shareUi)
      .filter(([, value]) => isVueComponent(value))
      .map(([name]) => name)

    expect(publicComponents.filter(name => !registered.has(name))).toEqual([])
  })

  it('maps aliases to a canonical component', () => {
    for (const canonicalName of Object.values(COMPONENT_GALLERY_ALIASES)) {
      expect(COMPONENT_GALLERY_COMPONENTS).toContain(canonicalName)
    }
  })

  it('renders an example for every canonical component', () => {
    expect(COMPONENT_GALLERY_COMPONENTS.filter(name => !galleryMarkers.includes(name))).toEqual([])
  })
})
