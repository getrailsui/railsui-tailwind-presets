const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addComponents, theme }) {
  const round = (num) =>
    num
      .toFixed(7)
      .replace(/(\.[0-9]+?)0+$/, "$1")
      .replace(/\.0$/, "")
  const em = (px, base) => `${round(px / base)}em`
  const fontSize = theme("fontSize")

  const headings = {
    ".h1": {
      fontSize: em(30, 14),
      lineHeight: round(36 / 30),
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
    },
    ".h2": {
      fontSize: em(24, 14),
      lineHeight: round(28 / 24),
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
    },
    ".h3": {
      fontSize: em(20, 14),
      lineHeight: round(28 / 20),
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
    },
    ".h4": {
      fontSize: em(18, 14),
      lineHeight: round(24 / 18),
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
    },
    ".h5": {
      fontSize: em(16, 14),
      lineHeight: round(24 / 16),
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
    },
    ".h6": {
      fontSize: em(14, 14),
      lineHeight: round(20 / 14),
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
    },
    ".display-1": {
      fontSize: fontSize["9xl"][0],
      lineHeight: "1.12",
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.04em",
      backgroundImage: `linear-gradient(270.09deg, ${theme(
        "colors.primary.500"
      )} 4.34%, ${theme("colors.secondary.800")} 122.47%)`,
      backgroundClip: "text",
      color: theme("colors.transparent"),
      "@media (prefers-color-scheme: dark)": {
        backgroundImage: "none",
        color: theme("colors.white"),
      },
    },
    ".display-2": {
      fontSize: fontSize["8xl"][0],
      lineHeight: "1.12",
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.035em",
      backgroundImage: `linear-gradient(270.09deg, ${theme(
        "colors.primary.500"
      )} 4.34%, ${theme("colors.secondary.800")} 122.47%)`,
      backgroundClip: "text",
      color: theme("colors.transparent"),
      "@media (prefers-color-scheme: dark)": {
        backgroundImage: "none",
        color: theme("colors.white"),
      },
    },
    ".display-3": {
      fontSize: fontSize["7xl"][0],
      lineHeight: "1.12",
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.04em",
      backgroundImage: `linear-gradient(270.09deg, ${theme(
        "colors.primary.500"
      )} 4.34%, ${theme("colors.secondary.800")} 122.47%)`,
      backgroundClip: "text",
      color: theme("colors.transparent"),
      "@media (prefers-color-scheme: dark)": {
        backgroundImage: "none",
        color: theme("colors.white"),
      },
    },
    ".display-4": {
      fontSize: fontSize["6xl"][0],
      lineHeight: "1.12",
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
      backgroundImage: `linear-gradient(270.09deg, ${theme(
        "colors.primary.500"
      )} 4.34%, ${theme("colors.secondary.800")} 122.47%)`,
      backgroundClip: "text",
      color: theme("colors.transparent"),
      "@media (prefers-color-scheme: dark)": {
        backgroundImage: "none",
        color: theme("colors.white"),
      },
    },
    ".display-5": {
      fontSize: fontSize["5xl"][0],
      lineHeight: "1.12",
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
      backgroundImage: `linear-gradient(270.09deg, ${theme(
        "colors.primary.500"
      )} 4.34%, ${theme("colors.secondary.800")} 122.47%)`,
      backgroundClip: "text",
      color: theme("colors.transparent"),
      "@media (prefers-color-scheme: dark)": {
        backgroundImage: "none",
        color: theme("colors.white"),
      },
    },
    ".display-6": {
      fontSize: fontSize["4xl"][0],
      lineHeight: "1.12",
      fontWeight: theme("fontWeight.semibold"),
      letterSpacing: "-0.02em",
      backgroundImage: `linear-gradient(270.09deg, ${theme(
        "colors.primary.500"
      )} 4.34%, ${theme("colors.secondary.800")} 122.47%)`,
      backgroundClip: "text",
      color: theme("colors.transparent"),
      "@media (prefers-color-scheme: dark)": {
        backgroundImage: "none",
        color: theme("colors.white"),
      },
    },
  }

  addComponents(headings)
})
