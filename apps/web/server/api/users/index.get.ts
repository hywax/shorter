import { userService } from '#services'

export default defineEventHandler(async () => {
  const { getUsers } = userService()

  try {
    return await getUsers()
  } catch (e) {
    throw errorResolver(e)
  }
})
