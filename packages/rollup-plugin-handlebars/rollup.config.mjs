import { readFileSync } from 'node:fs'
import { builtinModules } from 'node:module'
import typescript from '@rollup/plugin-typescript'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

export default {
  input: 'src/index.ts',
  external: [
    ...builtinModules.map((module) => `node:${module}`),
    ...Object.keys(pkg.dependencies || {}),
    Object.keys(pkg.peerDependencies || {}),
  ],
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      exports: 'named',
      footer: 'module.exports = Object.assign(exports.default, exports);',
      sourcemap: true,
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({ sourceMap: true }),
  ],
}
