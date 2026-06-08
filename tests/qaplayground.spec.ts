import { test, expect } from '@playwright/test';
test('qaplayground', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank');
    await page.getByTestId('username-input').click();
    await page.getByTestId('username-input').fill('admin');
    //await page.pause();
    await page.getByTestId('password-input').click();
    await page.getByTestId('password-input').fill('admin123');
    //await page.pause();
    await page.getByTestId('login-button').click();
    //await page.pause();

    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
     //await page.getByTestId('logout-button').click();
     
           
//   const totalBalanceLocator = page.locator('[data-testid="total-balance"]');
//   await totalBalanceLocator.waitFor({ state: 'visible', timeout: 5000 });

//   const totalBalanceText = await totalBalanceLocator.innerText();
//   console.log("Total Balance" + totalBalanceText);

//await page.getByTestId('logout-button').click();

 await expect(page.locator('#total-balance')).toHaveText("$7,500.00",{timeout:3000});
 await page.getByTestId('logout-button').click();
}
)

 
