const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addComponents, theme }) {
  const round = (num) =>
    num
      .toFixed(7)
      .replace(/(\.[0-9]+?)0+$/, "$1")
      .replace(/\.0$/, "")
  const em = (px, base) => `${round(px / base)}em`
  const headings = {
    // h1-h6
    // text-5xl font-semibold font-heading text-zinc-900 dark:text-zinc-100 tracking-tighter
    ".h1": {
      fontSize: em(48, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: theme("lineHeight.tight"),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".h2": {
      fontSize: em(36, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: theme("lineHeight.tight"),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".h3": {
      fontSize: em(30, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: theme("lineHeight.tight"),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".h4": {
      fontSize: em(28, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: theme("lineHeight.tight"),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".h5": {
      fontSize: em(24, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: theme("lineHeight.tight"),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".h6": {
      fontSize: em(20, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: theme("lineHeight.tight"),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    // Display
    ".display-1": {
      fontSize: em(84, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: 1,
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".display-2": {
      fontSize: em(72, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: 1,
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".display-3": {
      fontSize: em(64, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: 1,
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".display-4": {
      fontSize: em(56, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: 1,
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".display-5": {
      fontSize: em(48, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: 1,
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
    ".display-6": {
      fontSize: em(32, 16),
      fontWeight: theme("fontWeight.semibold"),
      fontFamily: theme("fontFamily.heading"),
      color: theme("colors.zinc.900"),
      letterSpacing: theme("letterSpacing.tighter"),
      lineHeight: 1,
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.100"),
      },
    },
  }

  addComponents(headings)
})
