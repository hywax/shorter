import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    'nuxt-zod-i18n',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    'nuxt-auth-utils',
    'nuxt-time',
  ],
  runtimeConfig: {
    nitro: {
      envPrefix: 'APP_',
    },
    baseUrl: '',
    authSessionPassword: '',
    authAllowRegistration: '',
    accountAllowDelete: '',
    public: {
      disableSponsorLink: '',
      disableSourceLink: '',
    },
  },
  alias: {
    '#schema': fileURLToPath(new URL('./app/schema/index', import.meta.url)),
    '#db': fileURLToPath(new URL('./server/database/index', import.meta.url)),
    '#services': fileURLToPath(new URL('./server/services', import.meta.url)),
    '#constants': fileURLToPath(new URL('./server/constants', import.meta.url)),
  },
  components: [
    { path: '~/components/ui', prefix: 'U', pathPrefix: false },
    '~/components',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  i18n: {
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    experimental: {
      // localeDetector: fileURLToPath(new URL('./server/i18n/localeDetector.ts', import.meta.url)),
      autoImportTranslationFunctions: true,
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-US.ts' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru-RU.ts' },
    ],
  },
  zodI18n: {
    localeCodesMapping: {
      'en-GB': 'en',
      'ru-RU': 'ru',
    },
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    experimental: {
      tasks: true,
    },
  },
  compatibilityDate: '2024-08-04',
  future: {
    compatibilityVersion: 4,
  },

  /**
   * SSR mode is necessary because the race condition appears when the middleware is running.
   * The session request is triggered after middleware auth/guest, so we don't get the actual session state.
   */
  ssr: true,
})
