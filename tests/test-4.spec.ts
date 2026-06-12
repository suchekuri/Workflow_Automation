import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qaplayground.com/bank');
  await page.getByTestId('username-input').click();
  await page.getByTestId('username-input').fill('admin');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('admin123');
  await page.getByTestId('login-button').click();
  await page.pause();
  await page.getByTestId('quick-new-transaction').click();
  await page.getByTestId('transaction-type-select').click();
  await page.getByLabel('Deposit').getByText('Deposit').click();
  await page.getByTestId('from-account-select').click();
  await page.getByLabel('Primary Savings - $').getByText('Primary Savings - $').click();
  await page.getByTestId('transaction-amount-input').click();
  await page.getByTestId('transaction-amount-input').fill('100');
  await page.getByTestId('transaction-description-input').click();
  await page.getByTestId('transaction-description-input').fill('testing');
  await page.getByTestId('submit-transaction-button').click();
  await page.pause();
  await page.getByTestId('nav-accounts').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.goto('https://qaplayground.com/bank/transactions/id_1781268331840_xvcxr43a0');
});