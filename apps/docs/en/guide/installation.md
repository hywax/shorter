# Installation

## Docker

Shorter uses Docker containers as delivery. Since the code is stored on GitHub, so are the containers themselves.
You can use absolutely any method to run these containers.

### Docker run:

```shell
docker run -p 3000:3000 -v ./data/:/app/data ghcr.io/hywax/shorter-web
```

### Docker compose:
```yaml
version: '3.8'

services:
  web:
    image: ghcr.io/hywax/shorter-web:latest
    restart: unless-stopped
    ports:
      - '3000:3000'
    volumes:
      - ./data:/app/data
```

### Docker volumes

All possible paths into the container.

| Path                             | Type | Description                |
|----------------------------------|------|----------------------------|
| `/app/data/db.sqlite3`           | file | Database SQLite            |
| `/app/public/email/logotype.png` | file | Logotype 150x150 for email |
