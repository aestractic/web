/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: '#B18D7A',
        secondary: '#8A6D5F',
        dark: {
          DEFAULT: '#0A0A0B',
          lighter: '#121214',
          border: '#2A2A2A',
        },
        light: {
          DEFAULT: '#E8E8E8',
          muted: '#A0A0A0',
        },
      },
    },
  },
  plugins: [],
} 