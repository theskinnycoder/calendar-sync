import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: false,
      include: ["src"],
      insertTypesEntry: true,
      entryRoot: "src",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@calendar-sync/core",
      formats: ["es"],
      fileName: "index",
    },
    minify: "esbuild",
    sourcemap: true,
    copyPublicDir: false,
    rollupOptions: {
      external: ["dayjs", "dayjs/plugin/utc", "query-string"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
