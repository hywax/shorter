import { isMatch } from 'matcher'
import { getServerSession } from '#auth'
import { UNAUTHORIZED } from '#constants/errors'

export default defineEventHandler(async (event) => {
  const protectedRoutes: string[] = [
    '/api/users*',
  ]

  if (!isMatch(event.path, protectedRoutes)) {
    return
  }

  const session = await getServerSession(event)
  if (!session) {
    throw errorResolver({}, UNAUTHORIZED)
  }
})
