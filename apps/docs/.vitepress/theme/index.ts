import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './custom.css'
import 'uno.css'

export default <Theme>{
  extends: DefaultTheme,
  enhanceApp() {

  },
}
