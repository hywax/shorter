import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    UnoCSS(),
    Components({
      dirs: resolve(__dirname, './.vitepress/theme/components'),
      dts: resolve(__dirname, './.vitepress/components.d.ts'),
      transformer: 'vue3',
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
    }),
  ],
})
