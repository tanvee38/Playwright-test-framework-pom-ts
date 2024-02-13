import { Page } from '@playwright/test';

export class AuAdvantagePage {
  readonly page: Page;

  constructor(page) {
    this.page = page;
  }

  /**
   * define or overwrite page methods
   */
  async getTitle() {
    const title = await this.page.$('.hero-content');

    return await title.textContent();
  }
}