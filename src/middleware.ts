import { sequence } from 'astro/middleware';
import i18next from 'i18next';

export const onRequest = sequence(async (context, next) => {
  const locale = context.url.pathname.startsWith('/pt-BR/') ? 'pt-BR' : 'en';
  if (i18next.language !== locale) {
    await i18next.changeLanguage(locale);
  }
  return next();
});
