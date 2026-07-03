# Paradise Nursery 🌱

A React + Redux shopping application for browsing houseplants and managing a shopping cart. Built with Vite, React 18, and Redux Toolkit.

**Live demo:** https://strydom-louis.github.io/e-plantShopping/

## Features

- **Landing page** — background image, company intro, and a *Get Started* button.
- **Product listing page** — 13 houseplants organised into 4 categories (Air Purifying, Aromatic, Medicinal, Low Maintenance). Each plant shows a thumbnail, name, price, and an *Add to Cart* button (disabled once added).
- **Header** — shopping-cart icon with a live item count and navigation between pages.
- **Shopping cart page** — total item count, total cost, per-item unit price and subtotal, increase/decrease quantity, delete, *Continue Shopping*, and *Checkout*.

## Tech stack

- [Vite](https://vitejs.dev/) — build tooling
- [React 18](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [React-Redux](https://react-redux.js.org/) — cart state

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173/e-plantShopping/
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deployment (GitHub Pages)

This repo deploys automatically via **GitHub Actions** on every push to `main`
(see `.github/workflows/deploy.yml`). To enable it:

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main`; the workflow builds and publishes to
   `https://<your-username>.github.io/e-plantShopping/`.

> If your GitHub username is not `strydom-louis`, update the `base` in
> `vite.config.js` and the `homepage` in `package.json` to match your repo path.

A manual fallback is also available with `npm run deploy` (uses `gh-pages` to
publish `dist/` to a `gh-pages` branch).

## Project structure

```
src/
  App.jsx          Landing page + toggles product list
  ProductList.jsx  Header + product catalogue (categories & plants)
  CartItem.jsx     Shopping cart view
  CartSlice.jsx    Redux slice: addItem, removeItem, updateQuantity
  store.js         Redux store configuration
  main.jsx         Entry point (Redux Provider)
```
