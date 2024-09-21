const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addComponents, theme }) {
  function hexToRgba(hex, opacity) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "")

    // Parse the r, g, b values
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)

    // Return the rgba color
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

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
