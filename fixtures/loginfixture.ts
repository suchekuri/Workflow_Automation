import { test as base, expect } from '@playwright/test';
import Workflowpage from '../page_object/Workflowpage';

// Declare the types of your fixtures.
type loginFixtures = {
  workflowPage: Workflowpage;
}

  export const test = base.extend<loginFixtures>({
  workflowPage: async ({ page }, use) => {
    // Set up the fixture.
    const workflowPage = new Workflowpage(page);
    await workflowPage.navigate(process.env.URL);
    

    // Use the fixture value in the test.
    await use(workflowPage);

    // Clean up the fixture.
    await workflowPage.page.close();
  }
  
  });

