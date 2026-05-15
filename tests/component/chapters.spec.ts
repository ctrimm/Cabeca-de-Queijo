import { test, expect } from '@playwright/test';

test.describe('Chapters list page', () => {
  test('loads and shows heading', async ({ page }) => {
    await page.goto('/chapters/');
    await expect(page).toHaveTitle(/Chapters|Cabeça de Queijo/i);
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });

  test('lists at least one chapter card', async ({ page }) => {
    await page.goto('/chapters/');
    const chapterLinks = page.locator('a[href*="/chapters/"]');
    await expect(chapterLinks).toHaveCount(expect.any(Number));
    const count = await chapterLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('pt-BR chapters page loads', async ({ page }) => {
    await page.goto('/pt-BR/chapters/');
    await expect(page.locator('body')).toBeVisible();
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });
});

test.describe('São Paulo chapter page', () => {
  test('loads active chapter page', async ({ page }) => {
    await page.goto('/chapters/sao-paulo/');
    await expect(page).toHaveTitle(/São Paulo|Cabeça de Queijo/i);
  });

  test('has Google Maps and Apple Maps buttons', async ({ page }) => {
    await page.goto('/chapters/sao-paulo/');
    const googleBtn = page.locator('a[href*="google"][href*="map"], a:has-text("Google Maps")').first();
    await expect(googleBtn).toBeVisible();
    const appleBtn = page.locator('a[href*="apple"][href*="map"], a:has-text("Apple Maps")').first();
    await expect(appleBtn).toBeVisible();
  });

  test('map buttons open in new tab', async ({ page }) => {
    await page.goto('/chapters/sao-paulo/');
    const mapLinks = await page.locator('a[href*="maps"]').all();
    for (const link of mapLinks) {
      const target = await link.getAttribute('target');
      expect(target).toBe('_blank');
    }
  });

  test('has WhatsApp join button', async ({ page }) => {
    await page.goto('/chapters/sao-paulo/');
    const whatsappBtn = page.locator('a[href*="whatsapp"]').first();
    await expect(whatsappBtn).toBeVisible();
  });

  test('has back to chapters link', async ({ page }) => {
    await page.goto('/chapters/sao-paulo/');
    const backLink = page.locator('a[href*="/chapters/"]').last();
    await expect(backLink).toBeVisible();
    await expect(backLink).toContainText(/chapters|back/i);
  });
});
