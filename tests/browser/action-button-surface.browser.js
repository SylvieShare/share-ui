import {test,expect} from '@playwright/test'
for(const index of [0,1,2]) test(`secondary action ${index} preserves its surface and semantic color on hover`,async({page})=>{
  await page.goto('/tests/browser/action-button-surface.html')
  const button=page.getByRole('button',{name:`Action ${index}`,exact:true})
  const before=await button.evaluate(node=>({background:getComputedStyle(node).backgroundColor,color:getComputedStyle(node).color,parent:getComputedStyle(node.parentElement).backgroundColor}))
  expect(before.background).not.toBe(before.parent)
  await button.hover()
  await expect.poll(()=>button.evaluate(node=>getComputedStyle(node).color)).toBe(before.color)
  await expect.poll(()=>button.evaluate(node=>getComputedStyle(node).backgroundColor)).not.toBe(before.background)
})
