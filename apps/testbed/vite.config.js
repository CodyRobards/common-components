import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isCI = process.env.CI === "true";
  const isProd = mode === "production";

  const base = isProd ? "/common-components/" : "/";

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        "@wavelengthusaf/components": path.resolve(__dirname, isCI ? "../../node_modules/@wavelengthusaf/components/dist/esm/index.js" : "../packages/react-components/dist/esm/index.js"),
        "@wavelengthusaf/web-components": path.resolve(__dirname, isCI ? "../../node_modules/@wavelengthusaf/web-components/dist/esm/index.js" : "../packages/web-components/dist/esm/index.js"),
      },
    },
    server: {
      open: "/common-components/",
      port: 3005,
      hmr: {
        overlay: true,
      },
      watch: {
        interval: 100,
      },
      fs: {
        cachedChecks: false,
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]",
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
        },
      },
      emptyOutDir: true,
    },
    optimizeDeps: {
      exclude: ["@wavelengthusaf/components", "@wavelengthusaf/web-components"],
    },
  };
});
