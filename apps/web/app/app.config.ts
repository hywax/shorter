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
    error: {
      reload: 'i-heroicons-arrow-path-16-solid',
      backHome: 'i-heroicons-outline-arrow-sm-right',
    },
    social: {
      boosty: 'i-simple-icons-boosty',
      github: 'i-simple-icons-github',
    },
    colorMode: {
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