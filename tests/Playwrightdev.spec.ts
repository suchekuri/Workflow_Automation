import { test, expect } from '@playwright/test';
test('Playwrightdev', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page.locator('.getStarted_Sjon')).toHaveText("Get started",{timeout:1_00});

})
