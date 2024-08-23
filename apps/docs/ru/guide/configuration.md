# Конфигурация

## Базовый url

Это базовый публичный URL-адрес, на котором будет запущено приложение.

<configuration-item
  type="string"
  env="APP_BASE_URL"
  example="http://localhost:3000"
  required
/>

## Пароль сессии

Пароль для защиты сессии, длинной 32 символа, необходим для шифрования текущей сессии пользователей.

<configuration-item
  type="string"
  env="APP_SESSION_PASSWORD"
  required
/>

## Разрешить регистрацию

При значении `true` любой пользователь сможет зарегистрироваться. При значении `false` самостоятельная регистрация
пользователя отключается, при этом создать пользователей может только администратор.

<configuration-item
  type="boolean"
  defaults="true"
  env="APP_AUTH_ALLOW_REGISTRATION"
/>

## Разрешить удаление учетной записи

При значении `true` любой пользователь может удалить свой профиль. При этом удаляется абсолютно все, что с ним связано.

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_ACCOUNT_ALLOW_DELETE"
/>

## Email

### Хост

<configuration-item
  type="string"
  example="smtp.gmail.com"
  env="APP_EMAIL_HOST"
/>

### Порт

<configuration-item
  type="integer"
  example="587"
  env="APP_EMAIL_PORT"
/>

### От кого

<configuration-item
  type="string"
  example="no-reply@example.com"
  env="APP_EMAIL_FROM"
/>

### Логин

<configuration-item
  type="string"
  example="no-reply@example.com"
  env="APP_EMAIL_AUTH_USER"
/>

### Пароль

<configuration-item
  type="string"
  env="APP_EMAIL_AUTH_PASSWORD"
/>

## Отключить спонсорскую ссылку

Данная опция отключает спонсорскую ссылку внизу приложения.

::: tip Пояснение
Мы даем возможность отключить спонсорскую ссылку, чтобы другие пользователи ее не видели.
Взамен просим сделать любое пожертвование в поддержку проекта.

<boosty-link label="Поддержать на Boosty" />
:::

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_PUBLIC_DISABLE_SPONSOR_LINK"
/>

## Отключить ссылку на источник

Данная опция отключает ссылку на GitHub репозиторий внизу приложения.

::: tip Пояснение
Мы даем возможность отключить ссылку на источник, чтобы другие пользователи ее не видели.
Взамен просим сделать любое пожертвование в поддержку проекта.

<boosty-link label="Поддержать на Boosty" />
:::

<configuration-item
  type="boolean"
  defaults="false"
  env="APP_PUBLIC_DISABLE_SOURCE_LINK"
/>
