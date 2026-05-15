import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navbar is visible on desktop', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav.first()).toBeVisible();
  });

  test('language picker navigates to pt-BR', async ({ page }) => {
    await page.goto('/');
    const ptLink = page.locator('a[href="/pt-BR/"]').first();
    await expect(ptLink).toBeVisible();
    await ptLink.click();
    await expect(page).toHaveURL(/\/pt-BR\//);
  });

  test('mobile hamburger button has aria-expanded attribute', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('button[aria-expanded]');
    await expect(hamburger).toHaveCount(1);
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  test('mobile hamburger toggles aria-expanded on click', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('button[aria-expanded]');
    await hamburger.click();
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    await hamburger.click();
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  test('nav links include Chapters and Join', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav a[href*="/chapters/"]').first()).toBeVisible();
    await expect(page.locator('nav a[href*="/join/"]').first()).toBeVisible();
  });

  test('pt-BR nav has translated links', async ({ page }) => {
    await page.goto('/pt-BR/');
    await expect(page.locator('nav a[href*="/pt-BR/chapters/"]').first()).toBeVisible();
  });
});
