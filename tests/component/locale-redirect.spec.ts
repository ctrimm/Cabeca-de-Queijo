import { test, expect } from '@playwright/test';

// Visitors in South America (or asking for Portuguese) should land on the pt-BR
// site automatically, but an explicit language choice must always win.

test.describe('Locale auto-redirect — South America', () => {
  test.use({ timezoneId: 'America/Sao_Paulo', locale: 'pt-BR' });

  test('a visitor in Brazil is sent to the pt-BR home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/pt-BR\/$/);
  });

  test('the redirect preserves the page they landed on', async ({ page }) => {
    await page.goto('/blog/');
    await expect(page).toHaveURL(/\/pt-BR\/blog\/$/);
  });

  test('the redirect preserves query and hash', async ({ page }) => {
    await page.goto('/blog/?utm_source=whatsapp#latest');
    await expect(page).toHaveURL(/\/pt-BR\/blog\/\?utm_source=whatsapp#latest$/);
  });

  test('pt-BR pages do not redirect again', async ({ page }) => {
    await page.goto('/pt-BR/');
    await page.waitForTimeout(300);
    await expect(page).toHaveURL(/\/pt-BR\/$/);
  });

  test('an explicit choice of English is respected', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('cdq:lang', 'en');
    });
    await page.goto('/');
    await page.waitForTimeout(300);
    await expect(page).toHaveURL(/\/$/);
    await expect(page).not.toHaveURL(/pt-BR/);
  });
});

test.describe('Locale auto-redirect — Argentina', () => {
  // Argentina uses the America/Argentina/* prefix rather than a flat zone name.
  test.use({ timezoneId: 'America/Argentina/Buenos_Aires', locale: 'es-AR' });

  test('a Spanish-speaking visitor in Argentina still gets pt-BR', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/pt-BR\/$/);
  });
});

test.describe('Locale auto-redirect — outside South America', () => {
  test.use({ timezoneId: 'America/Chicago', locale: 'en-US' });

  test('a visitor in Wisconsin stays on the English site', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(300);
    await expect(page).toHaveURL(/\/$/);
    await expect(page).not.toHaveURL(/pt-BR/);
  });

  test('a Portuguese browser outside South America still gets pt-BR', async ({ browser }) => {
    const context = await browser.newContext({
      timezoneId: 'Europe/Lisbon',
      locale: 'pt-PT',
    });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page).toHaveURL(/\/pt-BR\/$/);
    await context.close();
  });
});

test.describe('Language picker', () => {
  // The links live inside a CSS-driven dropdown that is closed at rest, so these
  // dispatch the click directly rather than choreographing the menu open.
  // navigation.spec.ts already covers the dropdown containing the pt-BR link.

  test.describe('from the English site', () => {
    test.use({ timezoneId: 'America/Chicago', locale: 'en-US' });

    test('choosing Portuguese records the preference', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-lang-choice="pt-BR"]').first().dispatchEvent('click');
      await page.waitForURL(/\/pt-BR\//);
      const stored = await page.evaluate(() => window.localStorage.getItem('cdq:lang'));
      expect(stored).toBe('pt-BR');
    });
  });

  test.describe('from Brazil', () => {
    test.use({ timezoneId: 'America/Sao_Paulo', locale: 'pt-BR' });

    // The whole point of persisting the choice: a visitor in Brazil who wants
    // English must not be bounced back to pt-BR on their next page view.
    test('choosing English sticks across later visits', async ({ page }) => {
      await page.goto('/');
      await expect(page).toHaveURL(/\/pt-BR\/$/);

      await page.locator('[data-lang-choice="en"]').first().dispatchEvent('click');
      await page.waitForURL((url) => !url.pathname.startsWith('/pt-BR'));

      // Come back later — still English.
      await page.goto('/');
      await page.waitForTimeout(300);
      await expect(page).not.toHaveURL(/pt-BR/);

      await page.goto('/blog/');
      await page.waitForTimeout(300);
      await expect(page).toHaveURL(/\/blog\/$/);
    });
  });
});
