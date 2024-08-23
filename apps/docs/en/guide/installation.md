# Installation

## Docker

Shorter uses Docker containers as delivery. Since the code is stored on GitHub, so are the containers themselves.
You can use absolutely any method to run these containers.

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

All possible paths into the container.

| Path                             | Type | Description                |
|----------------------------------|------|----------------------------|
| `/app/data/db.sqlite3`           | file | Database SQLite            |
| `/app/public/email/logotype.png` | file | Logotype 150x150 for email |

## Nightly release

The nightly release channel allows you to use Shorter built directly from the latest commits in the repository.
More details can be found [here](../advanced/nightly-release.md)
