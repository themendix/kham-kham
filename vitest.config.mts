import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  tsconfig: "./tsconfig.test.json",
  define: { __DEV__: true },
  resolve: { alias: [
    { find: "@/native/imageAssets", replacement: fileURLToPath(new URL("./tests/imageAssets.mock.ts", import.meta.url)) },
    { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
  ] },
  test: { environment: "jsdom", include: ["src/lib/*.test.ts", "src/store/*.test.ts", "src/data/*.test.ts", "tests/*.test.ts"], maxWorkers: 2 },
});
