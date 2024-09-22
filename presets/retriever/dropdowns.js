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

  const dropdown = {
    ".dropdown-menu": {
      position: "absolute",
      backgroundColor: theme("colors.white"),
      backdropFilter: theme("backdropFilter.blur.md"),
      borderRadius: theme("borderRadius.lg"),
      boxShadow: theme("boxShadow.2xl"),
      padding: `0 ${theme("spacing.2")}`,
      zIndex: theme("zIndex.50"),
      border: `1px solid ${hexToRgba(theme("colors.gray.300"), 0.8)}`,
      width: "320px",
      "@screen md": {
        width: "208px",
      },
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: theme("colors.gray.800"),
        border: `1px solid ${hexToRgba(theme("colors.gray.700"), 0.8)}`,
        boxShadow: theme("boxShadow.2xl"),
        "--tw-shadow-color": hexToRgba(theme("colors.gray.950"), 0.8),
      },
    },
    ".dropdown-item": {
      padding: `${theme("spacing.1")} ${theme("spacing.4")}`,
      display: theme("display.block"),
      fontWeight: theme("fontWeight.medium"),
      color: theme("colors.gray.800"),
      fontSize: "15px",
      "&:hover": {
        color: `rgb(var(--primary-500) / 1)`,
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.gray.300"),
      },
    },
  }

  addComponents(dropdown)
})
