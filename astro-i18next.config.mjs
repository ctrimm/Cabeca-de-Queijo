/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "pt-BR"],
  i18next: {
    debug: true,
    initImmediate: false,
    supportedLngs: ["en", "pt-BR"],
    fallbackLng: "en",
    defaultNS: "translation",
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
  routes: {
    "pt-BR": {
      about: "sobre",
      "contact-us": "contato",
      blog: "blog"
    }
  }
};
