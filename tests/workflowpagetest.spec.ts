import { test, expect } from '@playwright/test';
import Workflowpage from '../page_object/Workflowpage';


//varaible : Object
let workFlowPage: Workflowpage;

test.skip('test-Automation Playground', async ({ page }) => {
    //object =  new assignment
    //workFlowPage = new Workflowpage(page);
    //workFlowPage.navigate('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
    await page.pause();
    await workFlowPage.fillText(workFlowPage.fullName, "Alice B");
    await page.pause();
    await workFlowPage.fillText(workFlowPage.password, "Test123");
    await workFlowPage.fillText(workFlowPage.Comments, "testing");
    await workFlowPage.fillText(workFlowPage.email, "alice@gmail.com");
    //await workFlowPage.fillText(workFlowPage.age, "31");
    await page.pause();

    await workFlowPage.selectFemale();
    console.log("Female selected");
    await workFlowPage.checkplayWright();
    await page.pause();
    console.log("Playwright checked");
    page.locator('#country')
    await workFlowPage.selectCountry("USA");
    console.log("USA selected from dropdown");
    await page.pause();
    await workFlowPage.selectCountry("USA");
    //await workFlowPage.selectState("Texas");
    await workFlowPage.clicksubmit();
    console.log("completed");
    await workFlowPage.ascertions("Alice B", "alice@gmail.com", '214-876-8907', 'USA', 'TEXAS', 'Playwright')
}


)
test('Validating age and State Parameters', async ({ page }) => {
    //workFlowPage = new Workflowpage(page);
    //workFlowPage.navigate('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
    //await page.pause();
    await workFlowPage.fillText(workFlowPage.age, "31");
    await page.pause();
    //await workFlowPage.selectState("Texas");

})

test.beforeEach("Run this before each test", async ({ page }) => {
    workFlowPage = new Workflowpage(page);
    workFlowPage.navigate('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
    await page.pause();
})

test.afterEach("Run this after each test", async ({ page }) => {
    workFlowPage = new Workflowpage(page);
    await workFlowPage.clicksubmit();
    console.log("completed");
    await page.pause();
})

//test.describe