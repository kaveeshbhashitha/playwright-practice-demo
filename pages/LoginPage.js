const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    // Dummy LMS locators (XPath used as requested)
    this.usernameInput = page.locator('//input[@id="username"]');
    this.passwordInput = page.locator('//input[@id="password"]');
    this.loginButton   = page.locator('//button[@id="loginbtn"]');
    this.errorMessage  = page.locator('//div[@id="yui_3_18_1_1_1767435986229_12"]');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = LoginPage;
