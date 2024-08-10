import { relations } from 'drizzle-orm'
import { primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { dateField, foreignIdField, idField } from './utils'

export const users = sqliteTable('users', {
  id: idField('id'),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  role: text('role', { enum: ['admin', 'user'] }).default('user').notNull(),
  password: text('password').notNull(),
  onlineAt: dateField('online_at'),
  createdAt: dateField('created_at', true),
})

export const passwordResets = sqliteTable('password_resets', {
  id: idField('id'),
  userId: foreignIdField('user_id').references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  token: text('token').notNull(),
  expiresAt: dateField('expires_at').notNull(),
  createdAt: dateField('created_at', true),
})

export const projects = sqliteTable('projects', {
  id: idField('id'),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: dateField('created_at', true),
})

export const projectsUsers = sqliteTable('projects_users', {
  projectId: foreignIdField('project_id').references(() => projects.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  userId: foreignIdField('user_id').references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  role: text('role', { enum: ['owner', 'member'] }).default('member').notNull(),
  joinedAt: dateField('joined_at', true),
}, (t) => ({
  pk: primaryKey({ columns: [t.projectId, t.userId] }),
}))

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projectsUsers),
}))

export const projectsRelations = relations(projects, ({ many }) => ({
  users: many(projectsUsers),
}))

export const projectsUsersRelations = relations(projectsUsers, ({ one }) => ({
  project: one(projects, {
    fields: [projectsUsers.projectId],
    references: [projects.id],
  }),
  user: one(users, {
    fields: [projectsUsers.userId],
    references: [users.id],
  }),
}))
