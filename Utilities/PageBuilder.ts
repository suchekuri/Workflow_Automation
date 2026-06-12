import { test, expect, Locator, Page } from '@playwright/test';
export default class PageBuilder {
    
    async filltextfromparent(locator: Locator, value: string) {
        await locator.fill(value);
    }
}