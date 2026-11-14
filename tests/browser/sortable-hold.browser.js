import { test, expect } from '@playwright/test'
test.use({ hasTouch: true, viewport: { width: 390, height: 700 } })
const url = '/tests/browser/sortable-hold.html'
test('hold activation preserves taps, waits before claiming navigation and cleans a pending hold', async ({ page }) => {
  const now = new Date('2026-11-13T12:00:00Z')
  await page.clock.install({ time: now })
  await page.clock.pauseAt(new Date(now.getTime() + 1000))
  await page.goto(url)
  const one = page.getByRole('button', { name: 'one', exact: true })
  await one.click()
  expect(await page.evaluate(() => window.holdSort.clicks)).toEqual(['one'])
  const box = await one.boundingBox()
  await page.mouse.move(box.x + 40, box.y + 40); await page.mouse.down()
  expect(await page.evaluate(() => window.holdSort.active())).toBe(false)
  await page.clock.fastForward(349)
  await expect(page.locator('.sortable-ghost')).toHaveCount(0)
  await page.clock.fastForward(1)
  await expect(page.locator('.sortable-ghost')).toHaveCount(1)
  expect(await page.evaluate(() => window.holdSort.active())).toBe(true)
  await page.mouse.up()
  expect(await page.evaluate(() => window.holdSort.clicks)).toEqual(['one'])
  await page.mouse.down(); await page.keyboard.press('Escape'); await page.clock.fastForward(400)
  await expect(page.locator('.sortable-ghost')).toHaveCount(0)
  await page.mouse.up()
  await page.mouse.down(); await page.evaluate(() => window.holdSort.unmount()); await page.clock.fastForward(400)
  await expect(page.locator('.sortable-ghost')).toHaveCount(0)
  expect(await page.evaluate(() => window.holdSort.active())).toBe(false)
  await page.mouse.up()
})
test('grid targeting can return to its original slot before dropping', async ({ page }) => {
  await page.clock.install(); await page.goto(url)
  const first = await page.getByRole('button', { name: 'one', exact: true }).boundingBox()
  const second = await page.getByRole('button', { name: 'two', exact: true }).boundingBox()
  await page.mouse.move(first.x + 40, first.y + 40); await page.mouse.down(); await page.clock.fastForward(350)
  await page.mouse.move(second.x + 40, second.y + 40)
  await page.mouse.move(first.x + 40, first.y + 40); await page.mouse.up()
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(['one', 'two', 'three'])
  await page.mouse.down(); await page.clock.fastForward(350)
  await page.mouse.move(second.x + 40, second.y + 40); await page.mouse.up()
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(['two', 'one', 'three'])
})
test('moving before the hold permits native touch scrolling and cancels activation', async ({ page }) => {
  await page.goto(url)
  const client = await page.context().newCDPSession(page)
  const box = await page.getByRole('button', { name: 'three', exact: true }).boundingBox()
  const point = { x: box.x + 40, y: box.y + 70, id: 1 }
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] })
  for (let step = 1; step <= 5; step++) await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ ...point, y: point.y - step * 20 }] })
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(20)
  await expect(page.locator('.sortable-ghost')).toHaveCount(0)
  expect(await page.evaluate(() => window.holdSort.active())).toBe(false)
})
test('a held touch drags horizontally without native scrolling or a trailing click', async ({ page }) => {
  await page.goto(url)
  const client = await page.context().newCDPSession(page)
  const first = await page.getByRole('button', { name: 'one', exact: true }).boundingBox()
  const second = await page.getByRole('button', { name: 'two', exact: true }).boundingBox()
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: first.x + 40, y: first.y + 40, id: 1 }] })
  await expect(page.locator('.sortable-ghost')).toHaveCount(1)
  await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: second.x + 40, y: second.y + 50, id: 1 }] })
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  await expect.poll(() => page.evaluate(() => window.holdSort.keys())).toEqual(['two', 'one', 'three'])
  expect(await page.evaluate(() => scrollY)).toBe(0)
  expect(await page.evaluate(() => window.holdSort.clicks)).toEqual([])
})

