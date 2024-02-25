import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }: { page: Page}) => {
    await page.goto('https://uat.clipro.tv/poc/harry-potter-quest/index.html');
  });
  

test('Hello World', async ({ page }: { page: Page}) => {
  await expect(page).toHaveTitle(/Harry Potter Quest/);
  });

test('Should finish the game', async ({ page }: { page: Page}) => {
    await page.getByTestId('btnStart').click();

    await expect(page.getByTestId('score')).toHaveText('10');

    await page.getByPlaceholder('Enter the spell').fill('Leviosaaa');

    await expect(page.getByTestId('score')).toHaveText('20');

    await page.getByLabel('Train Station').selectOption({ label: 'Kings Cross 9 3/4' });

    await expect(page.getByTestId('score')).toHaveText('30');

    const stinkySock = page.getByTestId('stinkySock');
    const dwarf = page.getByTestId('dobby');

    await stinkySock.dragTo(dwarf);

    await expect(page.getByText('Fin')).toBeVisible();
});