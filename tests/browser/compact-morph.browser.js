import { test,expect } from '@playwright/test'
test('a long compact title fits a narrow tile and retains its edit action',async({page})=>{
  await page.goto('/tests/browser/compact-morph.html')
  const tile=page.locator('.morph-tile')
  const bounds=await tile.boundingBox()
  for(const part of await tile.locator('.morph-tile-title,.morph-tile-pencil').all()){
    const inner=await part.boundingBox()
    expect(inner.x).toBeGreaterThanOrEqual(bounds.x)
    expect(inner.x+inner.width).toBeLessThanOrEqual(bounds.x+bounds.width)
  }
  const button=page.getByRole('button',{name:'Изменить: Очень длинное название',exact:true})
  await button.focus();await page.keyboard.press('Enter')
  await expect(page.getByTestId('count')).toHaveText('1')
  expect(await page.locator('.morph-tile-title').evaluate(el=>el.scrollWidth>el.clientWidth)).toBe(true)
})
