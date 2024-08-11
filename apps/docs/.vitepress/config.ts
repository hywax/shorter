import { defineConfig } from 'vitepress'
import enUs from './locales/en-US'
import ruRu from './locales/ru-RU'

export default defineConfig({
  title: 'Shorter',
  rewrites: {
    'en/:rest*': ':rest*',
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hywax/shorter' },
    ],
  },
  locales: {
    root: { label: 'English', ...enUs },
    ru: { label: 'Русский', ...ruRu },
  },
  ignoreDeadLinks: [
    (url) => {
      return !url.toLowerCase().includes('_parts')
    },
  ],
})
