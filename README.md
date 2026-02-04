<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1prcwCN69_ffnUBsEVrsv9t_8y0hSU6Tk

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

```

## Publish to GitHub Pages ✅

1. Open `package.json` and replace `<USERNAME>` and `<REPO>` in the `repository.url` and `homepage` fields.
2. Create a GitHub repository and push your `main` branch:
   - `git init` (if needed)
   - `git add .`
   - `git commit -m "chore: initial commit"`
   - `git branch -M main`
   - `git remote add origin https://github.com/muhammed-zaghloul/united-game.git`
   - `git push -u origin main`
3. The workflow at `.github/workflows/pages.yml` will build and publish the site to GitHub Pages on push to `main`. The published URL will be `https://muhammed-zaghloul.github.io/united-game/`. Allow a few minutes for the first publish to complete.

> Tip: If you use a custom domain or different branch, update the workflow or GitHub Pages settings accordingly.

## License 📄

This project is licensed under the **MIT License** — see the `LICENSE` file for details.


**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
