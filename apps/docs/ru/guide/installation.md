# Установка

## Docker

В качестве поставки Shorter использует Docker контейнеры. Так как код хранится на Github, то и сами контейнеры тоже.
Вы можете использовать абсолютно любой метод запуска этих контейнеров.

### Docker run

```shell
docker run -p 3000:3000 -v ./data/:/app/data ghcr.io/hywax/shorter-web
```

### Docker compose
```yaml
version: '3.8'

services:
  web:
    image: ghcr.io/hywax/shorter-web:latest
    restart: unless-stopped
    ports:
      - '3000:3000'
    environment:
      - APP_BASE_URL=http://localhost:3000
      - APP_SESSION_PASSWORD=password-with-at-least-32-characters
    volumes:
      - ./data:/app/data
```

### Docker volumes

Все возможные пути в контейнер.

| Путь                             | Тип  | Описание                  |
|----------------------------------|------|---------------------------|
| `/app/data/db.sqlite3`           | Файл | База данных SQLite        |
| `/app/public/email/logotype.png` | Файл | Логотип 150x150 для email |

## Ночной канал

Канал ночных релизов позволяет использовать Shorter, собранный непосредственно из последних коммитов в репозитории.
Подробнее можно ознакомиться [здесь](../advanced/nightly-release.md)
