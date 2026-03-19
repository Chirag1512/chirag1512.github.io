# Portfolio (React + Vite)

## Run locally

- `npm install`
- `npm run dev`

## Deploy to GitHub Pages

1. In `package.json`, set:
	- `homepage` to `https://<your-github-username>.github.io/<your-repo-name>/`
2. Commit and push your project to GitHub.
3. Run deployment:
	- `npm run deploy`

This publishes the `dist` folder to the `gh-pages` branch.

## Enable Pages in GitHub

In your repository:

- Go to **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **gh-pages** and folder **/(root)**

After a minute or two, your site will be live at the `homepage` URL.
