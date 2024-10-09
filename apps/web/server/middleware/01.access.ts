import { ERROR_ACCESS_ONLY_GUEST, ERROR_UNAUTHORIZED } from '#constants/errors'
import { isMatch } from 'matcher'

export default defineEventHandler(async (event) => {
  const onlyGuestRoutes: string[] = [
    '/api/auth*',
  ]
  const protectedRoutes: string[] = [
    '/api/users*',
    '/api/account*',
    '/api/projects*',
  ]

  const session = await getUserSession(event)

  if (session.user && isMatch(event.path, onlyGuestRoutes)) {
    throw errorResolver({}, ERROR_ACCESS_ONLY_GUEST)
  }

  if (!session.user && isMatch(event.path, protectedRoutes)) {
    throw errorResolver({}, ERROR_UNAUTHORIZED)
  }
})
