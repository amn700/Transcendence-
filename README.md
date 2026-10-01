*This project has been created as part of the 42 curriculum by <login1>, <login2>, <login3>, <login4>, <login5>.*

# Skill Swap

## Description

Skill Swap lets people teach skills to earn credits and spend credits to learn from others.

## Instructions

Prerequisites: Docker Desktop with Docker Compose. Copy the local configuration and start the development stack:

```sh
cp .env.example .env
docker compose up --build
```

Open https://localhost. The health endpoint is https://localhost/api/health. Caddy uses a local development certificate, so browsers will initially show a warning. Trust its root certificate with `docker compose cp proxy:/data/caddy/pki/authorities/local/root.crt .`, then import `root.crt` into your operating system/browser trust store. Alternatively, run `mkcert -install && mkcert localhost`, mount the resulting certificate and key into the proxy container, and replace `tls internal` in the Caddyfile with `tls /certs/localhost.pem /certs/localhost-key.pem`.

## Resources

Placeholder.

## Team Information

Placeholder.

## Project Management

Placeholder.

## Technical Stack

React, TypeScript, Vite, Tailwind CSS, NestJS, PostgreSQL 16, TypeORM, Caddy, and Docker Compose.

## Database Schema

Placeholder.

## Features List

Placeholder.

## Modules

Placeholder.

## Individual Contributions

Placeholder.
