/**
 * This script generates email templates for the app.
 * Initially templates are vue components that are transformed into handlebars templates.
 */
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { getTemplate, templates } from '@shorter/email-templates'

const outputDir = resolve('./server/core/email/templates')

for await (const template of templates) {
  const { html } = await getTemplate(template)

  await writeFile(resolve(outputDir, `${template}.hbs`), html)
}
