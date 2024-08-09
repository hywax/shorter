import { ERROR_EMAIL_CREDENTIALS, ERROR_NOT_IMPLEMENTED } from '#constants/errors'

export default defineEventHandler(() => {
  /**
   * This route should email the user's email with a link to the password reset page.
   * After clicking the link, the user should enter a new password.
   */
  throw errorResolver({}, {
    DEFAULT: ERROR_NOT_IMPLEMENTED,
    EMAIL_BAD_CREDENTIALS: ERROR_EMAIL_CREDENTIALS,
  })

  // const { send } = useEmail()
  // send({
  //   to: '',
  //   subject: 'Change password',
  //   template: 'change-password',
  //   params: {
  //     resetUrl: '',
  //     emailTo: '',
  //   },
  // })
})
