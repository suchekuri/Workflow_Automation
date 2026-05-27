import { test, expect } from '@playwright/test';
//Navigate to home page >> 
test.skip("Navigating to Automation Playground", async({page}) => {
    await page.goto("https://qamatters.github.io/demoautomationWebSite/index.html");
})

//Navigate to home page >> click on the Fields >> Click on Text Fields  >> Fill in the basic text field data
//a[href="fields.html"]

test("Verify the text field data ", async({page}) => {
    await page.goto("https://qamatters.github.io/demoautomationWebSite/index.html");
    await page.locator('a[href="fields.html"]').click();
    await page.locator('//a[@href="Fields/textfield.html"]').click();
    await page.waitForTimeout(5000);
   await page.locator('//input[@placeholder="Default input"]').fill("Automation");
   await expect(page.locator('//input[@placeholder="Default input"]').textContent("Automation");
await page.waitForTimeout(5000);
await page.locator('//input[@placeholder="Enter email"]').fill("abc@gmail.com");  
await page.waitForTimeout(5000);
await page.locator('//input[@placeholder="Medium"]').fill("Medium123");
await page.waitForTimeout(5000);
await page.locator('//input[@placeholder="Enter password"]').fill("Test123");
await page.waitForTimeout(5000);
await page.locator('//input[@type="date"]').fill('2026-05-20');
await page.locator('input[type="date"]').fill('2025-04-20');
await page.pause();
//await expect(page.locator('input[type="date"]')).toHaveText('2025-04-20');
await expect(page.locator('input[type="date"]')).toContainText('2025-04-20');



})
    
