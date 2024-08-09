import { omit } from 'lodash-es'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { tables, useDatabase, userDraftSchema } from '#core/database'
import type { User, UserDraft } from '#core/database'

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
