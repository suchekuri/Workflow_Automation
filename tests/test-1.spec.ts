import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('abc c');
  await expect(page.locator('//input[@placeholder="Full Name"]')).toHaveText('abc c');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tesing123');
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('tesing the form');
  await page.getByPlaceholder('Age').click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('tesing the form12');
  await page.getByPlaceholder('Age').click();
  await page.getByPlaceholder('Age').fill('1');
  await page.getByPlaceholder('Age').fill('12');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'Website URL' }).click();
  await page.getByRole('textbox', { name: 'Website URL' }).fill('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('214-456-0987');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.locator('select[name="experience"]').selectOption('Beginner');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#country').selectOption('USA');
});