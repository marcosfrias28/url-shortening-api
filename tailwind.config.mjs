/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#f7f7f7",
        cyan: {
          50: "#f0fdfc",
          100: "#ccfbf7",
          200: "#99f6f0",
          300: "#5eeae6",
          400: "#2acfcf",
          500: "#14b5b8",
          600: "#0d8f94",
          700: "#0f7176",
          800: "#11595e",
          900: "#134b4e",
          950: "#042b2f",
        },
      },
    },
  },

  plugins: [],
};
