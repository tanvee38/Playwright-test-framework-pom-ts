import { test, expect } from '@playwright/test';

import { HomePage } from '../pageobjects/home.page';
import { AuAdvantagePage } from '../pageobjects/au-advantage.page';

test('has title', async ({ page }) => {
  await page.goto('https://www.athabascau.ca/');

  const homePage = new HomePage(page);

  const title = await homePage.getTitle(); 
  
  expect(title).toBe("We are Canada’s Open University");
});

test('Should navigate to au advantage page', async ({ page }) => {
  await page.goto('https://www.athabascau.ca/');

  const homePage = new HomePage(page);

  await homePage.clickGetStartedLink();

  const auAdvantagePage = new AuAdvantagePage(page);

  const title = await auAdvantagePage.getTitle();

  expect(title).toContain("The AU advantage");
});