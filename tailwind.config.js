/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,astro,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Martian Mono", ...defaultTheme.fontFamily.mono],
        display: ["Nanum Pen Script", ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}
