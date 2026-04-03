import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Kalendu Menu",
        short_name: "Kalendu Menu",
        description: "Kalendu Menu",
        theme_color: "#f59e0b",
        icons: [
          {
            src: "/logo2.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          // {
          //   src: "/logo2.svg",
          //   sizes: "512x512",
          //   type: "image/svg+xml",
          // },
          {
            src: "/448x448.png",
            sizes: "448x448",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
