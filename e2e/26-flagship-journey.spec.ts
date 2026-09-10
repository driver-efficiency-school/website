import { test, expect } from '@playwright/test'

for (const width of [390, 768, 1440]) {
  test(`flagship journey works at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await page.getByText('Fleet enquiries and joining information', { exact: true }).click()
    await expect(page.locator('h1')).toHaveText('Understand your driving.Improve your next trip.')
    await page.getByRole('button', { name: /Put events in context/ }).click()
    await expect(page.locator('#drive-story-panel img')).toHaveAttribute('alt', /live drive map/)
    await page.getByRole('button', { name: /Compare before you leave/ }).click()
    await expect(page.locator('#drive-story-panel')).toContainText('not measured savings')
    const sources = await page
      .locator('main img[src^="screen-"]')
      .evaluateAll((images) => images.map((image) => image.getAttribute('src')))
    expect(new Set(sources).size).toBe(sources.length)
    await page.locator('#compatibility').scrollIntoViewIfNeeded()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await page.goto('/#fleet-guide')
    await expect(page.locator('h1')).toContainText('Turn work trips into')
    await expect(page.locator('main')).toContainText('keep members on duty by policy')
    await page.getByRole('link', { name: /Back to the personal app/ }).click()
    await expect(page.locator('h1')).toContainText('Understand your driving.')
  })
}

test('mobile navigation opens with a labelled button and reaches Fleet', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByText('Fleet enquiries and joining information', { exact: true }).click()
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.getByRole('dialog').getByRole('link', { name: 'For fleets' }).click()
  await expect(page.locator('h1')).toContainText('Turn work trips into')
  await expect(page.getByRole('dialog')).toHaveCount(0)
})
