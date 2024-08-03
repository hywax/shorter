import { ZodError } from 'zod'
import { SqliteError } from 'better-sqlite3'
import defu from 'defu'
import * as errors from '#constants/errors'

type ErrorMapCodes = Record<string, string>

interface CustomError {
  statusCode: number
  statusMessage: string
  data: {
    [key: string]: unknown
    code: string
  }
}

/**
 * Parse error string into custom error object.
 */
function parseErrorString(errorString: string): CustomError {
  const [code, message] = errorString.split(':')

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
    DEFAULT: errors.INTERNAL_ERROR,
    ZOD: errors.BAD_REQUEST,
    SQLITE: errors.INTERNAL_ERROR,
  })

  if (Object.hasOwn(codesMap, 'ALL')) {
    errorString = codes.ALL
  } else if (exception instanceof ZodError) {
    errorString = codesMap.ZOD
  } else if (exception instanceof SqliteError) {
    errorString = Object.hasOwn(codesMap, exception.code) ? codesMap[exception.code] : codesMap.SQLITE
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
  if (!codes) {
    codes = {
      ALL: errors.INTERNAL_ERROR,
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