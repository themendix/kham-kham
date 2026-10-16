const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
module.exports = defineConfig([
  expoConfig,
  { ignores: ["web/**", "dist/**", ".expo/**", "reference/**", "backups/**", "scripts/**", "docs/**", "design_handoff_*/**", ".claude/**", ".codex/**", ".agents/**", ".planning/**", ".vibeflow-local/**", "graphify-out/**", "src/native/imageAssets.ts", "tests/imageAssets.mock.ts"] },
]);
