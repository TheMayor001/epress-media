/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Fix for "__dirname" not defined in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub Pages setup
const repoName = "epress-media";
const branch = process.env.GITHUB_REF_NAME || "main";

export default defineConfig({
  plugins: [react()],
  base: branch === "main" ? `/${repoName}/` : `/${repoName}/${branch}/`,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
