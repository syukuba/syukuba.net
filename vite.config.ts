import { defineConfig } from "vite";
import path from "path";

import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        sponsors: path.resolve(__dirname, "sponsors.html"),
        volunteer: path.resolve(__dirname, "volunteer.html"),
      },
    },
  },
  base: "/2024",
  plugins: [ViteEjsPlugin()],
});
