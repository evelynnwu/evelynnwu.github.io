import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    postcss: "./postcss.config.cjs", // or postcss.config.js
  },
  plugins: [react()],
});
