import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }: { page: Page}) => {
    await page.goto('https://uat.clipro.tv/poc/harry-potter-quest/index.html');
  });
  

test('Hello World', async ({ page }: { page: Page}) => {
  await expect(page).toHaveTitle(/Harry Potter Quest/);
  });