for (const hold of [400, 900]) test(`a phone touch held for ${hold}ms reorders vertically with a hidden source`, async ({ page }, testInfo) => {
  await page.goto(`${url}?visual`)
  await page.addStyleTag({ content: '[data-sortable-container] { grid-template-columns: 1fr !important; touch-action: pan-y; }' })
  await page.evaluate(() => {
    window.sortEvents = []
    for (const type of ['pointerdown', 'pointermove', 'pointercancel', 'pointerup', 'touchstart', 'touchmove', 'touchend', 'contextmenu']) {
      document.addEventListener(type, event => window.sortEvents.push({ type, cancelable: event.cancelable, prevented: event.defaultPrevented, dragging: window.holdSort.dragging(), target: window.holdSort.target() }))
    }
  })
  const client = await page.context().newCDPSession(page)
  const first = await page.locator('[data-sortable-key="one"] span').boundingBox()
  const second = await page.locator('[data-sortable-key="two"] span').boundingBox()
  const point = { x: first.x + 4, y: first.y + 4, id: 1 }
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] })
  await page.waitForTimeout(hold)
  await expect(page.locator('.sortable-ghost')).toHaveCount(1)
  for (let step = 1; step <= 8; step++) await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ ...point, y: point.y + (second.y - first.y) * step / 8 }] })
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  await testInfo.attach('touch-events.json', { body: JSON.stringify(await page.evaluate(() => window.sortEvents), null, 2), contentType: 'application/json' })
  expect(await page.evaluate(() => scrollY)).toBe(0)
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(['two', 'one', 'three'])
  expect(await page.evaluate(() => window.holdSort.clicks)).toEqual([])
})

test('the ghost preserves clipped filtered SVG pixels, scoped variables and private IDs', async ({ page }, testInfo) => {
  await page.goto(`${url}?visual`)
  await page.addStyleTag({ content: '.sortable-ghost { opacity: 1 !important; box-shadow: none !important; }' })
  const one = page.locator('[data-sortable-container] [data-sortable-key="one"]')
  const before = await one.locator('svg').screenshot()
  const box = await one.locator('span').boundingBox()
  await page.mouse.move(box.x + 4, box.y + 4); await page.mouse.down()
  const ghost = page.locator('.sortable-ghost')
  await expect(ghost).toHaveCount(1)
  const after = await ghost.locator('svg').screenshot()
  await testInfo.attach('svg-before.png', { body: before, contentType: 'image/png' })
  await testInfo.attach('svg-ghost.png', { body: after, contentType: 'image/png' })
  const details = await ghost.evaluate(node => ({
    variable: getComputedStyle(node).getPropertyValue('--sort-color').trim(),
    alias: getComputedStyle(node).getPropertyValue('--sort-alias').trim(),
    inert: node.inert,
    duplicates: [node, ...node.querySelectorAll('[id]')].map(el => el.id).filter(id => document.querySelectorAll(`[id="${id}"]`).length !== 1),
    clip: node.querySelector('g').getAttribute('clip-path'),
    hrefLocal: node.contains(document.getElementById(node.querySelector('use').getAttribute('href').slice(1))),
    labelLocal: node.contains(document.getElementById(node.getAttribute('aria-labelledby'))),
    font: getComputedStyle(node).fontFamily,
  }))
  await testInfo.attach('ghost-details.json', { body: JSON.stringify(details, null, 2), contentType: 'application/json' })
  expect.soft(details.variable).toBe('rgb(36, 180, 120)')
  expect.soft(details.alias).toBe('rgb(36, 180, 120)')
  expect.soft(details.inert).toBe(true)
  expect.soft(details.duplicates).toEqual([])
  expect.soft(details.hrefLocal).toBe(true)
  expect.soft(details.labelLocal).toBe(true)
  expect.soft(details.font).toBe('monospace')
  await ghost.evaluate(node => node.focus())
  expect(await ghost.evaluate(node => node.contains(document.activeElement))).toBe(false)
  expect(after.equals(before), 'SVG pixels must match the visible source even while source defs are hidden').toBe(true)
  await page.mouse.up()
})

test('default immediate table-row dragging preserves context and list ordering', async ({ page }) => {
  await page.goto(`${url}?table&visual`)
  const row = page.locator('[data-sortable-container] #row-one')
  const start = await row.locator('span').boundingBox()
  const last = await page.locator('#row-three').boundingBox()
  const widths = await row.locator('td').evaluateAll(nodes => nodes.map(node => `${node.getBoundingClientRect().width}px`))
  await page.mouse.move(start.x + 4, start.y + 4); await page.mouse.down()
  await expect(page.locator('.sortable-ghost')).toHaveCount(0)
  await page.mouse.move(start.x + 12, start.y + 4)
  const ghost = page.locator('table.sortable-ghost')
  await expect(ghost).toHaveAttribute('aria-hidden', 'true')
  expect(await ghost.evaluate(node => node.inert)).toBe(true)
  expect(await ghost.locator('td').evaluateAll(nodes => nodes.map(node => node.style.width))).toEqual(widths)
  expect(await ghost.evaluate(node => getComputedStyle(node).getPropertyValue('--sort-alias').trim())).toBe('rgb(36, 180, 120)')
  expect(await ghost.locator('tr').getAttribute('id')).not.toBe('row-one')
  await page.mouse.move(last.x + 20, last.y + last.height - 4); await page.mouse.up()
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(['two', 'three', 'one'])
  expect(await page.evaluate(() => window.holdSort.active())).toBe(false)
  expect(await page.evaluate(() => window.holdSort.clicks)).toEqual([])
})

