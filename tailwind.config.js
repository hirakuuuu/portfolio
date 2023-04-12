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
          "slide-in-bottom 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86)  both",
        "keyboard-slide-in-up":
          "keyboard-slide-in-up 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "slide-in-up":
          "slide-in-up 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "slide-out-up":
          "slide-out-up 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "scale-up-bottom":
          "scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "slide-mask-down":
          "slide-mask-down 1.0s cubic-bezier(0.800, 0.00, 0.170, 1.000) both",
        "fuwafuwa-move": "fuwafuwa-move 2.0s ease-in-out infinite both",
        "scale-up-move": "scale-up-move 1.2s ease  both",
      },
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "keyboard-slide-in-up": {
          "0%": {
            transform: "translateY(-100px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-out-up": {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100vh)",
          },
        },
        "slide-in-up": {
          "0%": {
            transform: "translateY(-100vh)",
          },
          to: {
            transform: "translateY(0)",
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
        "slide-mask-down": {
          "0%": {
            height: "100%",
          },
          to: {
            height: "0",
          },
        },
        "fuwafuwa-move": {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "scale-up-move": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
