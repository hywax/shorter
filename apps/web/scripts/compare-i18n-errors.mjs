/**
 * This script is used to compare errors from server constants with the i18n of the application
 * Necessary for up-to-date translation of all errors.
 */

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'

function parseErrorArray(errorArray) {
  const errorObject = {}

  errorArray.forEach((errorString) => {
    const [code, message] = errorString.split(':')
    errorObject[code.trim()] = message.trim()
  })

  return errorObject
}

/**
 * Define the paths to the files
 */
const inputConstants = resolve('./server/constants/errors.ts')
const inputTranslation = resolve('./app/locales/en-US.json')

/**
 * Because errors is a `.ts` file, nodejs can't load it.
 * To avoid using third-party packages, you have to parse the file yourself
 */
const buffer = await readFile(inputConstants, 'utf-8')
const errorsParsed = await import(`data:text/javascript,${buffer.replace(/\n/g, ';')}`)
const errorsList = Object.values(errorsParsed)
const errorsMap = parseErrorArray(errorsList)

const translationJson = await readFile(inputTranslation, 'utf-8')
const translation = JSON.parse(translationJson)

const absentErrors = []

for (const error in errorsMap) {
  if (!translation.error.codes[error]) {
    absentErrors.push(`${error}: ${errorsMap[error]}`)
  }
}

if (absentErrors.length) {
  console.log('The following errors are not present in the translation:')
  console.log(absentErrors.map((error) => `  - ${error}`).join('\n'))
  process.exit(1)
}

console.log('All errors are present in the translation')
