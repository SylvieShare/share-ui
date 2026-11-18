import { describe, expect, it } from 'vitest'
import { contentFit } from '../src/lib/contentFit.js'

describe('bounded content fitting', () => {
  it('keeps content at its original size when it fits', () => {
    expect(contentFit(100, 200)).toEqual({ scale: 1, wrapping: false })
  })
  it('shrinks before allowing wrapping and never crosses the configured floor', () => {
    expect(contentFit(200, 150)).toEqual({ scale: .75, wrapping: false })
    expect(contentFit(200, 100)).toEqual({ scale: .5, wrapping: false })
    expect(contentFit(201, 100)).toEqual({ scale: .5, wrapping: true })
    expect(contentFit(800, 100)).toEqual({ scale: .5, wrapping: true })
  })
  it('accepts another minimum and handles hidden content without an invalid scale', () => {
    expect(contentFit(200, 100, .8)).toEqual({ scale: .8, wrapping: true })
    expect(contentFit(200, 0)).toEqual({ scale: 1, wrapping: false })
    expect(contentFit(0, 200)).toEqual({ scale: 1, wrapping: false })
    expect(contentFit(200, 100, NaN)).toEqual({ scale: .5, wrapping: false })
  })
})
