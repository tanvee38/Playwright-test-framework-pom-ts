import { Page } from '@playwright/test';

export class HowAuWorksPage {
  readonly page: Page;

  constructor(page) {
    this.page = page;
  }

  /**
   * define or overwrite page methods
   */
  async getTitle() {
    const title = await this.page.$('.hero-inner');

    return await title.textContent();
  }
}