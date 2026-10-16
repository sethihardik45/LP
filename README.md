# Astrologer pages

Each astrologer gets one folder containing one `index.html`. The folder name is the URL:

`https://sethihardik45.github.io/LP/<folder-name>`  →  e.g. `/LP/maaya`

## Add a new astrologer (all in the GitHub web UI)

1. Open `maaya/index.html` and click the **copy** icon (Copy raw file).
2. Go back to the repo root → **Add file → Create new file**.
3. In the name box type `new-name/index.html` (typing `/` creates the folder). Use lowercase letters, numbers and hyphens only.
4. Paste, then edit only the block marked **EDIT THIS BLOCK** (name, photo, button link, page title).
5. **Commit changes**. The page is live in ~1 minute at `/new-name/`.

To rename an existing page: open its `index.html` → pencil icon → change the path at the top (`old-name/index.html` → `new-name/index.html`) → commit.

## Photos

Upload to the same folder (**Add file → Upload files**) and set `photo: "photo.jpg"`, or use a full image URL.

## Shared design

`assets/style.css` and `assets/page.js` control the look of every page. Edit them once to change all pages.

## One-time GitHub Pages setup

Repo **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**. For a custom domain, set it in the same screen.

## Notes

- Root `/` is a blank noindex page; only the subpages are meant to be used.
- The `<title>`, description and `og:` tags are plain HTML so search engines and link previews can read them. The rest of the content is rendered by JavaScript.
- `maaya` and `raghu` are placeholder pages with dummy data; replace their data with the real details.
