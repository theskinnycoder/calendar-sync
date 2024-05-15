import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      rollupTypes: false,
      include: ["src"],
      insertTypesEntry: true,
      entryRoot: "src",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "@calendar-sync/react",
      formats: ["es"],
      fileName: "index",
    },
    cssCodeSplit: true,
    minify: "esbuild",
    cssMinify: "esbuild",
    sourcemap: true,
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
