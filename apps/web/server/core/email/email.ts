import type { Transporter } from 'nodemailer'
import { createTransport } from 'nodemailer'
import type { SentMessageInfo } from 'nodemailer/lib/smtp-pool'
import type { H3Event } from 'h3'
import { renderTemplate } from './template'
import type { Templates } from './types'
import { EmailError } from './errors'

export type EmailSendOptions = Templates & {
  to: string
  from?: string
  subject: string
}

let transport: Transporter<SentMessageInfo> | null = null
const logger = useLogger('email')

export function useEmail(event?: H3Event) {
  const config = useRuntimeConfig(event)

  if (!config.emailHost || !config.emailPort || !config.emailAuthUser || !config.emailAuthPassword) {
    throw new EmailError('Email configuration is missing', 'EMAIL_BAD_CREDENTIALS')
  }

  if (!transport) {
    logger.info('Creating email transport')

    transport = createTransport({
      pool: true,
      host: config.emailHost,
      port: Number.parseInt(config.emailPort),
      auth: {
        user: config.emailAuthUser,
        pass: config.emailAuthPassword,
      },
    })
  }

  const send = async (options: EmailSendOptions): Promise<SentMessageInfo> => {
    logger.debug('Sending email', options)

    try {
      const template = await renderTemplate({
        template: options.template,
        params: {
          ...options.params,
          title: options.subject,
          logotypeImageLink: `${config.baseUrl}/email/logotype.png`,
        },
      } as Templates)

      return transport!.sendMail({
        from: options.from || config.emailFrom,
        to: options.to,
        subject: options.subject,
        html: template,
      })
    } catch (e) {
      logger.error('Error sending email', e)
      throw new EmailError('Error sending email', 'EMAIL_SEND_ERROR')
    }
  }

  return {
    send,
  }
}
