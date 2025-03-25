import test, { expect } from '@playwright/test';
import {config} from './keys.json'

test.describe('Sign-in and Sign-out Flow', () => {
  test('should successfully sign in and sign out', async ({ page }) => {
    // Go to the site
    await page.goto(config.url);
    await expect(page).toHaveTitle(/51 to Carbon Zero/);
    console.log('Navigated to Sign-In page.');

    // Click on "Forgot Password" link
    const forgotPasswordLink = page.locator(' a.button.is-small.is-link'); 
    await forgotPasswordLink.click();
    console.log('Clicked on "Forgot Password" link.');

    // Verify navigation to the Forgot Password page
    await expect(page).toHaveURL(/.*forgot-password/);
    console.log('Navigated to Forgot Password page.');

    // Enter email and click on Reset Password
    await page.locator('input[name="email"]').fill(config.username);
    console.log(`entered an email address`);

    await page.locator('button.button.is-primary.is-fullwidth').click();
    console.log('Clicked "Reset Password" button.');

    // Verify confirmation message or any expected success feedback
    const successMessage = page.locator('text= Your password has been reset. Please check your email inbox'); 
    await expect(successMessage).toBeVisible();
    console.log('Password reset request was submitted successfully.');
  });
});