import { ERROR_EMAIL_CREDENTIALS, ERROR_USER_INVALID_DATA, ERROR_USER_NOT_FOUND } from '#constants/errors'
import { useEmail } from '#core/email'
import { createPasswordReset, findUserByEmail } from '#core/services/user'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event)
    const { send } = useEmail()

    const data = await readBody(event)
    const user = await findUserByEmail(data.email)
    const passwordReset = await createPasswordReset(user.id)

    await send({
      to: user.email,
      subject: 'Change password',
      template: 'change-password',
      params: {
        resetUrl: `${config.baseUrl}/auth/reset?token=${passwordReset.token}`,
        emailTo: user.email,
        token: passwordReset.token,
      },
    })
  } catch (e) {
    throw errorResolver(e, {
      ERROR_USER_NOT_FOUND,
      ZOD: ERROR_USER_INVALID_DATA,
      EMAIL_BAD_CREDENTIALS: ERROR_EMAIL_CREDENTIALS,
    })
  }
})
