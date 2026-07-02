# Déploiement hors Lovable

Ce projet est une app **TanStack Start** (React 19 + Vite 7 + Nitro). Nitro peut cibler n'importe quel hébergeur via la variable d'environnement `NITRO_PRESET` au moment du build.

Par défaut, le build cible Cloudflare Workers. Pour un autre hôte, il suffit de définir `NITRO_PRESET` avant `bun run build` (ou `npm run build`).

## Prérequis

- Node.js ≥ 20 (ou Bun ≥ 1.1)
- Installer les dépendances : `bun install` (ou `npm install`)

## Vercel (recommandé)

1. Importer le repo sur Vercel.
2. Dans **Project Settings → Environment Variables**, ajouter :
   - `NITRO_PRESET` = `vercel`
3. Build command : `bun run build` (ou `npm run build`)
4. Output directory : laisser vide — Nitro écrit automatiquement dans `.vercel/output` (format Build Output API v3, détecté par Vercel).
5. Deploy.

Un fichier `vercel.json` minimal est fourni pour forcer le framework en "other" et laisser Nitro gérer la sortie.

## Netlify

- `NITRO_PRESET=netlify` → sortie `.netlify/functions-internal` + `dist`
- Build command : `bun run build`
- Publish directory : `dist`

## Node.js (VPS, Docker, Render, Railway, Fly.io…)

```bash
NITRO_PRESET=node-server bun run build
node .output/server/index.mjs
```

Le serveur écoute sur `PORT` (par défaut 3000).

### Dockerfile minimal

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN corepack enable && npm install -g bun && bun install --frozen-lockfile
ENV NITRO_PRESET=node-server
RUN bun run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/.output ./.output
ENV PORT=3000
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

## Cloudflare Pages / Workers

```bash
NITRO_PRESET=cloudflare-pages bun run build
# ou cloudflare_module / cloudflare pour Workers
```

## Autres presets Nitro

`aws-lambda`, `deno-deploy`, `firebase`, `azure`, `vercel-edge`, `bun`, `static`…
Liste complète : https://nitro.build/deploy

## Site statique (SSG)

Ce projet utilise SSR (rendu côté serveur) pour le SEO et la sitemap dynamique.
Pour un export 100% statique :

```bash
NITRO_PRESET=static bun run build
```

Le contenu prêt à héberger sur GitHub Pages, S3, Netlify statique, etc. est dans `.output/public`.

> Note : la route `/sitemap.xml` étant server-side, elle nécessite un preset serverless (Vercel, Netlify, Node…) pour rester dynamique. En mode `static`, elle est pré-rendue au moment du build.

## Variables d'environnement

Aucune variable secrète n'est requise pour ce site vitrine.
Si vous ajoutez des intégrations (formulaire de contact, analytics, etc.), déclarez-les dans le tableau de bord de votre hébergeur.
