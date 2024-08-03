import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/tables.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: './data/db.sqlite3',
  },
})
