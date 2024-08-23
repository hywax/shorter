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
      { text: 'Introduction', link: '/guide/what-is' },
      { text: 'Roadmap', link: '/extra/roadmap' },
      {
        text: getVersion(),
        items: [
          { text: 'Changelog', link: '/other/changelog' },
          { text: 'Contributing', link: '/other/contributing' },
        ],
      },
    ],

    /**
     * Main sidebar
     */
    sidebar: [
      {
        text: 'Introduction',
        base: '/guide',
        items: [
          { text: 'What is Shorter?', link: '/what-is' },
          { text: 'Installation', link: '/installation' },
          { text: 'Configuration', link: '/configuration' },
        ],
      },
      {
        text: 'Essentials',
        base: '/essentials',
        items: [
          { text: 'Getting Started', link: '/started' },
        ],
      },
      {
        text: 'Advanced',
        base: '/advanced',
        items: [
          { text: 'Email', link: '/email' },
          { text: 'Nightly release', link: '/nightly-release' },
        ],
      },
      {
        text: 'Other',
        base: '/other',
        collapsed: true,
        items: [
          { text: 'Contributing', link: '/contributing' },
          { text: 'Changelog', link: '/changelog' },
          { text: 'License', link: '/license' },
        ],
      },
    ],

    /**
     * Footer
     */
    footer: {
      message: 'Released under the AGPL-3.0 License',
      copyright: '© 2024-present Hywax',
    },

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
    outline: {
      level: [2, 3],
    },
  },
})
