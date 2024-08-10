import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/core/database/tables.ts',
  out: './server/core/database/migrations',
  dbCredentials: {
    url: './data/db.sqlite3',
  },
})
