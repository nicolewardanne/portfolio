# Nicole Ward — Portfolio

Personal portfolio site: Index, Resume, and Case Studies, built as a plain static
HTML/CSS/JS site (no build step) so it can be served directly by GitHub Pages.

## Structure

```
index.html      All three views (markup for Index / Resume / Case Studies)
css/style.css   Styles, including the mobile layout (breakpoint at 760px)
js/app.js       View switching (hash-based routing), live clock, date
assets/         Drop portrait.jpg and Nicole-Ward-Resume.pdf here (see assets/README.md)
```

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push to the `main` branch.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**, choose
   **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Add your custom domain under **Settings → Pages → Custom domain** — GitHub will
   commit a `CNAME` file automatically.
