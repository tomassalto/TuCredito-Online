/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "390px",
        mac: "1440px",
        hd: "1536px",
        fullhd: "1920px",
        "2k": "2560px",
        "4k": "3840px",
      },
      colors: {
        violet: "#3f0393",
        sky_blue: "#29addd",
        light_gray: "#E1E5EF",
        dark: "#151515",
      },
    },
  },
  plugins: [],
};
