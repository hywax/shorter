# Configuration

## Base url

This is the base public URL where the app will be running.

<configuration-item
  type="string"
  env="APP_BASE_URL"
  example="http://localhost:3000"
  required
/>

## Session password

The session protection password, 32 characters long, is required to encrypt the current user session.

<configuration-item
  type="string"
  env="APP_SESSION_PASSWORD"
  required
/>

## Allow registration

If `true` is set, any user will be able to register. If `false`, user self-registration is disabled,
and only the administrator can create users.

<configuration-item
  type="boolean"
  defaults="true"
  env="APP_AUTH_ALLOW_REGISTRATION"
/>

## Account allow delete

If `true` is set, any user can delete their profile. Absolutely everything associated with it is deleted.

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_ACCOUNT_ALLOW_DELETE"
/>

## Email

Setting up e-mail. It is necessary for sending emails about password recovery, notifications about invitations to the project.

::: tip
You can read more at [advanced email](../advanced/email.md)
:::

### Host

Outgoing mail server.

<configuration-item
  type="string"
  example="smtp.gmail.com"
  env="APP_EMAIL_HOST"
/>

### Port

Outgoing server port.

<configuration-item
  type="integer"
  example="587"
  env="APP_EMAIL_PORT"
/>

### From

Return Mail Address. Mail will be sent from this name. It is almost always the same as the login.

<configuration-item
  type="string"
  example="no-reply@example.com"
  env="APP_EMAIL_FROM"
/>

### Auth user

Login from the account from which the message will be sent. Some providers require a domain name, as shown in the example.

<configuration-item
  type="string"
  example="no-reply@example.com"
  env="APP_EMAIL_AUTH_USER"
/>

### Auth password

Password from the account from which the message will be sent.

<configuration-item
  type="string"
  env="APP_EMAIL_AUTH_PASSWORD"
/>

## Disable sponsor link

This option disables the sponsored link at the bottom of the app.

::: tip Пояснение
We give you the option to disable the sponsored link so other users don't see it.
In turn, please make any donation to support the project.

<boosty-link label="Sponsoring on Boosty" />
:::

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_PUBLIC_DISABLE_SPONSOR_LINK"
/>

## Disable source link

This option disables the link to the GitHub repository at the bottom of the application.

::: tip
We provide the option to disable the source link so that other users do not see it.
In turn, please make any donation to support the project.

<boosty-link label="Sponsoring on Boosty" />
:::

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_PUBLIC_DISABLE_SOURCE_LINK"
/>
