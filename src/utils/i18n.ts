import i18next from 'i18next';
import { initI18next } from 'astro-i18next';

export const initI18n = async () => {
  if (!i18next.isInitialized) {
    await initI18next(i18next, {
      lng: 'en',
      fallbackLng: 'en',
      supportedLngs: ['en', 'pt-BR'],
      defaultNS: 'translation',
      ns: ['translation'],
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
    });
  }
  return i18next;
};
