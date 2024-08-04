import { ERROR_NOT_IMPLEMENTED } from '#constants/errors'

export default defineEventHandler(() => {
  /**
   * This route should email the user's email with a link to the password reset page.
   * After clicking the link, the user should enter a new password.
   */
  throw errorResolver({}, ERROR_NOT_IMPLEMENTED)
})
