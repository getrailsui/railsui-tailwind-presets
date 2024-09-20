const plugin = require("tailwindcss/plugin")
const { hexToRgba } = require("utils")

module.exports = plugin(function ({ addComponents, theme }) {
  const buttons = {
    ".btn": {
      padding: `9px ${theme("padding.5")}`,
      fontSize: theme("fontSize.sm"),
      borderRadius: theme("borderRadius.full"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.heading"),
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      transitionDuration: theme("transitionDuration.300"),
      transitionProperty: theme("transitionProperty.colors"),
      transitionTimingFunction: theme("transitionTimingFunction.in-out"),
      justifyContent: "center",
      textDecoration: "none",
      border: "1px solid transparent",
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      },
      "&[disabled]": {
        opacity: theme("opacity.50"),
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
    ".btn-lg": {
      padding: `${theme("padding.3")} ${theme("padding.5")}`,
      fontSize: theme("fontSize.lg"),
    },
    ".btn-sm": {
      padding: `${theme("padding.1")} ${theme("padding.3")}`,
      fontSize: theme("fontSize.xs"),
    },
    ".btn-primary": {
      backgroundColor: `rgb(var(--primary-500) / 1)`,
      color: theme("colors.white"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--primary-100) / .7)`,
      },
      "&:hover": {
        backgroundColor: `rgb(var(--primary-600) / 1)`,
      },
      "@media (prefers-color-scheme: dark)": {
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--primary-500) / .3)`,
        },
      },
    },
    ".btn-secondary": {
      backgroundColor: `rgb(var(--secondary-500) / 1)`,
      color: theme("colors.white"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--secondary-100) / .7)`,
      },
      "&:hover": {
        backgroundColor: `rgb(var(--secondary-600) / 1)`,
      },
      "@media (prefers-color-scheme: dark)": {
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--secondary-500) / .3)`,
        },
      },
    },
    ".btn-dark": {
      backgroundColor: theme("colors.zinc.800"),
      color: theme("colors.white"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.zinc.800"),
          0.2
        )}`,
      },
      "&:hover": {
        backgroundColor: theme("colors.zinc.900"),
      },
      "@media (prefers-color-scheme: dark)": {
        "&:hover": {
          color: theme("colors.zinc.100"),
          backgroundColor: theme("colors.zinc.700"),
        },
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
            theme("colors.zinc.800"),
            0.2
          )}`,
        },
      },
    },
    ".btn-light": {
      backgroundColor: `${hexToRgba(theme("colors.zinc.100"), 0.8)}`,
      color: theme("colors.zinc.700"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.zinc.300"),
          0.3
        )}`,
      },
      "&:hover": {
        backgroundColor: `${hexToRgba(theme("colors.zinc.200"), 0.8)}`,
      },
    },
    ".btn-white": {
      backgroundColor: theme("colors.white"),
      color: theme("colors.zinc.800"),
      border: `1px solid ${hexToRgba(theme("colors.zinc.300"), 0.9)}`,
      boxShadow: theme("boxShadow.sm"),
      "--tw-shadow-color": hexToRgba(theme("colors.zinc.300"), 0.2),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.zinc.100"),
          0.7
        )}`,
      },
      "&:hover": {
        backgroundColor: hexToRgba(theme("colors.zinc.50"), 0.5),
        borderColor: hexToRgba(theme("colors.zinc.400"), 0.8),
      },
      "@media (prefers-color-scheme: dark)": {
        borderColor: theme("colors.zinc.500"),
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
            theme("colors.zinc.600"),
            0.3
          )}`,
        },
        "&:hover": {
          borderColor: theme("colors.zinc.600"),
          backgroundColor: theme("colors.zinc.800"),
        },
      },
    },
    ".btn-transparent": {
      backgroundColor: "transparent",
      color: theme("colors.zinc.700"),
      border: `1px solid transparent`,
      boxShadow: "none",
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.zinc.300"),
          0.2
        )}`,
      },
      "&:hover": {
        backgroundColor: theme("colors.zinc.100"),
        backgroundOpacity: theme("opacity.90"),
        color: theme("colors.zinc.800"),
        borderColor: theme("colors.zinc.300"),
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.zinc.300"),
        "&:hover": {
          backgroundColor: theme("colors.zinc.700"),
          color: theme("colors.zinc.100"),
          borderColor: theme("colors.zinc.700"),
        },
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
            theme("colors.zinc.800"),
            0.2
          )}`,
        },
      },
    },
    ".btn-link": {
      color: theme("colors.primary.600"),
      fontWeight: theme("fontWeight.medium"),
      "&:focus": {
        boxShadow: "none",
      },
      "&:hover": {
        color: theme("colors.primary.700"),
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.primary.400"),
        "&:hover": {
          color: theme("colors.primary.500"),
        },
      },
    },
  }
  addComponents(buttons)
})
