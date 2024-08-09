import { createRequire } from 'node:module'
import type { Plugin } from 'rollup'
import { createFilter } from '@rollup/pluginutils'
import { precompile } from 'handlebars'
import type { RollupHandlebarsOptions } from '../types'

const require = createRequire(import.meta.url)
const HANDLEBARS_ID = require.resolve('handlebars')

const defaultOptions: RollupHandlebarsOptions = {
  include: ['**/*.hbs'],
  exclude: ['node_modules/**'],
}

export default function handlebars(options: RollupHandlebarsOptions = {}): Plugin {
  const { include, exclude } = { ...defaultOptions, ...options }
  const filter = createFilter(include, exclude)

  return {
    name: 'handlebars',
    transform(code, id) {
      if (!filter(id)) {
        return
      }

      const template = precompile(code)

      const compiled = `
        import handlebars from '${HANDLEBARS_ID}'
        export default handlebars.template(${template.toString()})
      `

      return {
        code: compiled,
        map: {
          mappings: '',
        },
      }
    },
  }
}
