import type { Templates } from './types'
import changePasswordTemplate from './templates/change-password.hbs'
import projectsInviteTemplate from './templates/project-invite.hbs'

export async function renderTemplate(options: Templates): Promise<string> {
  let html: string | null = null

  switch (options.template) {
    case 'change-password':
      html = changePasswordTemplate(options.params)
      break
    case 'project-invite':
      html = projectsInviteTemplate(options.params)
      break
    default:
      throw new Error('Unknown template')
  }

  return html!
}
