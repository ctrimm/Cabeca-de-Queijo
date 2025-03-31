/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "pt-BR"],
  i18next: {
    debug: true,
    initImmediate: false,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    }
  }
};
