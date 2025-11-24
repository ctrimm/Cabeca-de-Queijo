# Configuration Documentation

This document explains key configuration decisions for the Cabeça de Queijo website.

## Astro Configuration (`astro.config.mjs`)

### Trailing Slash
**Status**: Currently commented out (`// trailingSlash: "always"`)

**Reason**:
- The site is deployed on S3 with CloudFront CDN
- S3's default behavior works better without forcing trailing slashes
- Keeping it commented as default Astro behavior is appropriate for this deployment setup
- Can be uncommented if needed for specific routing requirements

### i18n Configuration
- **Default Locale**: English (`en`)
- **Supported Locales**: English (`en`), Brazilian Portuguese (`pt-BR`)
- **Routing Strategy**:
  - `prefixDefaultLocale: false` - English pages don't require `/en/` prefix
  - `redirectToDefaultLocale: true` - Root redirects to default locale

### Site URL
- Production: `https://CabecadeQueijo.com`
- Used for sitemap generation and canonical URLs

## Web3Forms Integration

**Location**: `src/components/contactform.astro`

The contact form uses [Web3Forms](https://web3forms.com/) for form submissions:
- Free service that sends form data to email
- Access key is currently hardcoded (line 17)
- **TODO**: Migrate to environment variable for better security
- No backend server required

**Setup**:
1. Create free account at https://web3forms.com/
2. Get access key
3. Update `WEB3FORMS_ACCESS_KEY` in `.env` (see `.env.example`)
4. Migrate contactform.astro to use environment variable

## Deployment Configuration

### GitHub Actions

**Deploy Workflow** (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Builds site and deploys to AWS S3
- Invalidates CloudFront cache for instant updates

**Morning Workflow** (`.github/workflows/morning.yml`):
- Runs daily at 3am São Paulo time (6am UTC)
- Automatically rebuilds and redeploys site
- Purpose: Update game schedules and time-sensitive content

### Required GitHub Secrets
- `AWS_ACCESS_KEY_ID` - AWS credentials for S3 deployment
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `BUCKET_ID` - S3 bucket name
- `DISTRIBUTION_ID` - CloudFront distribution ID

## Package Management

### Dependencies
- **Astro**: 5.15.9 - Static site framework
- **Tailwind CSS**: Utility-first styling
- **DaisyUI**: Component library (theme: "lemonade")
- **MDX**: Blog content with components
- **Sharp**: Image optimization

### Scripts Location
- `/scripts/` - Utility and maintenance scripts
  - `update-blog-images.js` - Image processing utility

## Code Quality Tools

### Prettier
- Tab width: 2 spaces
- Configuration: `.prettierrc.cjs`
- Used for consistent code formatting

### TODO: ESLint
- Not currently configured
- Planned addition for code quality enforcement

## Asset Organization

### Images
- Development: `/src/assets/` - Processed by Astro
- Static: `/public/` - Served as-is
- Optimized to WebP where possible
- Sharp handles image optimization during build

### Translations
- Location: `/public/locales/`
  - `en/translation.json` - English strings
  - `pt-BR/translation.json` - Portuguese strings
- Copied to build output: `cp -r public/locales dist/locales`

## Build Process

1. `npm ci` - Clean install dependencies
2. `npm run build` - Build Astro site to `/dist/`
3. Copy locale files to dist
4. Deploy to S3
5. Invalidate CloudFront cache

---

**Last Updated**: 2025-11-24
