import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { presetIcons } from 'unocss'

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      dirs: resolve(__dirname, './.vitepress/theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          prefix: '',
        }),
      ],
      dts: resolve(__dirname, './.vitepress/components.d.ts'),
      transformer: 'vue3',
    }),
    UnoCSS({
      presets: [
        presetIcons({
          scale: 1.2,
          prefix: 'i-',
          extraProperties: {
            'color': '',
            'display': 'inline-block',
            'vertical-align': 'text-top',
          },
        }),
      ],
    }),
  ],
})
