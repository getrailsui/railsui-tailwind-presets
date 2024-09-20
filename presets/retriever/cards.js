const plugin = require("tailwindcss/plugin")
const { hexToRgba } = require("../../utils")

module.exports = plugin(function ({ addComponents, theme }) {
  const card = {
    ".card": {
      backgroundColor: theme("colors.white"),
      borderRadius: theme("borderRadius.md"),
      border: `1px solid ${hexToRgba(theme("colors.gray.300"), 0.7)}`,
      padding: theme("spacing.4"),
      boxShadow: theme("boxShadow.sm"),
      "--tw-shadow-color": hexToRgba(theme("colors.gray.300"), 0.1),
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: theme("colors.gray.900"),
        border: `1px solid ${hexToRgba(theme("colors.gray.600"), 0.8)}`,
        boxShadow: theme("boxShadow.2xl"),
        "--tw-shadow-color": hexToRgba(theme("colors.gray.950"), 0.8),
      },
    },
  }

  addComponents(card)
})
