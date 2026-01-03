const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const users = require('../test-data/users.json');

test.describe('LMS Login Tests', () => {

  test('Valid user should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await dashboardPage.verifyDashboardLoaded();
  });

  test('Invalid user should see error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await loginPage.verifyLoginError();
  });

});
