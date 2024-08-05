import { z } from 'zod'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { tables, useDatabase } from '#db'
import type { User } from '#db'

interface AccountChangePasswordData {
  userId: User['id']
  currentPassword: string
  newPassword: string
}

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
