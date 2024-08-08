export default defineAppConfig({
  meta: {
    name: 'Shorter',
    author: {
      name: 'hywax',
      url: 'https://hywax.space/?ref=shorter',
    },
    sponsorLink: 'https://boosty.to/hywax/donate?ref=shorter',
    sourceLink: 'https://github.com/hywax/shorter?ref=shorter',
  },
  ui: {
    primary: 'indigo',
    gray: 'zinc',
  },
  icons: {
    add: 'i-heroicons-plus',
    arrowRight: 'i-heroicons-arrow-long-right',
    message: 'i-heroicons-chat-bubble-oval-left-ellipsis',
    account: {
      shortcuts: 'i-heroicons-command-line',
      settings: 'i-heroicons-cog',
      appearance: 'i-heroicons-paint-brush',
      security: 'i-heroicons-finger-print',
      signOut: 'i-heroicons-arrow-left-on-rectangle',
    },
    projects: {
      project: 'i-heroicons:cube-transparent-20-solid',
      links: 'i-heroicons-link',
      clicks: 'i-heroicons-cursor-arrow-rays',
      analytics: 'i-heroicons-chart-pie',
      events: 'i-heroicons-calendar',
      settings: 'i-heroicons-cog',
      members: 'i-heroicons-users',
      tags: 'i-heroicons-tag',
      selector: {
        dropdown: 'i-heroicons-chevron-up-down',
        add: 'i-heroicons-plus-circle',
      },
    },
    error: {
      reload: 'i-heroicons-arrow-path-16-solid',
      backHome: 'i-heroicons-arrow-long-right',
    },
    social: {
      boosty: 'i-simple-icons-boosty',
      github: 'i-simple-icons-github',
    },
    colorMode: {
      system: 'i-heroicons-computer-desktop-20-solid',
      dark: 'i-heroicons-moon-20-solid',
      light: 'i-heroicons-sun-20-solid',
    },
    flags: {
      en: 'i-emojione-flag-for-united-kingdom',
      zh: 'i-emojione-flag-for-china',
      ru: 'i-emojione-flag-for-russia',
      hi: 'i-emojione-flag-for-india',
    },
  },
})
