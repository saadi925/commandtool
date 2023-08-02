import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://saadi925.github.io/git-commands-tool",
  plugins: [react()],
});
