import type { z } from 'zod'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import * as schema from './tables'

export const userDraftSchema = createInsertSchema(schema.users)
export const userSchema = createSelectSchema(schema.users)

export type UserDraft = z.infer<typeof userDraftSchema>
export type User = z.infer<typeof userSchema>
export type UserSafe = Omit<User, 'password'>
