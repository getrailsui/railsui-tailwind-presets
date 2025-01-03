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

  const backgrounds = {
    ".bg-grid": {
      backgroundColor: theme("colors.gray.50"),
      backgroundImage: `linear-gradient(90deg, ${hexToRgba(
        theme("colors.gray.300"),
        0.15
      )} 1px, transparent 1px),
                        linear-gradient(180deg, ${hexToRgba(
                          theme("colors.gray.300"),
                          0.15
                        )} 1px, transparent 1px)`,
      backgroundSize: `20px 20px`,
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: theme("colors.gray.900"),
        backgroundImage: `linear-gradient(90deg, ${hexToRgba(
          theme("colors.gray.700"),
          0.15
        )} 1px, transparent 1px),
                        linear-gradient(180deg, ${hexToRgba(
                          theme("colors.gray.700"),
                          0.15
                        )} 1px, transparent 1px)`,
        backgroundSize: `20px 20px`,
      },
    },
  }
  addComponents(backgrounds)
})
