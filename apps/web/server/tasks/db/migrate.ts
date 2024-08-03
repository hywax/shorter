import { resolve } from 'node:path'
import process from 'node:process'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { useDatabase } from '#db'

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
      migrationsFolder: resolve(process.cwd(), 'server/database/migrations'),
    })

    return {
      result: 'Migrations completed',
    }
  },
})
