import jseslint from "@eslint/js"
import eslintPluginAstro from 'eslint-plugin-astro'
import globals from "globals"
import tseslint from "typescript-eslint"


export default [
  { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  { languageOptions: { globals: globals.browser } },
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  // ...tailwind.configs["flat/recommended"],
  // {
  //   settings: {
  //     tailwindcss: {
  //       callees: ["clsx", "class:list", "class"]
  //     }
  //   }
  // },
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  }
]