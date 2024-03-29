import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      "/graphql": "http://localhost:3001",
      "/create-checkout-session": "http://localhost:3001",
    },
  },
});
