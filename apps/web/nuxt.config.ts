import { themeOptions } from '@shorter/theme-config/primevue.config'

export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxt/fonts',
  ],
  primevue: {
    options: themeOptions,
  },
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
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
  ],
  future: {
    compatibilityVersion: 4,
  },
})
