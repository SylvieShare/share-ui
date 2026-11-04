import { expect, test } from '@playwright/test'

test.use({ hasTouch: true, viewport: { width: 390, height: 844 } })

for (const reducedMotion of ['no-preference', 'reduce']) {
  test(`action menus animate from their first visible frame (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion })
    await page.goto('/tests/browser/?action-motion')
    await page.evaluate(() => {
      window.menuTransitions = []
      document.addEventListener('transitionrun', event => {
        if (event.propertyName === 'opacity' && event.target.matches('[role="menu"]')
          && getComputedStyle(event.target).visibility === 'visible') {
          window.menuTransitions.push(event.target.getAttribute('aria-label'))
        }
      })
    })

    const mountedTrigger = page.getByRole('button', { name: 'Open mounted actions' })
    await mountedTrigger.tap()
    const mounted = page.getByRole('menu', { name: 'Mounted actions' })
    await expect(mounted).toBeVisible()
    if (reducedMotion === 'no-preference') {
      await expect.poll(() => page.evaluate(() => window.menuTransitions)).toContain('Mounted actions')
    }
    await page.keyboard.press('Escape')
    await expect(mounted).toHaveCount(0)

    const standardTrigger = page.getByRole('button', { name: 'Standard actions' })
    await standardTrigger.tap()
    const standard = page.getByRole('menu', { name: 'Standard actions' })
    await expect(standard).toBeVisible()
    if (reducedMotion === 'no-preference') {
      await expect.poll(() => page.evaluate(() => window.menuTransitions)).toContain('Standard actions')
    }
    await expect(standardTrigger).toHaveCSS('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)')
    await expect(standard.getByRole('menuitem')).toHaveCSS('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)')
    await page.keyboard.press('Escape')
    await expect(standard).toHaveCount(0)
    if (reducedMotion === 'reduce') {
      expect(await page.evaluate(() => window.menuTransitions)).toEqual([])
    }
    await standardTrigger.focus()
    await page.keyboard.press('Shift+Tab')
    await expect(mountedTrigger).toBeFocused()
    await expect(mountedTrigger).toHaveCSS('outline-style', 'auto')
  })
}