test('held touch blocks context menus and pointer cancellation cleans up without a drop', async ({ page }) => {
  await page.goto(`${url}?visual`)
  const client = await page.context().newCDPSession(page)
  const source = await page.locator('#label-one').boundingBox()
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: source.x + 4, y: source.y + 4, id: 1 }] })
  await expect(page.locator('.sortable-ghost')).toHaveCount(1)
  expect(await page.locator('#label-one').evaluate(node => node.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true })))).toBe(false)
  await client.send('Input.dispatchTouchEvent', { type: 'touchCancel', touchPoints: [] })
  await expect(page.locator('.sortable-ghost')).toHaveCount(0)
  expect(await page.evaluate(() => window.holdSort.active())).toBe(false)
  expect(await page.evaluate(() => window.holdSort.drops)).toEqual([])
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(['one', 'two', 'three'])
})

for (const input of ['mouse', 'touch']) test(`a held image handle keeps its sortable gesture with ${input}`, async ({ page }, testInfo) => {
  await page.goto(`${url}?visual&image`)
  await page.evaluate(() => {
    window.imageEvents = []
    for (const type of ['dragstart', 'pointercancel', 'pointermove', 'pointerup']) document.addEventListener(type, event => window.imageEvents.push({ type, target: event.target.tagName, ghost: !!document.querySelector('.sortable-ghost'), prevented: event.defaultPrevented }))
  })
  const source = await page.locator('#row-one img').boundingBox()
  const target = await page.locator('#row-two').boundingBox()
  const point = { x: source.x + 10, y: source.y + 10, id: 1 }
  const client = input === 'touch' ? await page.context().newCDPSession(page) : null
  if (client) await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] })
  else { await page.mouse.move(point.x, point.y); await page.mouse.down() }
  await expect(page.locator('.sortable-ghost')).toHaveCount(1)
  if (client) {
    for (let step = 1; step <= 10; step++) await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ ...point, x: point.x + (target.x + 30 - point.x) * step / 10, y: point.y + (target.y + 30 - point.y) * step / 10 }] })
    await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  } else { await page.mouse.move(target.x + 30, target.y + 30, { steps: 10 }); await page.mouse.up() }
  await testInfo.attach('image-events.json', { body: JSON.stringify(await page.evaluate(() => window.imageEvents), null, 2), contentType: 'application/json' })
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(['two', 'one', 'three'])
})

for (const mode of ['exact', 'nearest']) for (const gap of ['horizontal', 'vertical', 'last-row', 'short-row']) test(`${mode} grid touch release over ${gap} space`, async ({ page }) => {
  await page.goto(`${url}?${mode === 'nearest' ? 'nearest' : ''}`)
  if (gap === 'short-row') await page.addStyleTag({ content: '[data-sortable-container] { align-items:start; } #row-one {height:50px !important;}' })
  const one = await page.locator('#row-one').boundingBox()
  const two = await page.locator('#row-two').boundingBox()
  const three = await page.locator('#row-three').boundingBox()
  const point = { x: one.x + 20, y: one.y + 20, id: 1 }
  const target = gap === 'horizontal' ? { x: (one.x + one.width + two.x) / 2, y: one.y + 30 }
    : gap === 'vertical' ? { x: one.x + 30, y: (one.y + one.height + three.y) / 2 }
      : gap === 'last-row' ? { x: two.x + 8, y: three.y + three.height / 2 }
        : { x: one.x + one.width / 2, y: one.y + 100 }
  const client = await page.context().newCDPSession(page)
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] })
  await expect(page.locator('.sortable-ghost')).toHaveCount(1)
  await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ ...point, ...target }] })
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  const expected = mode === 'exact' ? ['one', 'two', 'three'] : gap === 'horizontal' ? ['two', 'one', 'three'] : ['two', 'three', 'one']
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(expected)
  expect(await page.evaluate(() => window.holdSort.drops)).toEqual(mode === 'exact' ? [] : [gap === 'horizontal' ? 1 : 2])
})

test('nearest grid returns to an exact source slot after crossing a gap', async ({ page }) => {
  await page.goto(`${url}?nearest`)
  const one = await page.locator('#row-one').boundingBox(), two = await page.locator('#row-two').boundingBox()
  await page.mouse.move(one.x + 20, one.y + 20); await page.mouse.down()
  await expect(page.locator('.sortable-ghost')).toHaveCount(1)
  await page.mouse.move((one.x + one.width + two.x) / 2, one.y + 30)
  expect(await page.evaluate(() => window.holdSort.target())).toBe(1)
  await page.mouse.move(one.x + 20, one.y + 20); await page.mouse.up()
  expect(await page.evaluate(() => window.holdSort.keys())).toEqual(['one', 'two', 'three'])
})
