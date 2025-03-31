/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "pt-BR"],
  load: ["server", "client"],
  i18next: {
    debug: false,
    supportedLngs: ["en", "pt-BR"],
    fallbackLng: "en",
    defaultNS: "translation",
    ns: ["translation"]
  },
  routes: {
    "pt-BR": {
      about: "sobre",
      "contact-us": "contato",
      blog: "blog"
    }
  }
};
