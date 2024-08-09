import { z } from 'zod'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { tables, useDatabase } from '#core/database'
import type { User } from '#core/database'

interface AccountChangePasswordData {
  userId: User['id']
  currentPassword: string
  newPassword: string
}

interface AccountGeneralData {
  userId: User['id']
  name: string
  email: string
}

interface AccountDeleteData {
  userId: User['id']
  password: string
}

/**
 * Change self account password
 *
 * @param data
 * @returns void
 */
export async function accountChangePassword(data: AccountChangePasswordData): Promise<void> {
  const db = useDatabase()
  const changePasswordSchema = z.object({
    userId: z.string(),
    currentPassword: z.string().min(6),
    newPassword: z.string().min(6),
  })

  const { userId, currentPassword, newPassword } = changePasswordSchema.parse(data)
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.id, userId),
  })

  if (!user) {
    throw new Error('User not found')
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password)

  if (!isMatch) {
    throw new Error('Invalid password')
  }

  await db.update(tables.users)
    .set({ password: await bcrypt.hash(newPassword, 10) })
    .where(eq(tables.users.id, userId))
}

/**
 * Change self account general information
 *
 * @param data
 * @returns void
 */
export async function changeGeneralInfo(data: AccountGeneralData): Promise<void> {
  const db = useDatabase()
  const changeGeneralInfoSchema = z.object({
    userId: z.string(),
    name: z.string().min(3),
    email: z.string().email(),
  })

  const { userId, name, email } = changeGeneralInfoSchema.parse(data)
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.id, userId),
  })

  if (!user) {
    throw new Error('User not found')
  }

  await db.update(tables.users)
    .set({ name, email })
    .where(eq(tables.users.id, userId))
}

/**
 * Delete self account
 *
 * @param data
 * @returns void
 */
export async function accountDelete(data: AccountDeleteData): Promise<void> {
  const db = useDatabase()
  const deleteAccountSchema = z.object({
    userId: z.string(),
    password: z.string().min(6),
  })

  const { userId, password } = deleteAccountSchema.parse(data)
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.id, userId),
  })

  if (!user) {
    throw new Error('User not found')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Invalid password')
  }

  await db.delete(tables.users)
    .where(eq(tables.users.id, userId))
}
