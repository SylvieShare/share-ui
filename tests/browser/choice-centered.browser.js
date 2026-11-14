import { test, expect } from '@playwright/test'
for (const width of [180,320]) test(`inline choices center their complete content at ${width}`,async({page})=>{
  await page.goto(`/tests/browser/choice-centered.html?width=${width}`)
  for(const card of await page.locator('[data-centered="true"]').all()){
    const geometry=await card.evaluate(node=>{
      const card=node.getBoundingClientRect()
      const content=[...node.querySelectorAll('.share-choice-card__icon,.share-choice-card__label,.share-choice-card__description')].map(child=>child.getBoundingClientRect())
      return {center:card.x+card.width/2,contentCenter:(Math.min(...content.map(r=>r.left))+Math.max(...content.map(r=>r.right)))/2,overflow:node.scrollWidth>node.clientWidth}
    })
    expect(Math.abs(geometry.center-geometry.contentCenter)).toBeLessThan(1)
    expect(geometry.overflow).toBe(false)
  }
  const plain=page.locator('[data-centered="false"]').first()
  const card=await plain.boundingBox(),icon=await plain.locator('.share-choice-card__icon').boundingBox()
  expect(icon.x).toBeLessThan(card.x+card.width/2-20)
})
