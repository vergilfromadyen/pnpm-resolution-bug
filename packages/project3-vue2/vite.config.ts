import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts"],
  },
}));
