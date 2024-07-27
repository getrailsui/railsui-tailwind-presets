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
    ".h1": {
      fontSize: em(48, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: round(36 / 30),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".h2": {
      fontSize: em(36, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: round(36 / 30),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".h3": {
      fontSize: em(30, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: round(36 / 30),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".h4": {
      fontSize: em(28, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: round(36 / 30),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".h5": {
      fontSize: em(24, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: round(36 / 30),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".h6": {
      fontSize: em(20, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: round(36 / 30),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    // Display
    ".display-1": {
      fontSize: em(96, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: "1",
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".display-2": {
      fontSize: em(84, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: "1",
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".display-3": {
      fontSize: em(72, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: "1",
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".display-4": {
      fontSize: em(64, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: "1",
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".display-5": {
      fontSize: em(56, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: "1",
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
    ".display-6": {
      fontSize: em(48, 16),
      fontWeight: theme("fontWeight.extrabold"),
      color: theme("colors.slate.900"),
      letterSpacing: "-0.03em",
      lineHeight: round(36 / 30),
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.100"),
      },
    },
  }

  addComponents(headings)
})
