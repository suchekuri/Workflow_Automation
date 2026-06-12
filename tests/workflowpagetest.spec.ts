//import { test, expect } from '@playwright/test';
import {test} from '../fixtures/loginfixture';
import Workflowpage from '../page_object/Workflowpage';

import Data from '../Utilities/Data.json';
 

//Define the test Data array

const userData = [
    { fullName: 'Alice Johnson', age: 28, email: 'alice@example.com', Password: 'Test123', Skills: 'Playwright', Gender: 'Female', Country: 'USA', State: 'Texas', Comments: 'Testing', iframeRadio: 'Yes', iframeCheck: 'Option1'},
    { fullName: 'Bob Johnson', age: 29, email: 'bob@example.com', Password: 'Test456', Skills: 'Playwright', Gender: 'Female', Country: 'USA', State: 'Texas', Comments: 'Testing Parameters', iframeRadio: 'Yes', iframeCheck: 'Option1'},
    { fullName: 'Charlie Johnson', age: 26, email: 'charlie@example.com', Password: 'Test789', Skills: 'Playwright', Gender: 'Female', Country: 'USA', State: 'Texas', Comments: 'Testing Parameter data', iframeRadio: 'Yes', iframeCheck: 'Option1'},
    { fullName: 'Donna Johnson', age: 25, email: 'donna@example.com', Password: 'Test567', Skills: 'Playwright', Gender: 'Female', Country: 'USA', State: 'Texas', Comments: 'Testing multiple Parameters', iframeRadio: 'Yes', iframeCheck: 'Option1'},
];


//varaible : Object
let workFlowPage: Workflowpage;

// data to create parameterized tests
userData.forEach(({ fullName, age, email, Password, Skills, Gender, Country, State, Comments, iframeRadio, iframeCheck }) => {
    test('test-Automation Playground ' + fullName, async ({ workflowPage, page }) => {
        //object =  new assignment
        //workFlowPage = new Workflowpage(page);
        //workFlowPage.navigate('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
        //await page.pause();
        await workflowPage.filltextfromparent(workflowPage.fullName, fullName);
        //await page.pause();
        await workflowPage.filltextfromparent(workflowPage.password, Password);
        await workflowPage.filltextfromparent(workflowPage.Comments, Comments);
        await workflowPage.filltextfromparent(workflowPage.email, email);
        //await workFlowPage.fillText(workFlowPage.age, "31");
        //await page.pause();
        await workflowPage.selectFemale();
        console.log("Female selected");
        await workflowPage.checkplayWright();
        //await page.pause();
        console.log("Playwright checked");
        page.locator('#country')
        await workflowPage.selectCountry("USA");
        console.log("USA selected from dropdown");
        //await page.pause();
        //await workFlowPage.selectState("Texas");
        //await page.pause();
        // await workflowPage.iframeRadiobutton();
        // //await page.pause();
        // await workflowPage.iframeCheckbox();
        // //await page.pause();
await page.locator('iframe').contentFrame().getByRole('radio').first().check();
//await page.pause();
await page.locator('iframe').contentFrame().getByRole('checkbox').first().check();
//await page.pause();
await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Enter text' }).click();
await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Enter text' }).fill('Hi');
//await page.pause();

        await workflowPage.clicksubmit();
        //await page.pause();
        console.log("completed");
        await workflowPage.ascertions(fullName, email, "", Country, State, Skills)
        //await workFlowPage.ascertions("Bob Johnson", "bob@example.com", '214-876-8907', 'USA', 'TEXAS', 'Playwright')
        //await workFlowPage.ascertions("Charlie Johnson", "charlie@example.com", '214-876-8907', 'USA', 'TEXAS', 'Playwright')
        //await workFlowPage.ascertions("Donna Johnson", "donna@example.com", '214-876-8907', 'USA', 'TEXAS', 'Playwright')
    }
    )
    })

test.skip('test-Automation Playground1', async ({ page }) => {
        //object =  new assignment
        //workFlowPage = new Workflowpage(page);
        //workFlowPage.navigate('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
       // await page.pause();
        await workFlowPage.fillText(workFlowPage.fullName, Data.Fullname);
        //await page.pause();
        await workFlowPage.fillText(workFlowPage.password, Data.Password);
        await workFlowPage.fillText(workFlowPage.Comments, Data.Comments);
        await workFlowPage.fillText(workFlowPage.email, Data.Email);
        //await workFlowPage.fillText(workFlowPage.age, "31");
        //await page.pause();
        await workFlowPage.selectFemale();
        console.log("Female selected");
        await workFlowPage.checkplayWright();
        //await page.pause();
        console.log("Playwright checked");
        page.locator('#country')
        await workFlowPage.selectCountry("USA");
        console.log("USA selected from dropdown");
        //await page.pause();
        await workFlowPage.selectCountry("USA");
        //await workFlowPage.selectState("Texas");
        await workFlowPage.clicksubmit();
        console.log("completed");
        await workFlowPage.ascertions("Alice B", "alice@gmail.com", '214-876-8907', 'USA', 'TEXAS', 'Playwright')
    }
    )
test('Validating age and State Parameters', async ({ workflowPage, page }) => {
        //workFlowPage = new Workflowpage(page);
        //workFlowPage.navigate('https://qamatters.github.io/demoautomationWebSite/WorkFlows/Forms/demo-form.html');
        //await page.pause();
        await workflowPage.fillText(workflowPage.age, "31");
        //await page.pause();
        //await workFlowPage.selectState("Texas");

    })

// test.beforeEach("Run this before each test", async ({ page }) => {
//         workFlowPage = new Workflowpage(page);
//         workFlowPage.navigate(process.env.URL);
//        // await page.pause();
//     })

// test.afterEach("Run this after each test", async ({ page }) => {
//         workFlowPage = new Workflowpage(page);
//         //await workFlowPage.clicksubmit();
//         console.log("completed");
//         //await page.pause();
//     })

//test.describe