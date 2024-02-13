import { test, expect } from '@playwright/test';

import { HomePage } from '../pageobjects/home.page';
import { OrosHomePage } from '../pageobjects/oros-home.page';

test('Should validate the title of oros page', async ({ page }) => {
  await page.goto('https://www.athabascau.ca/');

  const homePage = new HomePage(page);

  await homePage.clickApplyLink();

  const orosHomePage = new OrosHomePage(page);

  const title = await orosHomePage.getTitle();
  
  expect(title.trim()).toBe('Office of the Registrar');
});
