import process from 'node:process'
import { type Database, createConnection } from './connection'

let instance: Database | null = null
const logger = useLogger('database')

export function useDatabase() {
  if (!instance) {
    logger.info('Creating new connection')
    instance = createConnection({
      cwd: process.cwd(),
    })
  }

  return instance
}