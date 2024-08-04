// export default defineI18nLocaleDetector((event, config) => {
//   const query = tryQueryLocale(event, { lang: '' })
//   if (query) {
//     return query.language
//   }
//
//   const cookie = tryCookieLocale(event, { lang: '', name: 'i18n_redirected' })
//   if (cookie) {
//     return cookie.language
//   }
//
//   const header = tryHeaderLocale(event, { lang: '' })
//   if (header) {
//     return header.language
//   }
//
//   return config.defaultLocale
// })
