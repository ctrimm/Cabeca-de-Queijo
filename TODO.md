# Fix Checklist

- [x] 1. Wrong icon on Maps buttons (`src/pages/chapters/[slug].astro`) — changed to `mdi:map-marker`
- [x] 2. Wrong variable for other places googleMapsLink (`src/pages/chapters/[slug].astro`) — fixed `otherPlace.googleMapsLink`
- [x] 3. BannerBar close state not persisted to localStorage (`src/components/BannerBar.astro`)
- [x] 4. Missing PT-BR version of game-today page — page already existed; added i18n key `nextGames.noUpcoming` for both locales
- [x] 5. Giant emoji text breaks on mobile — changed to `text-6xl sm:text-8xl md:text-[10rem]` in both en + pt-BR pages
- [x] 6. No fallback in nextGames if array is empty — added `nextGames.noUpcoming` fallback message
- [x] 7. Hardcoded member counts in chaptersList — now fetched from `getCollection("chapters")` with hardcoded fallback
- [x] 8. No skip-to-main-content link — added to `src/layouts/Layout.astro`
- [x] 9. Navbar hamburger missing aria-expanded/aria-controls — added + toggles dynamically in JS
- [x] 10. Icon containers missing aria-label — added `aria-hidden="true"` in new `FeatureGrid.astro`
- [x] 11. Text contrast — upgraded `text-slate-500` → `text-slate-600/700` in FeatureGrid + section subtitles
- [x] 12. Merge sellingPoints + memberBenefits into shared FeatureGrid component — created `src/components/FeatureGrid.astro`
- [x] 13. Footer links missing rel="noopener noreferrer" — fixed in `src/components/footer.astro`
- [x] 14. Contact form success message disappears too fast — removed 5-second auto-hide
- [x] 15. No JSON-LD structured data — added Organization schema to `src/layouts/Layout.astro`
- [x] 16. Chapter images all use same lambeauOutside.jpeg — added `heroImage` field to sao-paulo.md; `[slug].astro` now uses it with fallback
