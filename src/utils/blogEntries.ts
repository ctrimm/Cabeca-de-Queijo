/**
 * Helpers for mapping blog collection entry IDs to locales and URL slugs.
 *
 * Blog posts live in `src/content/blog/<locale>/<name>.md`, but the entry IDs
 * that Astro's `glob()` loader produces are slugified: each path segment is run
 * through github-slugger, which lowercases it. So the post at
 * `src/content/blog/pt-BR/foo.md` has the ID `pt-br/foo`, not `pt-BR/foo`.
 *
 * Comparing those IDs against a literal `'pt-BR/'` therefore never matches,
 * which silently dropped every Portuguese post from the build. Match on the
 * locale case-insensitively so the folder name and the entry ID can't drift
 * apart again.
 */

/** Does this entry ID belong to the given locale folder? */
export function isLocaleEntry(id: string, locale: string): boolean {
  return id.toLowerCase().startsWith(`${locale.toLowerCase()}/`);
}

/** Strip the locale prefix (and any file extension) to get the URL slug. */
export function localeEntrySlug(id: string, locale: string): string {
  return id
    .replace(/\.(md|mdx)$/, '')
    .replace(new RegExp(`^${locale}/`, 'i'), '');
}
