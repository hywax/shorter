import type { z } from 'zod'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import * as schema from './tables'

// Users

export const userDraftSchema = createInsertSchema(schema.users)
export const userSchema = createSelectSchema(schema.users)

export type UserDraft = z.infer<typeof userDraftSchema>
export type User = z.infer<typeof userSchema>

// Projects

export const projectSchema = createSelectSchema(schema.projects)
export const projectDraftSchema = createInsertSchema(schema.projects)
export const projectUserSchema = createSelectSchema(schema.projectsUsers)
export const projectUserDraftSchema = createInsertSchema(schema.projectsUsers)

export type Project = z.infer<typeof projectSchema>
export type ProjectDraft = z.infer<typeof projectDraftSchema>
export type ProjectUser = z.infer<typeof projectUserSchema>
export type ProjectUserDraft = z.infer<typeof projectUserDraftSchema>
