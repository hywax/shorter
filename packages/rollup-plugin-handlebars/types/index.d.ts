import type { Plugin } from 'rollup'
import type { FilterPattern } from '@rollup/pluginutils'

export interface RollupHandlebarsOptions {
  include?: FilterPattern
  exclude?: FilterPattern
}

export default function handlebars(options?: RollupHandlebarsOptions): Plugin
