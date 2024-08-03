import { NOT_IMPLEMENTED } from '#constants/errors'

export default defineEventHandler(() => {
  throw errorResolver({}, NOT_IMPLEMENTED)

  // const { createUser } = userService()
  //
  // try {
  //   const data = await readBody(event)
  //
  //   return await createUser(data)
  // } catch (e) {
  //   throw errorResolver(e, {
  //     ZOD: USER_INVALID_DATA,
  //     SQLITE_CONSTRAINT_UNIQUE: USER_ALL_READY_EXISTS,
  //   })
  // }
})
