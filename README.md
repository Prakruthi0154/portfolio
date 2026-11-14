# Prakruthi B N — Quality Engineering Portfolio

A responsive Angular portfolio shaped around how Prakruthi thinks about software quality: investigate behavior, anticipate edge cases, and make digital experiences more reliable. It uses Angular standalone components, strict TypeScript, Signals, SCSS, and RxJS.

## Run locally

Requirements: Node.js 22+ and npm.

```bash
npm ci
npm start
```

Open `http://localhost:4200`. The contact section uses direct email, LinkedIn, and GitHub links; there is no form or backend to configure.

## Build and verify

```bash
npm run build
```

The optimized static site is written to `dist/prakruthi-portfolio/browser`. Angular’s production configuration includes hashed output and bundle-size budgets.

## Structure

```text
src/
├── app/
│   ├── core/services/         # Theme and app-wide behavior
│   ├── features/              # Home, hero, about, skills, journey, work,
│   │                           # learning, GitHub, education, and contact
│   ├── models/                # GitHub API types
│   ├── services/              # GitHub public API integration
│   ├── shared/
│   │   ├── components/        # Site navigation and footer
│   │   └── directives/        # Accessible reveal-on-scroll behavior
│   ├── app.config.ts
│   └── app.routes.ts          # Lazy-loaded landing route
├── index.html                 # SEO, Open Graph, and Person structured data
└── styles.scss                # Theme tokens, accessibility, global styles
public/
├── resume.pdf
├── sitemap.xml
├── robots.txt
├── _headers
└── _redirects
```

GitHub profile data is fetched from the public GitHub REST API at runtime. The page shows public repositories, repository languages, and public profile counts; GitHub's REST API does not expose a user's contribution heatmap without authenticated GraphQL access. API failures are reported in the GitHub panel, with a direct profile link as a fallback.

## Deploy to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, create a Pages project connected to that repository. Set the production branch to `main`.
3. Configure the Pages build command as `npm run build` and the output directory as `dist/prakruthi-portfolio/browser`. `wrangler.toml` contains the same project/output configuration.
4. Add these repository Actions secrets:
   - `CLOUDFLARE_API_TOKEN` — a Cloudflare API token permitted to deploy Pages.
   - `CLOUDFLARE_ACCOUNT_ID` — the account ID for the Pages project.
5. Push to `main`. The GitHub Actions workflow runs a production build on pull requests and deploys successful pushes to Cloudflare Pages.

For manual deployment, install Wrangler and run:

```bash
npx wrangler pages deploy dist/prakruthi-portfolio/browser --project-name=prakruthi-portfolio
```

The site metadata, canonical URL, sitemap, and robots file use `https://prakruthi-portfolio.pages.dev/`. If the Cloudflare Pages project uses another hostname or a custom domain, update those URLs in `src/index.html`, `public/sitemap.xml`, and `public/robots.txt`.

## Personalization

- Replace `public/resume.pdf` with an updated resume when needed.
- Update the content in the relevant standalone feature component under `src/app/features/`.
- The GitHub integration currently uses `Prakruthi0154`; keep it in sync with the public profile URL when changing accounts.
