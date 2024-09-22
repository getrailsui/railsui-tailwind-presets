module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--primary-50) / <alpha-value>)",
          100: "rgb(var(--primary-100) / <alpha-value>)",
          200: "rgb(var(--primary-200) / <alpha-value>)",
          300: "rgb(var(--primary-300) / <alpha-value>)",
          400: "rgb(var(--primary-400) / <alpha-value>)",
          500: "rgb(var(--primary-500) / <alpha-value>)",
          600: "rgb(var(--primary-600) / <alpha-value>)",
          700: "rgb(var(--primary-700) / <alpha-value>)",
          800: "rgb(var(--primary-800) / <alpha-value>)",
          900: "rgb(var(--primary-900) / <alpha-value>)",
          950: "rgb(var(--primary-950) / <alpha-value>)",
        },
        secondary: {
          50: "rgb(var(--secondary-50) / <alpha-value>)",
          100: "rgb(var(--secondary-100) / <alpha-value>)",
          200: "rgb(var(--secondary-200) / <alpha-value>)",
          300: "rgb(var(--secondary-300) / <alpha-value>)",
          400: "rgb(var(--secondary-400) / <alpha-value>)",
          500: "rgb(var(--secondary-500) / <alpha-value>)",
          600: "rgb(var(--secondary-600) / <alpha-value>)",
          700: "rgb(var(--secondary-700) / <alpha-value>)",
          800: "rgb(var(--secondary-800) / <alpha-value>)",
          900: "rgb(var(--secondary-900) / <alpha-value>)",
          950: "rgb(var(--secondary-950) / <alpha-value>)",
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "toast-from-right":
          "toast-from-right 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "toast-from-right": {
          "0%": {
            transform: "translateX(50%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // Custom presets
    require("../presets/retriever/headings"),
    require("../presets/retriever/buttons"),
    require("../presets/retriever/cards"),
    require("../presets/retriever/dropdowns"),
  ],
}
