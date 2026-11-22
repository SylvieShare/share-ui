import { expect, test } from '@playwright/test'

test.use({ hasTouch: true, viewport: { width: 390, height: 844 } })

test('touch release closes menu highlighting and real mouse motion restores hover', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/tests/browser/?action-motion')
  const root = page.locator('html')
  const trigger = page.getByRole('button', { name: 'Standard actions' })
  const idle = await trigger.evaluate(button => getComputedStyle(button).backgroundColor)

  await trigger.hover()
  await expect(root).not.toHaveAttribute('data-share-no-hover', '')
  const hovered = await trigger.evaluate(button => getComputedStyle(button).backgroundColor)
  expect(hovered).not.toBe(idle)

  await trigger.tap()
  await expect(root).toHaveAttribute('data-share-no-hover', '')
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await expect(trigger).toHaveCSS('background-color', hovered)

  await page.touchscreen.tap(5, 5)
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await expect(trigger).toHaveCSS('background-color', idle)

  await trigger.hover()
  await expect(root).not.toHaveAttribute('data-share-no-hover', '')
  await expect(trigger).toHaveCSS('background-color', hovered)
})

for (const reducedMotion of ['no-preference', 'reduce']) {
  test(`menus fade and scale from their first visible frame (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion })
    await page.goto('/tests/browser/?action-motion')
    await page.evaluate(() => {
      window.menuTransitions = []
      document.addEventListener('transitionrun', event => {
        const panel = event.target
        if (!panel.matches('[role="menu"], .ras-inline, .vs-drop') || getComputedStyle(panel).visibility !== 'visible') return
        const name = panel.getAttribute('aria-label') || 'Inline submenu'
        const animation = panel.getAnimations().find(animation => animation.transitionProperty === event.propertyName)
        const from = animation?.effect.getKeyframes()[0]?.[event.propertyName]
        if (event.propertyName === 'opacity') window.menuTransitions.push({ name, property: 'opacity', from: Number(from) })
        if (event.propertyName === 'transform' && from) {
          window.menuTransitions.push({ name, property: 'scale', from: Number(new DOMMatrix(from).a.toFixed(2)) })
        }
      })
    })
    const expectEnter = async name => {
      if (reducedMotion === 'reduce') return
      await expect.poll(() => page.evaluate(() => window.menuTransitions)).toEqual(expect.arrayContaining([
        { name, property: 'opacity', from: 0 },
        { name, property: 'scale', from: 0.88 },
      ]))
    }

    const mountedTrigger = page.getByRole('button', { name: 'Open mounted actions' })
    await mountedTrigger.tap()
    const mounted = page.getByRole('menu', { name: 'Mounted actions' })
    await expect(mounted).toBeVisible()
    await expectEnter('Mounted actions')
    await page.keyboard.press('Escape')
    await expect(mounted).toHaveCount(0)

    const standardTrigger = page.getByRole('button', { name: 'Standard actions' })
    await standardTrigger.tap()
    const standard = page.getByRole('menu', { name: 'Standard actions' })
    await expect(standard).toBeVisible()
    await expectEnter('Standard actions')
    await standard.getByRole('button', { name: 'More actions' }).tap()
    await expect(standard.getByRole('button', { name: 'Nested action' })).toBeVisible()
    await expectEnter('Inline submenu')
    await page.keyboard.press('Escape')
    await expect(standard.getByRole('button', { name: 'Nested action' })).toHaveCount(0)
    await expect(standardTrigger).toHaveCSS('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)')
    await expect(standard.getByRole('menuitem')).toHaveCSS('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)')
    await page.keyboard.press('Escape')
    await expect(standard).toHaveCount(0)

    const select = page.getByRole('combobox', { name: 'Choose mode' })
    await select.tap()
    const listbox = page.getByRole('listbox', { name: 'Choose mode' })
    await expect(listbox).toBeVisible()
    await expectEnter('Choose mode')
    await listbox.getByRole('option', { name: 'Second' }).tap()
    await expect(listbox).toHaveCount(0)
    await expect(select).toBeFocused()

    if (reducedMotion === 'reduce') {
      expect(await page.evaluate(() => window.menuTransitions)).toEqual([])
    }
    await standardTrigger.focus()
    await page.keyboard.press('Shift+Tab')
    await expect(mountedTrigger).toBeFocused()
    await expect(mountedTrigger).toHaveCSS('outline-style', 'auto')
  })
}
