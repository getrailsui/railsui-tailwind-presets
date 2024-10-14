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
      padding: `${theme("spacing.1")} 0px`,
      backgroundColor: theme("colors.white"),
      backdropFilter: theme("backdropFilter.blur.md"),
      borderRadius: theme("borderRadius.lg"),
      boxShadow: theme("boxShadow.2xl"),
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
      padding: `6px ${theme("spacing.3")}`,
      display: "block",
      color: theme("colors.gray.800"),
      fontSize: "15px",
      width: "100%",
      "&:hover": {
        color: theme("colors.gray.800"),
        background: theme("colors.gray.100"),
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.gray.300"),

        "&:hover": {
          color: theme("colors.gray.100"),
          background: hexToRgba(theme("colors.gray.900"), 0.6),
        },
      },
    },
    ".dropdown-item-danger": {
      color: theme("colors.red.500"),
      "&:hover": {
        color: theme("colors.red.500"),
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.red.600"),

        "&:hover": {
          color: theme("colors.red.600"),
          background: hexToRgba(theme("colors.gray.900"), 0.6),
        },
      },
    },
  }

  addComponents(dropdown)
})
