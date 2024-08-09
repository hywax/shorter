import { createUser, getUsersList } from '#core/services/user'

/**
 * This task is necessary for initial database configuration.
 * - Add user `admin` if the list of users is empty.
 */
export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Seed the database',
  },
  async run() {
    const users = await getUsersList()

    if (users.length) {
      return {
        result: 'Skipped seeding, database is not empty',
      }
    }

    const user = await createUser({
      name: 'Admin',
      email: 'admin@example.com',
      role: 'admin',
      password: 'password',
    })

    return {
      result: `Database seeded, ${user.name} user created`,
    }
  },
})
