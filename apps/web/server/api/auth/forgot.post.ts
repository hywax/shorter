import { NOT_IMPLEMENTED } from '#constants/errors'

export default defineEventHandler(() => {
  throw errorResolver({}, NOT_IMPLEMENTED)
})
