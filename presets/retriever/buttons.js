const plugin = require("tailwindcss/plugin")
const { hexToRgba } = require("../../utils")

module.exports = plugin(function ({ addComponents, theme }) {
  const buttons = {
    ".btn": {
      padding: `6px ${theme("padding.3")}`,
      fontSize: "14.5px",
      borderRadius: theme("borderRadius.md"),
      fontWeight: theme("fontWeight.semibold"),
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      transitionProperty: theme("transitionProperty.color"),
      transitionDuration: theme("transitionDuration.200"),
      justifyContent: "center",
      textDecoration: "none",
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      },
      "&:disabled": {
        opacity: theme("opacity.50"),
        cursor: "not-allowed",
      },
    },
    ".btn-lg": {
      padding: `${theme("padding.3")} ${theme("padding.6")}`,
      fontSize: theme("fontSize.base"),
    },
    ".btn-sm": {
      padding: `${theme("padding.0.5")} ${theme("padding.3")}`,
      fontSize: "13px",
    },
    ".btn-base": {
      padding: `6px ${theme("padding.3")}`,
      fontSize: "14.5px",
      borderRadius: theme("borderRadius.md"),
      fontWeight: theme("fontWeight.semibold"),
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      transitionProperty: theme("transitionProperty.color"),
      transitionDuration: theme("transitionDuration.200"),
      justifyContent: "center",
      textDecoration: "none",
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      },
      "&:disabled": {
        opacity: theme("opacity.50"),
        cursor: "not-allowed",
      },
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
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--primary-400) / .2)`,
        },
      },
    },
    ".btn-secondary": {
      backgroundColor: `rgb(var(--secondary-500) / 1)`,
      color: `rgb(var(--secondary-50)`,
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--secondary-100) / .7)`,
      },
      "&:hover": {
        backgroundColor: `rgb(var(--secondary-700) / 1)`,
      },
      "&.btn-outline": {
        backgroundColor: "transparent",
        color: `rgb(var(--secondary-500) / 1)`,
        borderColor: `rgb(var(--secondary-500) / 1)`,
        "&:hover": {
          backgroundColor: `rgb(var(--secondary-500) / 1)`,
          color: theme("colors.white"),
          borderColor: `rgb(var(--secondary-500) / 1)`,
        },
      },
    },
    ".btn-danger": {
      backgroundColor: theme("colors.red.500"),
      color: theme("colors.white"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.red.100"),
          0.7
        )}`,
      },
      "&:hover": {
        backgroundColor: theme("colors.red.700"),
        color: theme("colors.white"),
      },
    },
    ".btn-light": {
      backgroundColor: hexToRgba(theme("colors.gray.200"), 0.9),
      color: theme("colors.gray.700"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.gray.300"),
          0.2
        )}`,
      },
      "&:hover": {
        backgroundColor: hexToRgba(theme("colors.gray.300"), 0.8),
      },
    },
    ".btn-white": {
      backgroundColor: theme("colors.white"),
      color: hexToRgba(theme("colors.gray.800"), 0.8),
      border: `1px solid ${hexToRgba(theme("colors.gray.300"), 0.8)}`,
      boxShadow: theme("boxShadow.sm"),
      "--tw-shadow-color": hexToRgba(theme("colors.gray.300"), 0.2),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.gray.100"),
          0.7
        )}`,
        border: `1px solid ${hexToRgba(theme("colors.gray.300"), 0.9)}`,
      },
      "&:hover": {
        backgroundColor: hexToRgba(theme("colors.gray.50"), 0.5),
        boxShadow: theme("boxShadow.none"),
        borderColor: hexToRgba(theme("colors.gray.600"), 0.4),
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.gray.100"),
        backgroundColor: hexToRgba(theme("colors.gray.700"), 0.6),
        borderColor: hexToRgba(theme("colors.gray.500"), 0.7),
        "--tw-shadow-color": hexToRgba(theme("colors.gray.950"), 0.4),
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
            theme("colors.gray.700"),
            0.8
          )}`,
          border: `1px solid ${hexToRgba(theme("colors.gray.500"), 0.8)}`,
        },
        "&:hover": {
          borderColor: theme("colors.gray.600"),
          backgroundColor: hexToRgba(theme("colors.gray.800"), 0.9),
        },
      },
    },
    ".btn-transparent": {
      backgroundColor: "transparent",
      color: theme("colors.gray.700"),
      border: `1px solid transparent`,
      boxShadow: "none",
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
          theme("colors.gray.300"),
          0.2
        )}`,
      },
      "&:hover": {
        backgroundColor: theme("colors.gray.100"),
        backgroundOpacity: theme("opacity.90"),
        color: theme("colors.gray.800"),
        borderColor: theme("colors.gray.300"),
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.gray.300"),
        "&:hover": {
          backgroundColor: theme("colors.gray.700"),
          color: theme("colors.gray.100"),
          borderColor: theme("colors.gray.700"),
        },
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) ${hexToRgba(
            theme("colors.gray.800"),
            0.2
          )}`,
        },
      },
    },
    ".btn-link": {
      color: `rgb(var(--primary-500) / 1)`,
      fontWeight: theme("fontWeight.medium"),
      "&:focus": {
        boxShadow: "none",
      },
      "&:hover": {
        color: `rgb(var(--primary-600) / 1)`,
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.gray.200"),
        underlineOffset: "0.25em",
        "&:hover": {
          color: theme("colors.gray.200"),
          textDecoration: "underline",
        },
      },
    },
    ".btn-link-secondary": {
      color: `rgb(var(--secondary-500) / 1)`,
      fontWeight: theme("fontWeight.medium"),
      "&:focus": {
        boxShadow: "none",
      },
      "&:hover": {
        color: `rgb(var(--secondary-600) / 1)`,
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.gray.200"),
        underlineOffset: "0.25em",
        "&:hover": {
          color: theme("colors.gray.200"),
          textDecoration: "underline",
        },
      },
    },
  }
  addComponents(buttons)
})
