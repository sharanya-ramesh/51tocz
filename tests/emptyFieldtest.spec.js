import test, { expect } from '@playwright/test';
import {config} from './keys.json'
test.describe('Sign-in and Sign-out Flow', () => {
  test('validation errors for empty email and password fields', async ({ page }) => {
    // Go to the site
    await page.goto(config.url);
    await expect(page).toHaveTitle(/51 to Carbon Zero/); // Verify correct page
    console.log('Navigated to Sign-In page.');
    // Leave email and password fields empty and click on Sign-In
    console.log('Attempting to submit with empty fields');
    const signInButton = page.locator('button[type="submit"]');
    await expect(signInButton).toBeDisabled(); 
  });
});