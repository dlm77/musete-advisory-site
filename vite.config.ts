import { defineConfig, loadEnv, type UserConfig } from "vite";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  // Nitro n'est nécessaire qu'au build : l'importer en dev alourdit le démarrage
  // pour rien. Sans preset explicite il détecte l'hébergeur (Vercel en CI) ;
  // NITRO_PRESET reste prioritaire — voir DEPLOYMENT.md.
  const nitroPlugin = command === "build" ? [(await import("nitro/vite")).nitro()] : [];

  // Expose les variables VITE_* au client, comme le ferait Vite par défaut mais
  // aussi dans les environnements SSR.
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const define = Object.fromEntries(
    Object.entries(env).map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)]),
  );

  return {
    define,

    // Vite utilise PostCSS en dev et Lightning CSS au build. Sans cet alignement,
    // certaines transformations (par ex. le repli de `-webkit-backdrop-filter`)
    // ne se produisent qu'au build et l'aperçu de dev ment sur le rendu final.
    css: { transformer: "lightningcss" },

    resolve: {
      alias: { "@": srcDir },
      // Deux copies de React ou du client de requêtes cassent les hooks et
      // l'hydratation ; on force une résolution unique.
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },

    // Une re-optimisation des dépendances change le hash et renvoie des 504 aux
    // onglets ouverts : on pré-groupe le socle client et on tolère les requêtes
    // périmées. React uniquement — inclure @tanstack/react-start ferait entrer
    // son entrée serveur (node:async_hooks) dans le bundle client.
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },

    server: { host: "::", port: 8080 },

    plugins: [
      tailwindcss(),
      tanstackStart({
        // Redirige l'entrée serveur de TanStack Start vers src/server.ts
        // (notre enveloppe de gestion d'erreurs SSR). Nitro build à partir de là.
        server: { entry: "server" },
        importProtection: {
          behavior: "error",
          client: { files: ["**/server/**"], specifiers: ["server-only"] },
        },
      }),
      ...nitroPlugin,
      viteReact(),
    ],
  };
});
