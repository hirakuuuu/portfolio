/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-bottom":
          "slide-in-bottom 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "scale-up-bottom":
          "scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "scale-up-bottom": {
          "0%": {
            transform: "scale(.5)",
            "transform-origin": "50% 100%",
          },
          to: {
            transform: "scale(1)",
            "transform-origin": "50% 100%",
          },
        },
      },
    },
  },
  plugins: [],
};
