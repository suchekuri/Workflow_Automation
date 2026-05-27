import { test, expect, Locator, Page } from '@playwright/test';

export default class WorkFlowPage {


    //Text Fields
    fullName: Locator;
    password: Locator;
    email: Locator;
    age: Locator;
    Comments: Locator;
    //Radio button
    genderMale: Locator;
    genderFemale: Locator;

    //Checkbox
    SeleniumCheckbox: Locator;
    playWrightCheckbox: Locator;

    //dropdown
    countryDropdown: Locator;
    stateDropdown: Locator;

    submit: Locator;
    page: Page;


    constructor(page: Page) {
        // this means class level access    
        this.page = page;
        this.submit = this.page.getByRole('button', { name: 'Submit' });
        this.password = this.page.getByRole('textbox', { name: 'Password' });
        this.Comments = this.page.getByRole('textbox', { name: 'Comments' });
        this.fullName = this.page.getByRole("textbox", { name: 'Full Name' });
        this.email = this.page.getByRole("textbox", { name: 'email' });
        this.age = this.page.getByPlaceholder('Age');

        this.genderMale = page.getByLabel('Male');
        this.genderFemale = page.getByLabel('Female');

        this.SeleniumCheckbox = page.getByLabel('Selenium');
        this.playWrightCheckbox = page.getByLabel('PlayWright');

        this.countryDropdown = this.page.locator('#country');
        this.stateDropdown= this.page.locator('#state');
       


        // other locators
    }

    navigate(url: string) {
        this.page.goto(url);
    }
    async fillText(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async clicksubmit() {
        await this.submit.click();

    }
    //Checkbox
    async checkplayWright() {
        await this.playWrightCheckbox.check();
    }
    //Radio button 
    async selectFemale() {
        await this.genderFemale.check();
    }

    async selectCountry(selectCountry: string) {
        await this.countryDropdown.selectOption(selectCountry);
    }

    async selectState(selectState: string) {
        await this.stateDropdown.selectOption(selectState);
    }

    //Ascertions:

    async ascertions(fullName: string,email: string, phone: string, country: string, state: string, skills: string) {


        await expect(this.page.locator('//tbody[@id="recordsBody"]/tr[2]/td[1]')).toHaveText(fullName);
        console.log("Assertion passed — continuing test");
        await expect(this.page.locator('//tbody[@id="recordsBody"]/tr[2]/td[2]')).toHaveText(email);
        //await expect(this.page.locator('//tbody[@id="recordsBody"]/tr[2]/td[3]')).toHaveText(phone);
        await expect(this.page.locator('//tbody[@id="recordsBody"]/tr[2]/td[4]')).toHaveText(country);
        //await expect(this.page.locator('//tbody[@id="recordsBody"]/tr[2]/td[5]')).toHaveText(state);
        await expect(this.page.locator('//tbody[@id="recordsBody"]/tr[2]/td[7]')).toHaveText(skills);

    }



    /* async selectMale() {
     await this.genderMale.check();
   }
 
   async selectFemale() {
     await this.genderFemale.check();
   }
 
   async uncheckSelenium() {
     await this.SeleniumCheckbox.uncheck();
   }
 
   async checkplayWright() {
     await this.playWrightCheckbox.check();
   }
 
     async selectRadio(locator: Locator) {
     await locator.check();
     await this.selectRadio(page.locator('input[type="radio"][value="female"]'));
     }
     
   async checkCheckbox(locator: Locator) {
     await locator.check();
     await this.checkCheckbox(page.locator('#playWright'));
   }
 
     async selectCountry(value) {
     await this.countryDropdown.selectOption(value);
   }*/
}





// test
