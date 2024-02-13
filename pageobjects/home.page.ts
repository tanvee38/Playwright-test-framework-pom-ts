import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page) {
    this.page = page;
  }

  /**
   * define or overwrite page methods
   */
  async getTitle() {
    const title = await this.page.$('.content-title');

    return await title.textContent();
  }

  async clickGetStartedLink() {
    const getStartedLink = await this.page.$('.hero-button-label');

    await Promise.all([
      this.page.waitForNavigation(),
      
      getStartedLink.click()
    ]);
  }

  async clickApplyLink() {
    const applyLink = await this.page.$('.btn.apply-ghost');

    await Promise.all([
      this.page.waitForNavigation(),
      
      applyLink.click()
    ]);
  }
}