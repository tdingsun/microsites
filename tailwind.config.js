import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        wyvern: ["Wyvern"],
        sans: [ "Arial", "Helvetica", "sans"]
      },
      colors: {
        primary: '#c9c9b6',
        secondary: '#6b672e',
        tertiary: '#3F8A9A',
      },
    },
  },
  plugins: [],
} satisfies Config;

