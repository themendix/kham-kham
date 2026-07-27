import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended, reactRefresh.configs.vite],
    plugins: { "react-hooks": reactHooks },
    rules: {
      // Règles classiques des Hooks (rules-of-hooks, exhaustive-deps) plutôt que le préréglage
      // "recommended" v7, taillé pour le React Compiler (set-state-in-effect, purity…) : ce
      // projet est React 18 sans Compiler, ce préréglage signalerait des patterns intentionnels
      // (animations pilotées par useEffect dans LearningDoneCard, ProgressBar) comme des erreurs.
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  prettierConfig,
);
