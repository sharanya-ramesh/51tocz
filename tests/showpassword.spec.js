import test, { expect } from '@playwright/test';
import {config} from './keys.json'

test.describe('Sign-in and Sign-out Flow', () => {


  test('should successfully sign in and sign out', async ({ page }) => {
    // Go to the site
        await page.goto(config.url);
    await expect(page).toHaveTitle(/51 to Carbon Zero/);
    console.log('Navigated to the Sign-In page.');

    // Locate the password input field and the "Show Password" button
    const passwordInput = page.locator('input[name="password"]');
    const showPasswordToggle = page.locator('i.fas.fa-eye'); // Adjust the selector if necessary

    // Enter a sample password in the password input field
    await page.locator('input[name="password"]').fill(config.password);
    console.log('Password entered in the field.');

    // Verify that password is initially masked
    const inputTypeMasked = await passwordInput.getAttribute('type');
    expect(inputTypeMasked).toBe('password');
    console.log('Password is masked by default.');

    // Click the "Show Password" button to reveal the password
    await showPasswordToggle.click();
    console.log('Clicked "Show Password" toggle.');

    // Verify that the password is now visible (type="text")
    const inputTypeVisible = await passwordInput.getAttribute('type');
    expect(inputTypeVisible).toBe('text');
    console.log('Password is now visible.');

    // Click the "Show Password" button again to re-mask the password
    await showPasswordToggle.click();
    console.log('Clicked "Show Password" toggle again.');

    // Verify that the password is masked again (type="password")
    const inputTypeMaskedAgain = await passwordInput.getAttribute('type');
    expect(inputTypeMaskedAgain).toBe('password');
    console.log('Password is masked again.');
  });
});