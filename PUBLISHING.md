# Publishing Guide

This document covers how to publish this project to GitHub and basic CI/deployment notes.

## 1) Push to GitHub ✅
1. Create a repository on GitHub and add it as a remote: `git remote add origin <repo-url>`.
2. Push your branch: `git push -u origin main` (or `master`/your main branch).

## 2) CI notes ⚙️
- The repository includes a basic CI workflow (in `.github/workflows/ci.yml`) that runs on push and pull_request.
- CI runs on Node 18, caches npm, installs dependencies with `npm ci`, runs `npm run build`, and uploads the build output (`dist`) as an artifact.
- If you need to use environment secrets (for example, `GEMINI_API_KEY`), add them in the repository settings: Settings → Secrets → Actions, and reference them in workflows with `${{ secrets.YOUR_SECRET_NAME }}`.

## 3) Don’t commit local env files ⚠️
- Keep local secrets out of the repo. Copy `.env.example` to `.env.local` and fill values locally.
- Add `.env.local` to `.gitignore` so it is never accidentally committed.

## 4) GitHub Pages / base settings for static hosting 📦
- Vite's default build output is the `dist` folder.
- This repo is configured with `base: './'` in `vite.config.ts`, which works on GitHub Pages project sites (served from `https://<username>.github.io/<repo-name>/`).

- Alternatively, some people set `homepage` in `package.json` (primarily for Create React App). For Vite, prefer `base` in `vite.config.ts`.
- To deploy to GitHub Pages you can:
  - Use the `gh-pages` npm package to publish the `dist` folder to the `gh-pages` branch, or
  - Use an Action such as `peaceiris/actions-gh-pages` to automatically publish on push to `main`/on tag.

## 4.1) Automatic GitHub Pages deployment ✅
- This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.
- It builds the project and deploys `dist` to GitHub Pages when you push to `main` (and also supports manual runs via "Run workflow").
- In GitHub: Settings → Pages → set Source to "GitHub Actions".

## 5) Example: add `GEMINI_API_KEY` for CI
- Add `GEMINI_API_KEY` in the repository Secrets (Settings → Secrets → Actions).
- In future workflows that need the key, reference via `${{ secrets.GEMINI_API_KEY }}` and expose it as an env var to the step.

---

If you want, I can add a `deploy` GitHub Action that automatically publishes the `dist` folder to GitHub Pages and demonstrates how to consume repository secrets.