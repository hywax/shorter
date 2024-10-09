import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import pkg from './package.json'

export default defineConfig({
  root: __dirname,
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
  plugins: [vue()],
})
