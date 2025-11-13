import { test, expect } from '@playwright/test';


// This example assumes the MSW service worker can be included on dev server.
test('user can request magic link', async ({ page }) => {
await page.goto('/sign-in');
await page.getByLabel('Email').fill('e2e@example.com');
await page.getByRole('button', { name: /send magic link/i }).click();
await expect(page.getByText(/check your email/i)).toBeVisible();
});