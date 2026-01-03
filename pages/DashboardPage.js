const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;

    // Dummy dashboard locators
    this.dashboardTitle = page.locator('//h2[text()="Hi, PS/2020/021 - KAVEESH M.A.B.! 👋"]');
    this.userProfile    = page.locator('//span[@id="yui_3_18_1_1_1767436146954_35"]');
  }

  async verifyDashboardLoaded() {
    await expect(this.dashboardTitle).toBeVisible();
    await expect(this.userProfile).toBeVisible();
  }
}

module.exports = DashboardPage;
