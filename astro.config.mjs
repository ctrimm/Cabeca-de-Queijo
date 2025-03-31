import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

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
      redirectToDefaultLocale: true
    }
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          'pt-BR': 'pt-BR',
        },
      },
    })
  ],
  // trailingSlash: "always",
});
