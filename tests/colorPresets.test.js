import { describe, expect, it } from 'vitest'
import { isValidHexColor, PRESET_COLORS, randomPreset } from '../src/lib/colorPresets.js'

describe('color presets', () => {
  it('accepts safe hex color forms and rejects arbitrary CSS', () => {
    expect(isValidHexColor('#abc')).toBe(true)
    expect(isValidHexColor('#12abef')).toBe(true)
    expect(isValidHexColor('#12abefcc')).toBe(true)
    expect(isValidHexColor('red')).toBe(false)
    expect(isValidHexColor('url(example)')).toBe(false)
  })

  it('can pick from a consumer palette', () => {
    expect(['#111111']).toContain(randomPreset(['#111111']))
    expect(PRESET_COLORS.length).toBeGreaterThan(12)
  })
})
