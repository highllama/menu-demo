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
            src: "/logo2.svg",
            sizes: "512x512",
            type: "image/svg+xml",
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
