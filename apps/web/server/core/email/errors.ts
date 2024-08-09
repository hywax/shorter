type ErrorMapCode = 'EMAIL_BAD_CREDENTIALS' | 'EMAIL_SEND_ERROR'

export class EmailError extends Error {
  code: ErrorMapCode

  constructor(message: string, code: ErrorMapCode) {
    super(message)

    this.name = 'EmailError'
    this.code = code
  }
}
