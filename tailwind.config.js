/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        heroMobile: "url('/images/bg-main-mobile.png')",
        heroDesktop: "url('/images/bg-main-desktop.png')",
        backCard: "url('/images/bg-card-back.png')",
        frontCard: "url('/images/bg-card-front.png')",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lGviolet: "hsl(270, 3%, 87%)",
        dGviolet: "hsl(279, 6%, 55%)",
        vDviolet: "hsl(278, 68%, 11%)",
        red: "hsl(0, 100%, 66%)",
        activeG1: "hsl(249, 99%, 64%)",
        activeG2: "hsl(278, 94%, 30%)",
      },
    },
    screens: {
      sm: "575px",
      // => @media (min-width: 575px) { ... }

      md: "759px",
      // => @media (min-width: 959px) { ... }

      lg: "1439px",
      // => @media (min-width: 1439px) { ... }
    },
  },

  plugins: [],
};

