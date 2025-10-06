import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "dist/**", "next-env.d.ts"],
  },
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],

      "react/react-in-jsx-scope": "off",
      "react/jsx-no-duplicate-props": "error",

      semi: ["error", "always"],
      quotes: ["error", "double", { avoidEscape: true }],
      indent: "off",
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "no-trailing-spaces": "warn",
    },
  },
];

export default eslintConfig;
