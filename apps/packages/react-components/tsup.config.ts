import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  splitting: true,
  sourcemap: false,
  clean: true,
  outDir: "dist",
  minify: false,
  target: "es2020",
});
