import type { NitroPreset } from 'nitropack'
import { cp, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

export default <NitroPreset>{
  extends: 'node-server',
  hooks: {
    async compiled(nitro) {
      /**
       * Copy database migrations to the output directory
       */
      const source = resolve(nitro.options.srcDir, 'core/database/migrations')
      const destination = resolve(nitro.options.output.serverDir, 'database/migrations')

      await mkdir(destination, { recursive: true })
      await cp(source, destination, { recursive: true })
    },
  },
}
