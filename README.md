<p align="center">
  <img src="./.github/banner.png" width="1600px" alt="Fincheck" />
</p>

## About

Fincheck is a platform for you to track your financial life.

Keep a history of all your transactions in one place.

## Technologies

![Technologies](https://skillicons.dev/icons?i=typescript,javascript,html,css,docker,git,prisma,nodejs,nestjs,react,vite,tailwindcss)

## Layout

Layouts and design system are available on **Figma**: https://www.figma.com/file/RRBEBWgyQZbEYPQhzOc1OQ/Fincheck

## Running the app

To install the dependencies and run the project, you must have [Node.js](https://nodejs.org/) installed on your machine. In this project, the LTS version [18.17.1](https://nodejs.org/en/blog/release/v18.17.1/) was used.

The PostgreSQL database can be launched locally with a [Docker Container](https://www.docker.com/resources/what-container/).

To clone this repository via terminal, use [Git](https://git-scm.com/).

<table>
<tr>
<td width="1600px" align="center">Git Clone</td>
</tr>
<tr>
<td width="1600px">

```bash
# Clone via HTTPS
git clone https://github.com/bonizario/fincheck.git

# Clone via SSH
git clone git@github.com:bonizario/fincheck.git

cd fincheck
```

</td>
</table>

<table>
<tr>
<td width="1600px" align="center">Docker</td>
</tr>
<tr>
<td width="1600px">

```bash
# Create the container on the default port
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

# Show all containers
docker ps -a
```

</td>
</table>

<table>
<tr>
<td width="1600px" align="center">API</td>
</tr>
<tr>
<td width="1600px">

```bash
# Install backend dependencies
cd api && pnpm install

# Running the api
pnpm start:dev
```

</td>
</table>

<table>
<tr>
<td width="1600px" align="center">Web</td>
</tr>
<tr>
<td width="1600px">

```bash
# Install frontend dependencies
cd web && pnpm install

# Running the website
pnpm dev
```

</td>
</table>

## Get in touch

I'd be happy to share some thoughts with you!

**LinkedIn**: https://www.linkedin.com/in/gabriel-bonizario/
