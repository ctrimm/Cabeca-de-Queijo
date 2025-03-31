/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "pt-BR"],
  load: ["server"],
  i18next: {
    debug: true,
    defaultNS: "translation",
    ns: ["translation"],
    fallbackLng: "en"
  }
};
