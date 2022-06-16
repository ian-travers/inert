/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        su: "slide-up .4s linear",
        sd: "slide-down .4s linear"
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
          }
        },

        "slide-up": {
          "0%": {
            transform: "translate(0px, 400px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },

        "slide-down": {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "100%": {
            transform: "translate(0px, 400px)",
          }
        }
      }
    },
  },
  plugins: [],
}
