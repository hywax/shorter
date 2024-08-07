import { integer, text } from 'drizzle-orm/sqlite-core'
import { createId } from '@paralleldrive/cuid2'
import { sql } from 'drizzle-orm'

export function idField(name: string) {
  return text(name)
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId())
}

export function foreignIdField(name: string) {
  return text(name).notNull()
}

export function dateField(name: string, defaultCurrentTimestamp = false) {
  const filed = integer(name, { mode: 'timestamp' })

  if (defaultCurrentTimestamp) {
    filed.default(sql`(unixepoch())`)
  }

  return filed
}
