# Конфигурация

## Base url

<configuration-item
  type="string"
  env="APP_BASE_URL"
  required
/>

## Session password

<configuration-item
  type="string"
  env="APP_SESSION_PASSWORD"
  required
/>

## Allow registration

<configuration-item
  type="boolean"
  defaults="true"
  env="APP_AUTH_ALLOW_REGISTRATION"
/>

## Account allow delete

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_ACCOUNT_ALLOW_DELETE"
/>

## Email

### Host

<configuration-item
  type="string"
  example="smtp.gmail.com"
  env="APP_EMAIL_HOST"
/>

### Port

<configuration-item
  type="integer"
  example="587"
  env="APP_EMAIL_PORT"
/>

### From

<configuration-item
  type="string"
  example="no-reply@example.com"
  env="APP_EMAIL_FROM"
/>

### Auth user

<configuration-item
  type="string"
  example="no-reply@example.com"
  env="APP_EMAIL_AUTH_USER"
/>

### Auth password

<configuration-item
  type="string"
  env="APP_EMAIL_AUTH_PASSWORD"
/>

## Disable sponsor link

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_PUBLIC_DISABLE_SPONSOR_LINK"
/>

## Disable source link

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_PUBLIC_DISABLE_SOURCE_LINK"
/>
