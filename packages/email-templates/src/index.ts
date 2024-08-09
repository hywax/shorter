import type { Component } from 'vue'
import { render } from '@vue-email/render'
import type { Template, TemplateRendered } from '../types'
import ChangePasswordTemplate from './templates/change-password.vue'
import ProjectInviteTemplate from './templates/project-invite.vue'

export const templates = ['change-password', 'project-invite'] as const

export async function getTemplate(name: Template): Promise<TemplateRendered> {
  let component: Component | null = null

  switch (name) {
    case 'change-password':
      component = ChangePasswordTemplate
      break
    case 'project-invite':
      component = ProjectInviteTemplate
      break
    default:
      throw new Error(`Unknown template ${name}`)
  }

  const html = await render(component, {}, { pretty: true })
  const text = await render(component, {}, { plainText: true })

  return {
    html,
    text,
  }
}
