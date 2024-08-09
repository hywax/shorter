import { getUsersList } from '#core/services/user'

export default defineEventHandler(async () => {
  try {
    return await getUsersList()
  } catch (e) {
    throw errorResolver(e)
  }
})
