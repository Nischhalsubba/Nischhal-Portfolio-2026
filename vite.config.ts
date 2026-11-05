/**
 * Vite configuration for the static portfolio build.
 * Keeps local development predictable and emits assets under the repository's
 * GitHub Pages subpath without exposing private environment values.
 */
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Nischhal-Portfolio-2026/",
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
