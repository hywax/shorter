export default defineNitroPlugin(async () => {
  if (!import.meta.dev) {
    return
  }

  const logger = useLogger('plugin:database')
  const tasks = [
    'db:migrate',
    'db:seed',
  ]

  for (const task of tasks) {
    const { result } = await runTask<string>(task)

    logger.log(`Task ${task} completed with result: ${result}`)
  }
})
