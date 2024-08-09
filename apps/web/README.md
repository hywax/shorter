## Env
| Name                        | Default      | Description                                                          |
|-----------------------------|--------------|----------------------------------------------------------------------|
| APP_BASE_URL                | **required** | The base URL of the application, e.g. `http://localhost:3000`        |
| APP_SESSION_PASSWORD        | **required** | Password for session encryption, must be at least 32 characters long |
| APP_AUTH_ALLOW_REGISTRATION | `true`       | Allow users to register                                              |
| APP_ACCOUNT_ALLOW_DELETE    | `false`      | Allow users to delete their account                                  |
| APP_DISABLE_SPONSOR_LINK    | `false`      | Disable sponsor link in footer                                       |
| APP_DISABLE_SOURCE_LINK     | `false`      | Disable source link in footer                                        |
| APP_EMAIL_SERVICE           | `null`       | Email service to use for sending emails, e.g. `gmail`, `yandex` ...  |
| APP_EMAIL_FROM              | `null`       | Email address to send emails from                                    |
| APP_EMAIL_AUTH_USER         | `null`       | Email service username                                               |
| APP_EMAIL_AUTH_PASSWORD     | `null`       | Email service password                                               |
