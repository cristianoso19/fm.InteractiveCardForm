/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'lGviolet': 'hsl(270, 3%, 87%)',
      'dGviolet': 'hsl(279, 6%, 55%)',
      'vDviolet': 'hsl(278, 68%, 11%)',
      'red': 'hsl(0, 100%, 66%)',
      'activeG1': 'hsl(249, 99%, 64%)',
      'activeG2': 'hsl(278, 94%, 30%)',
    },
  },
  plugins: [],
}

