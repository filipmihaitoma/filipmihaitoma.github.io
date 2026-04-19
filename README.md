# filipmihaitoma.github.io

Personal academic website for **Filip-Mihai Toma, PhD** — built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) and
deployed to GitHub Pages as a user site at
<https://filipmihaitoma.github.io>.

Four pages, all statically generated:

- `/` — Home / About
- `/cv` — Curriculum Vitae (with a PDF download button)
- `/publications` — Peer-reviewed publications and work in progress
- `/teaching` — Current and past courses

<!-- ---

## Local preview

Requires Node ≥ 22.12.

```sh
npm install
npm run dev
# open http://localhost:4321
```

Production build:

```sh
npm run build
npm run preview
```

## Replacing the headshot and PDF

- **Headshot** — replace `public/photo.jpg` with a 1:1 image (≥ 520×520 recommended).
  If the file is missing, the Home page renders a neutral "FMT" placeholder.
- **CV PDF** — replace `public/cv/CV_FilipMihaiToma.pdf`. Filename must stay
  the same, or update `pdfHref` in `src/content/cv.md`.

## Editing the content

All copy for the four pages lives in three Markdown front-matter files — **you
don't need to touch any `.astro` template** to update content.

- `src/content/cv.md` — CV sections (profile, appointments, education, skills,
  grants, etc.). Mirror of `CV_Toma_Bocconi.tex`. Supports `**bold**` and
  `*italic*` inline.
- `src/content/publications.md` — `published` and `wip` arrays of papers.
- `src/content/teaching.md` — teaching sections and courses.

Other things you'll likely want to fill in:

- Social profile URLs in [`src/components/SocialIcons.astro`](src/components/SocialIcons.astro)
  (search for `TODO` — there are 5 `#` placeholders).
- `sameAs` array for the JSON-LD Person schema in
  [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) (search for `TODO`).

## Deploying to GitHub Pages (user site)

1. Create a **public** repo named exactly `filipmihaitoma.github.io` under your
   GitHub account.
2. From this folder:

   ```sh
   git init
   git add .
   git commit -m "feat: scaffold academic site for Filip-Mihai Toma"
   git branch -M main
   git remote add origin https://github.com/mihaitoma/filipmihaitoma.github.io.git
   git push -u origin main
   ```

3. GitHub → the repo → **Settings → Pages** → under **Source**, select
   **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`.
   The first build will publish the site at
   <https://filipmihaitoma.github.io>.

## Attaching a custom domain later

1. Create a `public/CNAME` file containing just your domain (e.g.
   `filipmihaitoma.com`). Astro copies it into `dist/` at build time.
2. At your DNS provider, add A records for the apex pointing at GitHub's
   Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`) and/or a CNAME record for `www` pointing to
   `mihaitoma.github.io`.
3. GitHub → repo → **Settings → Pages** → fill in the custom domain and
   wait for the TLS certificate to issue.
4. Update `site` in [`astro.config.mjs`](astro.config.mjs) to your new
   canonical URL so the sitemap and canonical tags match.

## Stack

- Astro 6 (static output), TypeScript strict
- Tailwind CSS v4 via `@tailwindcss/vite`
- `@astrojs/sitemap`, `@astrojs/mdx`
- Self-hosted fonts: `@fontsource/inter`, `@fontsource/source-serif-4`
- Class-based dark mode, persisted in `localStorage` -->
