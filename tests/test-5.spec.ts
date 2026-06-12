import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qamatters.github.io/demoautomationWebSite/index.html');
  await page.getByRole('link', { name: 'Fields' }).click();
  await page.getByRole('link', { name: 'Text Field' }).click();
  await page.getByRole('link', { name: 'Workflows' }).click();
  await page.getByRole('link', { name: 'Specific Use Cases' }).click();
  await page.getByRole('link', { name: 'Text Content' }).click();
  await page.getByRole('link', { name: 'Dashboard Open Dashboard' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});