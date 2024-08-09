export type Template = 'change-password' | 'project-invite'

export interface TemplateRendered {
  html: string
  text: string
}

export function getTemplate(template: Template): Promise<TemplateRendered>

export const templates: Template[]
