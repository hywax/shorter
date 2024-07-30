import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  ssr: false,
  modules: [
    'nuxt-zod-i18n',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
  ],
  runtimeConfig: {
    nitro: {
      envPrefix: 'APP_',
    },
    baseUrl: '',
    authSecret: '',
    authAllowRegistration: '',
    public: {
      disableSponsorLink: '',
      disableSourceLink: '',
    },
  },
  auth: {
    provider: {
      type: 'authjs',
      defaultProvider: 'credentials',
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
  alias: {
    '#schema': fileURLToPath(new URL('./schema', import.meta.url)),
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
      localeDetector: './server/i18n/localeDetector.ts',
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
  future: {
    compatibilityVersion: 4,
  },
})
