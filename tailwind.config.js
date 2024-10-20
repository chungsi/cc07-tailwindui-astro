/** @type {import('tailwindcss').Config} */

import twAspectRatio from '@tailwindcss/aspect-ratio'
import twContainerQueries from '@tailwindcss/container-queries'
import twTypography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,astro,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Martian Mono", ...defaultTheme.fontFamily.mono],
        display: ["Nanum Pen Script", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        th: {
          beige: {
            50: '#FFFAEB',
            100: '#FFF2CC'
          }
        }
      },
      boxShadow: {
        solid: '6px 6px 0 var(--tw-shadow-color)',
      }
    },
  },
  plugins: [
    twTypography,
    twContainerQueries,
    twAspectRatio
  ],
}
