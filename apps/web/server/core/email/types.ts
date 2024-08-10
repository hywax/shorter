export interface TemplateParams {
  logotypeImageLink?: string
  title?: string
}

export interface ChangePasswordTemplate {
  template: 'change-password'
  params: TemplateParams & {
    resetUrl: string
    emailTo: string
    token: string
  }
}

export interface ProjectInviteTemplate {
  template: 'project-invite'
  params: TemplateParams & {
    inviteUrl: string
  }
}

export type Templates = ChangePasswordTemplate | ProjectInviteTemplate
