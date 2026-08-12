import { describe, it, expect } from 'vitest';
import { isLocaleEntry, localeEntrySlug } from '../../src/utils/blogEntries';

// Astro's glob() loader slugifies entry IDs, lowercasing each path segment, so
// a post at src/content/blog/pt-BR/foo.md has the ID `pt-br/foo`. Matching that
// against a literal 'pt-BR/' silently dropped every Portuguese post from the
// build — these tests pin the case-insensitive behavior that fixed it.

describe('isLocaleEntry', () => {
  it('matches pt-BR entries whose IDs were lowercased by the loader', () => {
    expect(isLocaleEntry('pt-br/2026-05-27-week-in-review', 'pt-BR')).toBe(true);
  });

  it('matches pt-BR entries whose IDs kept their original casing', () => {
    expect(isLocaleEntry('pt-BR/2026-05-27-week-in-review', 'pt-BR')).toBe(true);
  });

  it('matches en entries', () => {
    expect(isLocaleEntry('en/how-to-watch-the-nfl-in-brazil', 'en')).toBe(true);
  });

  it('does not match across locales', () => {
    expect(isLocaleEntry('pt-br/week-in-review', 'en')).toBe(false);
    expect(isLocaleEntry('en/week-in-review', 'pt-BR')).toBe(false);
  });

  it('requires a full folder segment, not a bare prefix', () => {
    expect(isLocaleEntry('english/post', 'en')).toBe(false);
  });
});

describe('localeEntrySlug', () => {
  it('strips a lowercased pt-BR prefix', () => {
    expect(localeEntrySlug('pt-br/2026-05-27-week-in-review', 'pt-BR')).toBe(
      '2026-05-27-week-in-review'
    );
  });

  it('strips an original-cased pt-BR prefix', () => {
    expect(localeEntrySlug('pt-BR/2026-05-27-week-in-review', 'pt-BR')).toBe(
      '2026-05-27-week-in-review'
    );
  });

  it('strips an en prefix', () => {
    expect(localeEntrySlug('en/sports-bars-in-sao-paulo', 'en')).toBe(
      'sports-bars-in-sao-paulo'
    );
  });

  it('strips a file extension when the loader leaves one on', () => {
    expect(localeEntrySlug('pt-br/go-pack-go-in-portuguese.md', 'pt-BR')).toBe(
      'go-pack-go-in-portuguese'
    );
  });

  it('only strips the leading locale segment', () => {
    expect(localeEntrySlug('en/en/nested', 'en')).toBe('en/nested');
  });
});
