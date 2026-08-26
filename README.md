# Cabeça de Queijo 🧀🧑

This is the repository for the frontend of the [Cabeça de Queijo](https://cabecadequeijo.com) website for the [Green Bay Packers](https://greenbaypackers.com) Fan Club in Brasil.

Currently, there are disparate fans all across this beautiful country. This website will become a place to join a community of passionate NFL fans.

---

Created over the course of a week and willing for any/all contributions.

Go. Pack. Go.

---

To generate the translated pages / components, use the command `pnpm dlx astro-i18next generate`.

---

## Development

This project uses **pnpm**. Please don't run `npm install` — the reasons are in the notes below, and they are not cosmetic.

```bash
pnpm install          # install dependencies
pnpm run dev          # local dev server
pnpm run build        # production build
pnpm run test         # unit + component tests
```

CI runs `pnpm install --frozen-lockfile`. If you change anything in `package.json`, run `pnpm install` locally and **commit the updated `pnpm-lock.yaml` alongside it**, or every workflow will fail.

---

## Toolchain notes (Astro + pnpm)

These are the sharp edges we've actually hit. Worth reading before touching dependencies.

### Why pnpm and not npm

Astro 7 builds through rolldown-vite, which minifies CSS with **lightningcss**. lightningcss ships its native binary as a platform-specific *optional* dependency (`lightningcss-linux-x64-gnu` on CI). npm's optional-dependency resolution is unreliable here — it left that binary out of the CI install and the deploy died with:

```
Cannot find module '../lightningcss.linux-x64-gnu.node'
```

Compounding it, the old `package-lock.json` had been written by a newer npm than CI ran, so `npm install` re-resolved the whole tree on every run instead of installing what was locked. pnpm resolves platform-specific optional dependencies deterministically, which removes the entire class of problem.

### pnpm blocks lifecycle scripts by default

pnpm 10 does not run install scripts unless a package is allowlisted. **`sharp` needs its build step** to produce the native binary Astro uses for image optimization. Without the allowlist the install still "succeeds" and the build still "passes" — you just quietly stop getting optimized images.

The allowlist lives in `package.json`:

```json
"pnpm": {
  "onlyBuiltDependencies": ["esbuild", "sharp"]
}
```

If you add a dependency with a native component, pnpm will warn about ignored build scripts on install. Don't dismiss that warning — add the package here. A quick sanity check that image optimization still works:

```bash
pnpm run build && ls dist/_astro/*.webp | wc -l   # expect dozens, not zero
```

### pnpm ignores npm's `overrides` field

npm reads a top-level `"overrides"`; pnpm only reads `"pnpm": { "overrides": ... }`. They are different fields, and pnpm will silently ignore the npm one.

This matters because the `yaml` pin is a security override. It was silently dropped the first time this project was converted, and the pinned-away version came straight back into the tree. Both fields are currently declared and **must be kept in sync** — if you change one, change the other.

### Verifying a dependency change

Because several of these failures are silent, a clean-slate check is worth the two minutes:

```bash
rm -rf node_modules && pnpm install --frozen-lockfile
pnpm run build        # should complete without a lightningcss or sharp error
pnpm run test:unit
```

---

#### [Getting Started Guide](/ORIGINALREADME.md)

> Note: the getting started guide is the original Astro template README and still refers to `npm`. Substitute `pnpm` throughout.
