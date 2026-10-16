const path = require("node:path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const config = getDefaultConfig(__dirname);
const existingBlockList = config.resolver.blockList ?? [];
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// Keep the preserved web app, archives and local tooling out of Metro's file map.
config.resolver.blockList = [
  ...(Array.isArray(existingBlockList) ? existingBlockList : [existingBlockList]),
  ...["web", "reference", "backups", "docs", "dist", "picture", "photo modele", "graphify-out", "design_handoff_biblio_redesign", ".claude", ".codex", ".agents", ".planning", ".vibeflow-local", ".serena"].map((directory) =>
    new RegExp(`^${escapeRegExp(path.join(__dirname, directory))}[/\\\\]`)
  ),
];
module.exports = withNativeWind(config, { input: "./src/global.css" });