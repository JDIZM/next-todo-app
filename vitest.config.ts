import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom"
  },
  resolve: {
    alias: {
      "@": join(__dirname, "./")
    }
  }
});
