import type { Transporter } from 'nodemailer'
import { createTransport } from 'nodemailer'
import type { SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import type { H3Event } from 'h3'
import { renderTemplate } from './template'
import type { Templates } from './types'

export type EmailSendOptions = Templates & {
  to: string
  from?: string
  subject: string
}

let transport: Transporter<SentMessageInfo> | null = null
const logger = useLogger('email')

export function useEmail(event?: H3Event) {
  const config = useRuntimeConfig(event)

  if (!transport) {
    logger.info('Creating email transport')

    transport = createTransport({
      service: config.emailService,
      auth: {
        user: config.emailAuthUser,
        pass: config.emailAuthPassword,
      },
    })
  }

  const send = async (options: EmailSendOptions): Promise<SentMessageInfo> => {
    logger.debug('Sending email', options)

    const template = await renderTemplate({
      template: options.template,
      params: {
        ...options.params,
        title: options.subject,
        logotypeImageLink: `${config.publicUrl}/email/logotype.png`,
      },
    } as Templates)

    return transport!.sendMail({
      from: options.from || config.emailFrom,
      to: options.to,
      subject: options.subject,
      html: template,
    })
  }

  return {
    send,
  }
}
