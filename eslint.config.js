import pluginJs from "@eslint/js"
import eslintPluginAstro from 'eslint-plugin-astro'
import globals from "globals"
import tseslint from "typescript-eslint"


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    files: ["**/*.{astro,js,jsx,ts,tsx}"],
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  }
]