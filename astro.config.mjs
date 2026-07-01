import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://CabecadeQueijo.com",
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets'
      }
    }
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          'pt-BR': 'pt-BR',
        },
      },
    }),
    icon()
  ],
  // trailingSlash: "always",
});
