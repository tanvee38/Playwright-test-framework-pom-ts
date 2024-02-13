import { Page } from '@playwright/test';

export class OrosHomePage {
  readonly page: Page;

  constructor(page) {
    this.page = page;
  }

  /**
   * define or overwrite page methods
   */
  async getTitle() {
    const title = await this.page.$('.banner-text');

    return await title.textContent();
  }
}