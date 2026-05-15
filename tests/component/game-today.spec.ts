import { test, expect } from '@playwright/test';

test.describe('Game Today page (EN)', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/green-bay-packers-game-today/');
    await expect(page).toHaveTitle(/packers game today/i);
  });

  test('has a role="status" element', async ({ page }) => {
    await page.goto('/green-bay-packers-game-today/');
    const statusEl = page.locator('[role="status"]');
    await expect(statusEl).toHaveCount(1);
    await expect(statusEl).toBeVisible();
  });

  test('status element shows YES or NO', async ({ page }) => {
    await page.goto('/green-bay-packers-game-today/');
    const statusEl = page.locator('[role="status"]');
    const text = await statusEl.innerText();
    expect(['YES', 'NO'].some(v => text.includes(v))).toBe(true);
  });

  test('page has a visible question text', async ({ page }) => {
    await page.goto('/green-bay-packers-game-today/');
    await expect(page.locator('text=Is There a Green Bay Packers Game Today?')).toBeVisible();
  });

  test('is readable on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/green-bay-packers-game-today/');
    const statusEl = page.locator('[role="status"]');
    await expect(statusEl).toBeVisible();
    const box = await statusEl.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(375);
  });
});

test.describe('Game Today page (PT-BR)', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/pt-BR/green-bay-packers-game-today/');
    await expect(page).toHaveTitle(/packers hoje|jogo.*hoje|hoje.*jogo/i);
  });

  test('has a role="status" element', async ({ page }) => {
    await page.goto('/pt-BR/green-bay-packers-game-today/');
    const statusEl = page.locator('[role="status"]');
    await expect(statusEl).toHaveCount(1);
    await expect(statusEl).toBeVisible();
  });

  test('status element shows SIM or NÃO', async ({ page }) => {
    await page.goto('/pt-BR/green-bay-packers-game-today/');
    const statusEl = page.locator('[role="status"]');
    const text = await statusEl.innerText();
    expect(['SIM', 'NÃO'].some(v => text.includes(v))).toBe(true);
  });
});
