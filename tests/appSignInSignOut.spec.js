import test, { expect } from '@playwright/test';
import { config } from './keys.json'
test.describe('Sign-in and Sign-out Flow', () => {
  test('should successfully sign in and sign out', async ({ page }) => {
    // Go to the site
    await page.goto(config.url);
    // Click and navigate to login page
    await expect(page).toHaveTitle(/51 to Carbon Zero/); // Verify correct page
    console.log('Navigated to the site successfully.');
    // Sign In Process
    console.log('Attempting to sign in...');
    await page.locator('input[name="email"]').fill(config.username);
    await page.locator('input[name="password"]').fill(config.password);
    await page.locator('button[type="submit"]').click();
    // Wait for navigation after sign-in and check for user dashboard
    await page.waitForURL(config.url + "#/dashboard");
    const dashboardHeader = page.locator('.has-background-success');
    await expect(dashboardHeader).toContainText('Configure');
    console.log('Sign-in successful.');
    // Sign Out Process (click user profile and then log out)
    await page.locator('#user-nav').click();
    let signOutselector = '#user-menu .dropdown-content a.dropdown-item:has(> i.fas.fa-sign-out-alt.pr-2)';
    await page.locator(signOutselector).click();
    console.log('Sign-Out Initiated');
    // Verify Sign Out
    await page.waitForURL(config.url + '#/sign-in'); // Expect to be redirected to the home page
    console.log('Sign-out successful. Test completed.');
  });
});
