import { resolve } from 'node:path'
import process from 'node:process'
import { useDatabase } from '#core/database'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'

/**
 * Run database migrations
 */
export default defineTask({
  meta: {
    name: 'db:migrate',
    description: 'Run database migrations',
  },
  async run() {
    const db = useDatabase()

    migrate(db, {
      migrationsFolder: resolve(process.cwd(), `server${import.meta.dev ? '/core' : ''}/database/migrations`),
    })

    return {
      result: 'Migrations completed',
    }
  },
})
