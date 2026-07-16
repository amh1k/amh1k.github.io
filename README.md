<div align="center">

# Abdul Moiz Hussain — Portfolio

A backend-first engineering portfolio built with Next.js and a custom Gruvbox-inspired visual system.

[View the live portfolio](https://abdulmoizhussain.me) · [Report an issue](https://github.com/amh1k/portfolioMinimal/issues)

</div>

## About the site

This portfolio presents selected full-stack and backend engineering work through
an editorial, responsive interface. It focuses on system design, APIs, real-time
communication, databases, testing, and measurable engineering outcomes while
keeping competitive programming and AI achievements as supporting experience.

The site includes light and dark Gruvbox themes, project screenshots, accessible
theme controls, load and scroll transitions, responsive project layouts, and a
static-export configuration suitable for serverless hosting.

## Featured work

The portfolio currently highlights five projects:

| Project | Focus |
| --- | --- |
| [Mithril Tiles](https://github.com/amh1k/mithril-tiles) | Real-time multiplayer drawing game with Go room actors, WebSockets, PostgreSQL, and a Next.js frontend |
| [Keepalive](https://github.com/amh1k/keepalive-monitoring) | Distributed uptime monitoring with BullMQ workers, Redis, tests, metrics, and incident tracking |
| [Algorithmic Analysis](https://github.com/amh1k/Daa-Project) | C++ divide-and-conquer algorithms with a Next.js visualization layer |
| [Durin’s Code](https://github.com/amh1k/DurinsCode) | C++ domain-specific language for interactive text adventures |
| [ScadrialAPI](https://github.com/amh1k/ScadrialAPI) | Production-minded Go REST API with PostgreSQL, authentication, RBAC, migrations, and tests |

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide icons
- Native CSS design tokens and responsive layouts
- Intersection Observer for scroll reveals
- Static export with unoptimized local images

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run lint
npm run build
```

`npm run build` generates a static export because `next.config.ts` uses
`output: "export"`. Next.js image optimization is disabled to keep local project
screenshots compatible with static hosting.

## Project structure

```text
app/                       Page, metadata, favicon, and global styles
components/                Theme control, project visuals, and scroll reveals
lib/portfolio-data.ts      Profile, project, skill, and achievement content
public/images/             Portrait and project screenshots
tokens.css                 Gruvbox-inspired design tokens
profile_readme.md          Separate GitHub profile README draft
```

## Deployment

The generated static site can be deployed to any static host. Set
`NEXT_PUBLIC_BASE_PATH` when deploying below a subpath; root-domain deployments
can leave it unset.

---

<div align="center">

Designed and built by [Abdul Moiz Hussain](https://github.com/amh1k).

</div>
