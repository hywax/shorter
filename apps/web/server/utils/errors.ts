import { ZodError } from 'zod'
import { SqliteError } from 'better-sqlite3'
import defu from 'defu'
import { ERROR_BAD_REQUEST, ERROR_INTERNAL_ERROR } from '#constants/errors'
import { EmailError } from '#core/email'

type ErrorMapCodes = Record<string, string>

interface CustomError {
  statusCode: number
  statusMessage: string
  data: {
    [key: string]: unknown
    code: string
  }
}

const logger = useLogger('error')

/**
 * Parse error string into custom error object.
 */
function parseErrorString(errorString: string): CustomError {
  const [code, message] = errorString.split(':')

  if (!code || !message) {
    throw new Error('Invalid error string format')
  }

  return {
    statusCode: Number.parseInt(code.slice(0, 3), 10),
    statusMessage: message.trim(),
    data: {
      code: code.trim(),
    },
  }
}

/**
 * Get custom error code based on the exception.
 */
function getErrorCode(exception: unknown, codes: ErrorMapCodes): string {
  let errorString: string

  const codesMap = defu(codes, {
    DEFAULT: ERROR_INTERNAL_ERROR,
    ZOD: ERROR_BAD_REQUEST,
    SQLITE: ERROR_INTERNAL_ERROR,
    EMAIL: ERROR_INTERNAL_ERROR,
  })

  if (Object.hasOwn(codesMap, 'ALL')) {
    errorString = codes.ALL!
  } else if (exception instanceof ZodError) {
    errorString = codesMap.ZOD
  } else if (exception instanceof SqliteError) {
    errorString = Object.hasOwn(codesMap, exception.code) ? codesMap[exception.code]! : codesMap.SQLITE
  } else if (exception instanceof EmailError) {
    errorString = Object.hasOwn(codesMap, exception.code) ? codesMap[exception.code]! : codesMap.EMAIL
  } else if (exception instanceof Error) {
    const normalizedMessage = exception.message.trim().replaceAll(' ', '_').toUpperCase()
    const errorMaybeCode = `ERROR_${normalizedMessage}`

    errorString = Object.hasOwn(codesMap, errorMaybeCode) ? codesMap[errorMaybeCode]! : codesMap.DEFAULT
  } else {
    errorString = codesMap.DEFAULT
  }

  return errorString
}

/**
 * Retrieve additional parameters from the Error. Necessary to enrich the returned error object.
 */
function getAdditionErrorData(exception: unknown): Record<string, unknown> {
  if (exception instanceof ZodError) {
    return {
      issues: exception.issues,
    }
  }

  return {}
}

/**
 * Error resolver function. It is used to convert an exception into a custom error object.
 */
export function errorResolver(exception: unknown, codes?: ErrorMapCodes | string) {
  logger.error(exception)

  if (!codes) {
    codes = {
      ALL: ERROR_INTERNAL_ERROR,
    }
  } else if (typeof codes === 'string') {
    codes = {
      ALL: codes,
    }
  }

  const errorCode = getErrorCode(exception, codes)
  const additionErrorData = getAdditionErrorData(exception)
  const customError = defu(
    parseErrorString(errorCode),
    { data: additionErrorData },
  )

  return createError(customError)
}
