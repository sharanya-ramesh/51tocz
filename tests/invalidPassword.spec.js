import test, { expect } from '@playwright/test';
import {config} from './keys.json'

test.describe('Sign-in and Sign-out Flow', () => {
  test('should successfully sign in and sign out', async ({ page }) => {
    // Go to the site
        await page.goto(config.url);
    await expect(page).toHaveTitle(/51 to Carbon Zero/);
    console.log('Navigated to Sign-In page.');

    // Fill invalid email and valid password (simulate incorrect input)
    await page.locator('input[name="email"]').fill(config.username);
    await page.locator('input[name="password"]').fill(config.invalidpassword);
    console.log('Filled in thw wrong password');

    // Click on the Sign-In button
    await page.locator('button[type="submit"]').click();
    console.log('Trying to sign in with wrong Password');

    // Locate and check the error message
    const errorMessage = page.locator('.message-body'); 
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Invalid email or password. Please try again')
    console.log('As expected validated the error message-"Invalid email or password. Please try again"');
  });
});
