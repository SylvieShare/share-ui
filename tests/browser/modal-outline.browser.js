import { test, expect } from '@playwright/test'

for (const width of [475, 1280]) test(`modal outlines remain opt-in configurable at ${width}`, async ({ page }) => {
  await page.setViewportSize({ width, height: 900 })
  await page.goto('/tests/browser/modal-outline.html')
  for (const kind of ['modal', 'frame']) for (const outlined of [true, false]) {
    await page.getByRole('button', { name: `${kind} ${outlined ? 'default' : 'borderless'}`, exact: true }).click()
    const dialog = page.getByRole('dialog', { name: 'Example', exact: true })
    await expect(dialog.getByText('Modal content')).toBeVisible()
    for (const side of ['top', 'right', 'bottom', 'left']) {
      await expect(dialog.locator('.am-card')).toHaveCSS(`border-${side}-width`, outlined ? '1px' : '0px')
    }
    if (kind === 'frame') await expect(dialog.locator('.aem-header')).toHaveCSS('border-bottom-width', '1px')
    await page.keyboard.press('Escape')
    await expect(dialog).toHaveCount(0)
  }
})
