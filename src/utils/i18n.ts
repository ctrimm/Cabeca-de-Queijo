import i18next from 'i18next';

export const initI18n = async () => {
  if (!i18next.isInitialized) {
    await i18next.init({
      lng: 'en',
      fallbackLng: 'en',
      supportedLngs: ['en', 'pt-BR'],
      defaultNS: 'translation',
      ns: ['translation']
    });
  }
  return i18next;
};
