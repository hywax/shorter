import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import IconBoosty from './components/icons/IconBoosty.vue'
import IconGithub from './components/icons/IconGithub.vue'
import BoostyLink from './components/BoostyLink.vue'
import GithubLink from './components/GithubLink.vue'

import './custom.css'

const components = {
  IconBoosty,
  IconGithub,
  BoostyLink,
  GithubLink,
}

export default <Theme>{
  extends: DefaultTheme,
  enhanceApp(ctx) {
    for (const [name, component] of Object.entries(components)) {
      ctx.app.component(name, component)
    }
  },
}
