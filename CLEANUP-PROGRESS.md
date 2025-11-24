# 🧀 Cabeça de Queijo - Website Cleanup Progress

**Branch**: `claude/audit-website-cleanup-01GJoGuVBLMa1QajZyUQQ7KG`
**Started**: 2025-11-24
**Status**: In Progress

---

## Quick Wins (Phase 1)

### ✅ Completed
- [x] Create cleanup tracking file
- [x] Delete unused old content directory (`/src/content/old/`)
- [x] Remove unused `newsletterPT.astro` component
- [x] Clean up commented code blocks across components
- [x] Move `update-blog-images.js` to `/scripts/` directory
- [x] Create `.env.example` file
- [x] Document configuration decisions

### 🚧 In Progress

---

## Structural Changes (Phase 2)

### ✅ Completed
- [x] Fix `getNextGames.js` TODO and past game filtering logic
- [x] Add ESLint configuration (Prettier already configured)
- [x] Decide on ChapterStats component (deleted - was unused)
- [x] **Refactor i18n page duplication** (MAJOR - eliminated 10 duplicate page files!)
  - Created `src/i18n/seo.ts` for centralized SEO metadata by language
  - Updated all pages to use dynamic SEO based on detected language
  - Deleted entire `/src/pages/pt-BR/` directory (10 files)
  - Astro's i18n routing now handles /pt-BR/ URLs automatically
  - Reduced page maintenance burden by 50%

### 🔜 Planned
- [ ] Add Vitest testing infrastructure

---

## Polish (Phase 3)

### ✅ Completed
- [x] Add PR validation GitHub Actions workflow

### 📋 Backlog
- [ ] Optimize assets (44MB in /src/assets/)
- [ ] Expand README with development setup
- [ ] Add component documentation
- [ ] Add image compression workflow

---

## Notes

### Files Removed
- `/src/content/old/` - 4 unrelated blog posts (fullstack dev, algorithms, etc.) + kitchensink.mdx template
- `/src/components/newsletterPT.astro` - Unused Portuguese newsletter component
- `/src/components/chapterStats.astro` - Unused component (only referenced in commented code)
- **`/src/pages/pt-BR/` directory** - 10 duplicate page files (replaced with dynamic i18n routing):
  - `index.astro`
  - `join.astro`
  - `contact.astro`
  - `chapters.astro`
  - `chapters/new.astro`
  - `chapters/[slug].astro`
  - `blog/index.astro`
  - `blog/[...slug].astro`
  - `green-bay-packers-game-today.astro`
  - `404.astro`

### Files Modified

**Phase 1 - Quick Wins:**
- `/src/components/cta.astro` - Removed outdated HTML comment
- `/src/components/whatsApp.astro` - Removed outdated HTML comment
- `/src/pages/index.astro` - Removed commented ChapterStats component
- `/src/pages/join.astro` - Removed commented ChapterStats import and usage
- `/src/utils/getNextGames.js` - Fixed TODO comment, improved date filtering logic, added JSDoc comments
- `package.json` - Added ESLint dev dependencies and lint scripts

**Phase 2 - i18n Refactoring:**
- `/src/pages/index.astro` - Added dynamic SEO loading based on language
- `/src/pages/join.astro` - Added dynamic SEO loading based on language
- `/src/pages/contact.astro` - Added dynamic SEO loading based on language
- `/src/pages/chapters.astro` - Added dynamic SEO loading based on language
- `/src/pages/chapters/new.astro` - Added dynamic SEO loading based on language
- `/src/pages/blog/index.astro` - Added dynamic language detection and SEO
- `/src/pages/blog/[...slug].astro` - Updated to handle both EN and PT-BR posts dynamically
- `/src/pages/green-bay-packers-game-today.astro` - Added i18n support for YES/NO text
- `/src/pages/404.astro` - Added dynamic SEO loading based on language

### Files Moved
- `update-blog-images.js` → `scripts/update-blog-images.js`

### Files Created

**Phase 1:**
- `CLEANUP-PROGRESS.md` - This tracking file
- `scripts/` - New directory for utility scripts
- `.env.example` - Environment variable template with Web3Forms key
- `CONFIG.md` - Configuration documentation (trailingSlash, i18n, deployment)
- `.eslintrc.cjs` - ESLint configuration for Astro + TypeScript
- `.eslintignore` - ESLint ignore patterns

**Phase 2:**
- `src/i18n/seo.ts` - Centralized SEO metadata for all pages by language
- `.github/workflows/pr-validation.yml` - PR validation workflow (build check, lint, size reporting)

---

**Last Updated**: 2025-11-24
