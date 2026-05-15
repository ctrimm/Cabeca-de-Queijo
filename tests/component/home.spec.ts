import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('loads and has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Cabeça de Queijo/);
  });

  test('has a skip-to-main link in the DOM', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toHaveCount(1);
  });

  test('has a #main-content landmark', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#main-content')).toHaveCount(1);
  });

  test('schedule section is present', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#schedule, section').filter({ hasText: /upcoming|próximos/i }).first();
    await expect(section).toBeVisible();
  });

  test('hero section has Join button linking to WhatsApp or join page', async ({ page }) => {
    await page.goto('/');
    const joinBtn = page.locator('a[href*="whatsapp"], a[href*="/join/"]').first();
    await expect(joinBtn).toBeVisible();
  });

  test('has a footer with copyright text', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText(/Cabeça de Queijo/i);
  });

  test('all external links have rel="noopener noreferrer"', async ({ page }) => {
    await page.goto('/');
    const externalLinks = await page.locator('a[target="_blank"]').all();
    for (const link of externalLinks) {
      const rel = await link.getAttribute('rel');
      const href = await link.getAttribute('href');
      expect(rel, `Link missing noreferrer: ${href}`).toContain('noreferrer');
    }
  });

  test('pt-BR home page loads', async ({ page }) => {
    await page.goto('/pt-BR/');
    await expect(page).toHaveTitle(/Cabeça de Queijo/);
    await expect(page.locator('body')).toBeVisible();
  });
});
