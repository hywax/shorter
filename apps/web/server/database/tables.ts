import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { dateField, idField } from './utils'

export const users = sqliteTable('users', {
  id: idField('id'),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  role: text('role', { enum: ['admin', 'user'] }).default('user').notNull(),
  password: text('password').notNull(),
  onlineAt: dateField('online_at'),
  createdAt: dateField('created_at', true),
})
