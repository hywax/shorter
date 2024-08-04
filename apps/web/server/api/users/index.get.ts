import { getUsersList } from '#services/user'

export default defineEventHandler(async () => {
  try {
    return await getUsersList()
  } catch (e) {
    throw errorResolver(e)
  }
})
