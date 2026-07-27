/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      // `manifest.webmanifest` existe déjà (lot 1, public/) et est référencé dans index.html :
      // on ne demande pas au plugin d'en générer un second.
      manifest: false,
      // "prompt" plutôt que "autoUpdate" : une mise à jour silencieuse pourrait recharger la
      // page en plein milieu d'un quiz. `useRegisterSW` (AppShell) affiche un bandeau explicite
      // et ne recharge qu'à la demande de l'utilisateur — voir docs/ARCHITECTURE.md § PWA.
      registerType: "prompt",
      workbox: {
        // Prend le contrôle de l'onglet dès la toute première activation (pas de rechargement
        // manuel requis pour que le premier onglet devienne hors-ligne) — sans effet sur les
        // mises à jour ultérieures, qui restent en attente jusqu'au clic sur « Actualiser »
        // (`updateServiceWorker(true)`, seul déclencheur de `skipWaiting`).
        clientsClaim: true,
        // Repli SPA hors ligne : une navigation directe vers /biblio, /cours/:id… n'est pas un
        // fichier précaché en soi. Sans ce repli, le navigateur hors ligne échoue la requête de
        // navigation avant même que React Router n'ait la main. Équivalent hors ligne du
        // redirect `/* → /index.html` déjà présent dans `netlify.toml` pour le service en ligne.
        navigateFallback: "/index.html",
        // Précache le shell (JS/CSS/HTML) et les chunks de matière (Histoire/Géographie) : le
        // catalogue est ainsi disponible hors ligne dès la première visite, pas seulement les
        // matières déjà ouvertes. Les illustrations (.webp) sont volontairement exclues du
        // précache : seules celles réellement affichées sont mises en cache, via la règle de
        // cache d'exécution ci-dessous.
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "sankofa-images",
              expiration: { maxEntries: 250, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Noms stables (sans hash) pour les polices : `index.html` les précharge par un chemin
        // fixe (`<link rel="preload">`), ce qui n'est possible qu'avec un nom connu à l'avance.
        // Sans ce préchargement, le fichier n'est découvert qu'à la lecture du CSS, et le texte
        // déjà peint dans la police de repli se repeint visiblement plus tard — ce repaint tardif
        // devient alors le nouveau candidat LCP (mesuré, voir docs/ARCHITECTURE.md § Polices).
        assetFileNames: (assetInfo) =>
          assetInfo.names?.[0]?.endsWith(".woff2")
            ? "assets/fonts/[name][extname]"
            : "assets/[name]-[hash][extname]",
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
