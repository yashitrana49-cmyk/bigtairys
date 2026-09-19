# Big Tairys — Street Culture Wear

**Big Tairys** is the storefront of an Indian streetwear label — "inspired from the streets." The site is a React + TypeScript single-page app with a WebGL laser-flow background, a persistent shopping cart, and Razorpay-powered payments, backed by a small Express API that creates Razorpay orders and verifies payment signatures.

**Live site:** [bigtairys.vercel.app](https://bigtairys.vercel.app)

---

## What's inside

| App        | Stack                                                                 | Role                                                        |
| ---------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| `frontend` | React 19, TypeScript, Vite, Tailwind CSS, React Router 7, three.js    | Storefront UI, catalog, cart, checkout flow                 |
| `backend`  | Node (18+), Express 5, Razorpay SDK, dotenv                           | Payment order creation + HMAC-SHA256 payment verification   |

### Features

- Product catalog with size selection, image galleries, and product pages
- Cart that survives page reloads (persisted to `localStorage`)
- Razorpay checkout with server-side signature verification
- Lazy-loaded WebGL laser background (three.js lives in its own on-demand chunk — the main bundle stays lean)
- Policy pages (shipping, refund, exchange, privacy), contact page, order-tracking stub, and a styled 404

## Project structure

```
backend/
  server.js        # Express API: POST /api/create-order, POST /api/verify-payment
  .env.example     # Template for required environment variables
frontend/
  src/
    pages/         # Home, Shop, Product, Cart, policy/contact pages, NotFound
    components/    # Navbar, Footer, Checkout, Hero, LaserFlow (WebGL bg), ...
    context/       # CartContext — cart state + localStorage persistence
    data/          # Product catalog (currently hardcoded)
    layouts/       # MainLayout (lazy LaserFlow background + Navbar/Footer)
```

## Getting started

**Prerequisites:** Node.js 18+, npm.

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # then fill in your Razorpay keys
npm run dev            # starts on http://localhost:5000 (node --watch)
```

Create an API key pair in the [Razorpay dashboard](https://dashboard.razorpay.com/app/keys) and paste the values into `backend/.env`. Use **test keys** (`rzp_test_...`) while developing.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev            # starts on http://localhost:5173
```

Create `frontend/src/.env` (it's git-ignored) with:

```
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
```

Then open [http://localhost:5173](http://localhost:5173). The backend CORS policy currently allows `http://localhost:5173` only.

## Environment variables

| Location              | Variable               | Purpose                                          |
| --------------------- | ---------------------- | ------------------------------------------------ |
| `backend/.env`        | `RAZORPAY_KEY_ID`      | Razorpay key ID (server-side order creation)     |
| `backend/.env`        | `RAZORPAY_KEY_SECRET`  | Razorpay key secret (**never expose to client**) |
| `backend/.env`        | `PORT`                 | Express port (default `5000`)                    |
| `frontend/src/.env`   | `VITE_API_URL`         | Base URL of the backend API                      |
| `frontend/src/.env`   | `VITE_RAZORPAY_KEY_ID` | Razorpay key ID (public by design)               |

Never commit real keys — both `.env` files are git-ignored, and only the secret must stay server-side.

## Build & deploy

```bash
cd frontend
npm run build     # type-checks (tsc -b) and bundles into dist/
npm run preview   # serve the production build locally
```

- **Frontend:** deploy `frontend/dist/` to any static host (the live site runs on Vercel).
- **Backend:** run `npm start` on any Node host. Set the Razorpay env vars in the host's dashboard.
- **For production, update** the hardcoded CORS origin in `backend/server.js` to your real frontend domain.

## Known limitations / roadmap

- [ ] Order amounts currently come from the client — compute them server-side before taking real payments
- [ ] Verified payments aren't persisted; no database, so `/track-order` is a stub
- [ ] Product catalog is hardcoded in `frontend/src/data/products.ts`
- [ ] Contact form isn't wired to a backend yet

## Scripts

| Where     | Command          | What it does                        |
| --------- | ---------------- | ----------------------------------- |
| `backend` | `npm run dev`    | Start API with auto-reload          |
| `backend` | `npm start`      | Start API for production            |
| `frontend`| `npm run dev`    | Vite dev server with HMR            |
| `frontend`| `npm run build`  | Type-check + production bundle      |
| `frontend`| `npm run lint`   | ESLint over the frontend            |
| `frontend`| `npm run preview`| Preview the production build        |
