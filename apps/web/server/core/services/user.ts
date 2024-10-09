import type { PasswordReset, PasswordResetDraft, User, UserDraft } from '#core/database'
import crypto from 'node:crypto'
import { passwordResetDraftSchema, tables, useDatabase, userDraftSchema } from '#core/database'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { omit } from 'lodash-es'
import { z } from 'zod'

export type UserSafe = Omit<User, 'password'>

/**
 * Transform User to UserSafe
 *
 * @param user User
 * @returns UserSafe
 */
function transformToUserSafe(user: User): UserSafe {
  return omit(user, 'password')
}

/**
 * Get a list of users
 *
 * @returns UserSafe[]
 */
export async function getUsersList(): Promise<UserSafe[]> {
  const db = useDatabase()

  return db.query.users.findMany({
    columns: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      onlineAt: true,
    },
  })
}

/**
 * Find a user by ID
 *
 * @param userId
 * @returns UserSafe
 */
export async function findUserById(userId: User['id']): Promise<UserSafe> {
  const db = useDatabase()
  const findSchema = z.string()
  const id = findSchema.parse(userId)

  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.id, id),
  })

  if (!user) {
    throw new Error('User not found')
  }

  return transformToUserSafe(user)
}

/**
 * Find a user by email
 *
 * @param userEmail
 * @returns UserSafe
 */
export async function findUserByEmail(userEmail: User['email']): Promise<UserSafe> {
  const db = useDatabase()
  const findSchema = z.string().email()
  const email = findSchema.parse(userEmail)

  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  })

  if (!user) {
    throw new Error('User not found')
  }

  return transformToUserSafe(user)
}

/**
 * Create a new user
 *
 * @param data User data
 * @returns UserSafe
 */
export async function createUser(data: UserDraft): Promise<UserSafe> {
  const db = useDatabase()

  const userDraft = userDraftSchema.parse(data)
  const rows = await db.insert(tables.users).values({
    ...userDraft,
    password: await bcrypt.hash(data.password, 10),
  }).returning()

  if (!rows.length) {
    throw new Error('User not created')
  }

  return transformToUserSafe(rows[0]!)
}

/**
 * Validate user credentials
 *
 * @param credentials User credentials
 * @param credentials.email User email
 * @param credentials.password User password
 * @returns UserSafe
 */
export async function validateUserCredentials(credentials: { email: string, password: string }): Promise<UserSafe> {
  const db = useDatabase()
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = loginSchema.parse(credentials)
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  })

  if (user) {
    const isMatch = await bcrypt.compare(password, user.password)

    if (isMatch) {
      return transformToUserSafe(user)
    }
  }

  throw new Error('User not found')
}

/**
 * Update user online status
 *
 * @param userId User ID
 * @returns UserSafe
 */
export async function updateUserOnlineStatus(userId: User['id']): Promise<UserSafe> {
  const db = useDatabase()

  const user = await db.update(tables.users)
    .set({ onlineAt: new Date() })
    .where(eq(tables.users.id, userId))
    .returning()

  if (!user.length) {
    throw new Error('User not found')
  }

  return transformToUserSafe(user[0]!)
}

/**
 * Create a password reset
 *
 * @param userId
 * @returns PasswordReset
 */
export async function createPasswordReset(userId: PasswordResetDraft['userId']): Promise<PasswordReset> {
  const db = useDatabase()

  const resetDataSchema = z.string()
  const id = resetDataSchema.parse(userId)

  const passwordResetDraft = passwordResetDraftSchema.parse({
    userId: id,
    token: crypto.randomBytes(16).toString('hex'),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
  })

  // Expire all previous password resets
  await db.update(tables.passwordResets).set({ expiresAt: new Date() }).where(eq(tables.passwordResets.userId, userId))

  const rows = await db.insert(tables.passwordResets).values(passwordResetDraft).returning()

  if (!rows.length) {
    throw new Error('Password reset not created')
  }

  return rows[0]!
}

/**
 * Validate password reset token
 *
 * @param token
 * @returns UserSafe
 */
export async function validateUserPasswordResetToken(token: string): Promise<UserSafe> {
  const db = useDatabase()

  const resetDataSchema = z.string()
  const tokenData = resetDataSchema.parse(token)

  const reset = await db.query.passwordResets.findFirst({
    where: (reset, { eq }) => eq(reset.token, tokenData),
  })

  if (!reset || reset.expiresAt < new Date()) {
    throw new Error('Token expired')
  }

  return findUserById(reset.userId)
}

/**
 * Reset user password
 *
 * @param userId
 * @param password
 * @returns UserSafe
 */
export async function resetPassword(userId: User['id'], password: string): Promise<void> {
  const db = useDatabase()

  const resetPasswordSchema = z.object({
    userId: z.string(),
    password: z.string().min(6),
  })

  const { userId: id, password: newPassword } = resetPasswordSchema.parse({ userId, password })
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.id, id),
  })

  if (!user) {
    throw new Error('User not found')
  }

  await db.update(tables.users)
    .set({ password: await bcrypt.hash(newPassword, 10) })
    .where(eq(tables.users.id, id))

  await db.update(tables.passwordResets)
    .set({ expiresAt: new Date() })
    .where(eq(tables.passwordResets.userId, id))
}
