<p align="center">
  <img src="./.github/banner.png" width="1600px" alt="Fincheck" />
</p>

## About

Fincheck is a platform for you to track your financial life and keep a history of all your transactions in one place.

## Technologies

![Technologies](https://skillicons.dev/icons?i=typescript,javascript,html,css,docker,git,prisma,nodejs,nestjs,react,vite,tailwindcss)

## Design

The design system is available on **[Figma](https://www.figma.com/file/RRBEBWgyQZbEYPQhzOc1OQ/Fincheck)**.

## Running the app

#### Clone

```bash
git clone https://github.com/bonizario/fincheck.git && cd fincheck
```

To clone a Git repository using the SSH protocol, an SSH key must be [added to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) beforehand.

```bash
git clone git@github.com:bonizario/fincheck.git && cd fincheck
```

#### Install dependencies

[Node.js](https://nodejs.org/) is required to install dependencies and run the project.

This project uses the [pnpm](https://pnpm.io/) package manager.

```bash
npm install -g pnpm
```

```bash
cd api && pnpm install && cd ..
```

```bash
cd web && pnpm install && cd ..
```

#### Run PostgreSQL with Docker

The database can be launched locally with a [Docker Container](https://www.docker.com/resources/what-container/).

Check the official documentation to install the [Docker Engine](https://docs.docker.com/engine/install/ubuntu/).

```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

#### Setup environment variables

```bash
cp api/.env.example api/.env
```

```bash
cp web/.env.example web/.env
```

If PostgreSQL was started following the instructions above, there's no need to change the `DATABASE_URL`.

For testing purposes in a local development environment, it is okay to leave `JWT_SECRET` with the example value.

Note that in a real-world application, this variable **must be completely secret**, since all JWT authentication is based on it.

There are also specific development variables for debugging and testing React Query features on the front end.

```bash
cp web/.env.development.example web/.env.development
```

`VITE_API_RESPONSE_SLEEP_MS` simulates a delay on each API call. This makes it easier to ensure cache invalidation and loading states are handled correctly.

`VITE_SHOW_REACT_QUERY_DEVTOOLS` enables a FAB button that allows you to show and hide React Query `devtools`.

#### Running the API

```bash
pnpm start:dev
```

#### Running the front end

```bash
pnpm dev
```

## Get in touch

I'd be happy to share some thoughts with you!

**LinkedIn**: https://www.linkedin.com/in/gabriel-bonizario/
