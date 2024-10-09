import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import BetterSqlite3 from 'better-sqlite3'
import { type BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from './tables'

export interface CreateConnectionOptions {
  cwd?: string
  name?: string
}

export type Database = BetterSQLite3Database<typeof schema>

export function createConnection(options: CreateConnectionOptions): Database {
  const filePath = resolve(options.cwd || '.', `data/${options.name || 'db'}.sqlite3`)
  mkdirSync(dirname(filePath), { recursive: true })
  const sqlite = new BetterSqlite3(filePath)

  return drizzle(sqlite, {
    schema,
  })
}
