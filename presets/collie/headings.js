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
      fontSize: em(32, 14),
      lineHeight: theme("lineHeight.tight"),
      fontFamily: theme("fontFamily.figtree"),
      fontWeight: theme("fontWeight.bold"),
      letterSpacing: "-0.02em",
    },
    ".h2": {
      fontSize: em(28, 14),
      lineHeight: theme("lineHeight.tight"),
      fontFamily: theme("fontFamily.figtree"),
      fontWeight: theme("fontWeight.bold"),
      letterSpacing: "-0.02em",
    },
    ".h3": {
      fontSize: em(24, 14),
      lineHeight: theme("lineHeight.tight"),
      fontFamily: theme("fontFamily.figtree"),
      fontWeight: theme("fontWeight.bold"),
      letterSpacing: "-0.02em",
    },
    ".h4": {
      fontSize: em(20, 14),
      lineHeight: theme("lineHeight.tight"),
      fontFamily: theme("fontFamily.figtree"),
      fontWeight: theme("fontWeight.bold"),
      letterSpacing: "-0.01em",
    },
    ".h5": {
      fontSize: em(16, 14),
      lineHeight: theme("lineHeight.tight"),
      fontFamily: theme("fontFamily.figtree"),
      fontWeight: theme("fontWeight.bold"),
      letterSpacing: "-0.01em",
    },
    ".h6": {
      fontSize: em(14, 14),
      lineHeight: theme("lineHeight.tight"),
      fontFamily: theme("fontFamily.figtree"),
      fontWeight: theme("fontWeight.bold"),
      letterSpacing: "-0.01em",
    },
    ".display-1": {
      fontSize: fontSize["9xl"][0],
      lineHeight: fontSize["9xl"][1].lineHeight,
      fontFamily: theme("fontFamily.figtree"),
      fontWeight: theme("fontWeight.bold"),
      letterSpacing: "-0.04em",
    },
    ".display-2": {
      fontSize: fontSize["8xl"][0],
      lineHeight: fontSize["8xl"][1].lineHeight,
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.figtree"),
      letterSpacing: "-0.035em",
    },
    ".display-3": {
      fontSize: fontSize["7xl"][0],
      lineHeight: fontSize["7xl"][1].lineHeight,
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.figtree"),
      letterSpacing: "-0.04em",
    },
    ".display-4": {
      fontSize: fontSize["6xl"][0],
      lineHeight: "1.15",
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.figtree"),
      letterSpacing: "-0.02em",
    },
    ".display-5": {
      fontSize: fontSize["5xl"][0],
      lineHeight: "1.15",
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.figtree"),
      letterSpacing: "-0.02em",
    },
    ".display-6": {
      fontSize: fontSize["4xl"][0],
      lineHeight: "1.15",
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.figtree"),
      letterSpacing: "-0.02em",
    },
  }

  addComponents(headings)
})
