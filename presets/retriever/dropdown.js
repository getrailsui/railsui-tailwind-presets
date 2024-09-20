const plugin = require("tailwindcss/plugin")
const { hexToRgba } = require("../../utils")

module.exports = plugin(function ({ addComponents, theme }) {
  const dropdown = {
    ".dropdown-menu": {
      position: theme("position.absolute"),
      backgroundColor: hexToRgba(theme("colors.white"), 0.9),
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
