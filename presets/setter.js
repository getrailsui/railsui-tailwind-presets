const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", ...defaultTheme.fontFamily.sans],
        system: [...defaultTheme.fontFamily.sans],
      },
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
        // Accent colors
        champagne: {
          50: "#fdf8ef",
          100: "#fbf0d9",
          200: "#f6ddb2",
          300: "#f2cc8f",
          400: "#e9a44e",
          500: "#e48a2b",
          600: "#d57121",
          700: "#b1581d",
          800: "#8d461f",
          900: "#723b1c",
          950: "#3d1c0d",
        },
        bayleaf: {
          50: "#f4f9f6",
          100: "#dcebe3",
          200: "#b9d6c6",
          300: "#81b29a",
          400: "#669b82",
          500: "#4c8069",
          600: "#3b6654",
          700: "#325345",
          800: "#2b443a",
          900: "#273a33",
          950: "#13201c",
        },
        brick: {
          50: "#fdf5f3",
          100: "#fbeae5",
          200: "#f9d8cf",
          300: "#f3bcae",
          400: "#eb957e",
          500: "#e07a5f",
          600: "#ca5738",
          700: "#a9462c",
          800: "#8d3c27",
          900: "#753727",
          950: "#3f1a10",
        },
      },
      transitionTimingFunction: {
        "in-out-quint": "cubic-bezier(0.86, 0, 0.27, 1)",
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
    require("../presets/setter/headings"),
    require("../presets/setter/buttons"),
    require("../presets/setter/backgrounds"),
    require("../presets/setter/dropdowns"),
  ],
}
