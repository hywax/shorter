import { defineConfig } from 'vitepress'
import { getVersion } from '../utils'

export default defineConfig({
  lang: 'en-US',
  description: '',
  themeConfig: {
    /**
     * Main navigation
     */
    nav: [
      {
        text: getVersion(),
        items: [
          { text: 'Changelog', link: '/other/changelog' },
        ],
      },
    ],

    /**
     * Main sidebar
     */
    sidebar: [
      {
        text: 'Other',
        base: '/other',
        collapsed: true,
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'License', link: '/license' },
        ],
      },
    ],

    /**
     * Other options
     */
    editLink: {
      pattern: 'https://github.com/hywax/shorter/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },
})
