// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: './', // ✅ This fixes broken paths on Afrihost
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000", // backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
