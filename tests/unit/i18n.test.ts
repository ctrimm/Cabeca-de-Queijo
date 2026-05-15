import { describe, it, expect } from 'vitest';
import { ui } from '../../src/i18n/ui';
import { getLangFromUrl, useTranslations, useTranslatedPath } from '../../src/i18n/utils';

const enKeys = Object.keys(ui.en) as Array<keyof typeof ui.en>;
const ptKeys = Object.keys(ui['pt-BR']) as Array<string>;

// ── Translation coverage ─────────────────────────────────────────────────────

describe('translation coverage', () => {
  it('every English key exists in Portuguese', () => {
    const missing = enKeys.filter(k => !ptKeys.includes(k));
    expect(missing, `Missing pt-BR keys: ${missing.join(', ')}`).toEqual([]);
  });

  it('no English value is empty', () => {
    const empty = enKeys.filter(k => !ui.en[k] || ui.en[k].trim() === '');
    expect(empty).toEqual([]);
  });

  it('no Portuguese value is empty', () => {
    const empty = ptKeys.filter(k => {
      const v = ui['pt-BR'][k as keyof typeof ui['pt-BR']];
      return !v || v.trim() === '';
    });
    expect(empty).toEqual([]);
  });

  it('has the nextGames.noUpcoming key in both languages', () => {
    expect(ui.en['nextGames.noUpcoming']).toBeTruthy();
    expect(ui['pt-BR']['nextGames.noUpcoming']).toBeTruthy();
  });

  it('has more than 50 translation keys', () => {
    expect(enKeys.length).toBeGreaterThan(50);
  });
});

// ── getLangFromUrl() ─────────────────────────────────────────────────────────

describe('getLangFromUrl()', () => {
  it('returns "en" for root path', () => {
    expect(getLangFromUrl(new URL('https://cabecadequeijo.com/'))).toBe('en');
  });

  it('returns "en" for English content paths', () => {
    expect(getLangFromUrl(new URL('https://cabecadequeijo.com/chapters/'))).toBe('en');
    expect(getLangFromUrl(new URL('https://cabecadequeijo.com/join/'))).toBe('en');
  });

  it('returns "pt-BR" for /pt-BR/ paths', () => {
    expect(getLangFromUrl(new URL('https://cabecadequeijo.com/pt-BR/'))).toBe('pt-BR');
    expect(getLangFromUrl(new URL('https://cabecadequeijo.com/pt-BR/chapters/'))).toBe('pt-BR');
  });

  it('falls back to "en" for unrecognized locale segments', () => {
    expect(getLangFromUrl(new URL('https://cabecadequeijo.com/fr/chapters/'))).toBe('en');
    expect(getLangFromUrl(new URL('https://cabecadequeijo.com/de/'))).toBe('en');
  });
});

// ── useTranslations() ────────────────────────────────────────────────────────

describe('useTranslations()', () => {
  it('returns "Join" for nav.join in English', () => {
    const t = useTranslations('en');
    expect(t('nav.join')).toBe('Join');
  });

  it('returns "Participe" for nav.join in Portuguese', () => {
    const t = useTranslations('pt-BR');
    expect(t('nav.join')).toBe('Participe');
  });

  it('returns Portuguese schedule title', () => {
    const t = useTranslations('pt-BR');
    expect(t('nextGames.title')).toBe('Próximos Jogos & Eventos');
  });

  it('returns English schedule title', () => {
    const t = useTranslations('en');
    expect(t('nextGames.title')).toBe('Upcoming Games & Events');
  });

  it('returns non-empty noUpcoming fallback for both languages', () => {
    expect(useTranslations('en')('nextGames.noUpcoming')).toBeTruthy();
    expect(useTranslations('pt-BR')('nextGames.noUpcoming')).toBeTruthy();
  });

  it('returns banner text for both languages', () => {
    expect(useTranslations('en')('banner.text')).toContain('WhatsApp');
    expect(useTranslations('pt-BR')('banner.text')).toContain('WhatsApp');
  });
});

// ── useTranslatedPath() ──────────────────────────────────────────────────────

describe('useTranslatedPath()', () => {
  it('returns path unchanged for English (default lang, no prefix)', () => {
    const translatePath = useTranslatedPath('en');
    expect(translatePath('/join/')).toBe('/join/');
    expect(translatePath('/chapters/')).toBe('/chapters/');
    expect(translatePath('/')).toBe('/');
  });

  it('prefixes /pt-BR/ for Portuguese', () => {
    const translatePath = useTranslatedPath('pt-BR');
    expect(translatePath('/join/')).toBe('/pt-BR/join/');
    expect(translatePath('/chapters/')).toBe('/pt-BR/chapters/');
    expect(translatePath('/')).toBe('/pt-BR/');
  });
});
