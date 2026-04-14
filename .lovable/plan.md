

# Convert TanStack Start SSR to Static Vite SPA

## Goal
Transform the project from a TanStack Start SSR app (Cloudflare Worker target) into a standard Vite SPA that outputs a `dist/` folder with `index.html` — deployable on cPanel or any static host.

## What Changes

### 1. Create `index.html` at project root
Standard Vite SPA entry point with the HTML shell (charset, viewport, fonts, title) that currently lives in `__root.tsx`'s `shellComponent` and `head()`. Includes `<script type="module" src="/src/main.tsx">`.

### 2. Create `src/main.tsx`
Client-only entry that creates the router, renders `<RouterProvider>` into `#root`. Replaces the SSR bootstrap that TanStack Start handles internally.

### 3. Rewrite `vite.config.ts`
Replace `@lovable.dev/vite-tanstack-config` with a direct Vite config using `@vitejs/plugin-react`, `tailwindcss` (v4 Vite plugin), `@tanstack/router-plugin/vite` for file-based route generation, and the `@` path alias.

### 4. Rewrite `src/routes/__root.tsx`
Remove `shellComponent`, `HeadContent`, `Scripts`, and `head()`. The root route becomes a simple layout component rendering `<Header />` + `<Outlet />`. Keep `notFoundComponent`.

### 5. Simplify `src/router.tsx`
Remove the `getRouter` factory pattern — export the router directly (no SSR concerns).

### 6. Update route files (minimal)
Remove `head()` from each route file — in SPA mode, meta tags live in `index.html`. The route `component` functions stay unchanged.

### 7. Add `public/.htaccess`
For cPanel/Apache SPA routing — rewrites all non-file requests to `index.html`.

### 8. Install/remove dependencies
- **Add**: `@vitejs/plugin-react`, `@tailwindcss/vite`
- **Remove**: `@lovable.dev/vite-tanstack-config`, `@tanstack/react-start`, `@cloudflare/vite-plugin`
- **Keep**: `@tanstack/react-router`, `@tanstack/router-plugin`

### 9. Remove `wrangler.jsonc`
No longer targeting Cloudflare Workers.

---

## Technical Details

**index.html** will contain the static `<head>` content (title, meta, Google Fonts link, favicon) and a `<div id="root">` in `<body>`.

**main.tsx** pattern:
```tsx
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
```

**vite.config.ts** pattern:
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
```

**.htaccess** for Apache/cPanel:
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

After `npm run build`, the `dist/` folder can be uploaded directly to cPanel.

