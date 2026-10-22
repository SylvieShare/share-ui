import { afterEach, expect, it, vi } from 'vitest'
import { fitNavigationLabels } from '../src/lib/fitNavigationLabels.js'
afterEach(() => vi.unstubAllGlobals())
it('fits shaped text to the content width, leaves short labels alone and restores font size after growing', () => {
  let selected
  vi.stubGlobal('document', {createRange: () => ({
    selectNodeContents: label => {selected=label},
    getBoundingClientRect: () => ({width: selected.natural * (parseFloat(selected.style.fontSize) || 10) / 10}),
  })})
  vi.stubGlobal('getComputedStyle', node => node.style ? {fontSize:node.style.fontSize || '10px'} : {paddingLeft:'4px',paddingRight:'4px'})
  const long = {style:{fontSize:''}, natural:63.7}, short={style:{fontSize:''},natural:30}
  const button = {clientWidth:62,querySelector:()=>long}, small={clientWidth:62,querySelector:()=>short}
  fitNavigationLabels([button,small])
  const font = parseFloat(long.style.fontSize)
  expect(font).toBeLessThan(10)
  expect(long.natural * font / 10).toBeLessThanOrEqual(54)
  expect(long.natural * (font+.02) / 10).toBeGreaterThan(54)
  expect(short.style.fontSize).toBe('')
  button.clientWidth=90; fitNavigationLabels([button])
  expect(long.style.fontSize).toBe('')
  button.clientWidth=0; fitNavigationLabels([button])
  expect(long.style.fontSize).toBe('')
})
