/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        white: "#f7f7f7",
        Cyan: "hsl(180, 66%, 49%)",
      },
    },
  },

  plugins: [
    require('tailwindcss-animated')
  ],
};
