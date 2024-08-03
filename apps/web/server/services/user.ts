import omit from 'lodash/omit'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { tables, useDatabase, userDraftSchema } from '#db'
import type { User, UserDraft, UserSafe } from '#db'

function transformToUserSafe(user: User): UserSafe {
  return omit(user, 'password')
}

export function userService() {
  const db = useDatabase()
  const logger = useLogger('service:user')

  return {
    async findByCredentials(email: string, password: string): Promise<UserSafe | undefined> {
      logger.debug('call findByCredentials', { email, password })

      const user = await db.query.users.findFirst({
        where: (user, { eq }) => eq(user.email, email),
      })

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
          return omit(user, 'password') as UserSafe
        }
      }

      return undefined
    },
    async markUserOnline(id: string): Promise<UserSafe> {
      logger.debug('call setUserOnline', { id })

      const user = await db.update(tables.users)
        .set({ onlineAt: new Date() })
        .where(eq(tables.users.id, id))
        .returning()

      return transformToUserSafe(user[0])
    },
    async getUsers(): Promise<UserSafe[]> {
      logger.debug('call getUsers')

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
    },
    async createUser(data: UserDraft): Promise<UserSafe> {
      logger.debug('call createUser', { data })

      const userDraft = userDraftSchema.parse(data)
      const rows = await db.insert(tables.users).values({
        ...userDraft,
        password: await bcrypt.hash(data.password, 10),
      }).returning()

      return transformToUserSafe(rows[0])
    },
  }
}
