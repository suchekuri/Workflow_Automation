import { test, expect } from '@playwright/test';
import Workflowpage from '../page_object/Workflowpage';


//varaible : Object
let workFlowPage: Workflowpage;

test('test', async ({ page }) => {
  //object =  new assignment
  workFlowPage=new Workflowpage(page);
  await page.goto('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
  //await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await workFlowPage.fillText(workFlowPage.fullName, "Alice B");
  await page.pause();
  
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123');
  await page.pause();

  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('Testing the form');
  await page.pause();

  await page.getByPlaceholder('Age').click();
  await page.getByPlaceholder('Age').fill('31');
  await page.pause();

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('alice@gmail.com');
  await page.pause();
   
  await page.getByRole('textbox', { name: 'Website URL' }).click();
  await page.getByRole('textbox', { name: 'Website URL' }).fill('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
  await page.pause();

  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('214-876-8907');
  await page.pause();

  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByLabel('Playwright').check();
   await page.pause();
  await page.locator('select[name="experience"]').selectOption('Beginner');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#country').selectOption('USA');
  await page.locator('#state').selectOption('Texas');
  await page.locator('#city').selectOption('Dallas');
  await page.locator('input[name="dob"]').fill('2026-05-21');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  //add ascertions here
  await expect(page.locator('//tbody[@id="recordsBody"]/tr[2]/td[1]')).toHaveText('Alice B');
  console.log("Assertion passed — continuing test");
  await expect(page.locator('//tbody[@id="recordsBody"]/tr[2]/td[2]')).toHaveText('alice@gmail.com');
  await expect(page.locator('//tbody[@id="recordsBody"]/tr[2]/td[3]')).toHaveText('214-876-8907');
  await expect(page.locator('//tbody[@id="recordsBody"]/tr[2]/td[4]')).toHaveText('USA');
  await expect(page.locator('//tbody[@id="recordsBody"]/tr[2]/td[5]')).toHaveText('Texas');
  await expect(page.locator('//tbody[@id="recordsBody"]/tr[2]/td[7]')).toHaveText('Playwright');
  console.log("Assertion passed — Assertions completed");
  

});
