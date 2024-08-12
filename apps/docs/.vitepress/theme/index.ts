import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Sponsor from './components/Sponsor.vue'

import './custom.css'
import 'uno.css'

export default <Theme>{
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(Sponsor),
    })
  },
  enhanceApp() {

  },
}
