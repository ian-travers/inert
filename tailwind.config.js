/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'game-brand': '#105070',
      },
      backgroundImage: theme => ({
        'nfsu-map-dark': "url('/storage/images/olympic-city-map-dark.webp')",
        'nfsu-map-light': "url('/storage/images/olympic-city-map-light.jpg')",
      }),
      animation: {
        blob: "blob 7s infinite",
        blinking: 'blinking .6s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        blinking: {
          '50%': {
            opacity: '.7',
          },
        },
      },
    },
  },
  plugins: [],
}
