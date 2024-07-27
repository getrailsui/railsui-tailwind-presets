const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addComponents, theme }) {
  const buttons = {
    ".btn": {
      padding: `${theme("padding.2")} ${theme("padding.3")}`,
      fontSize: theme("fontSize.sm"),
      borderRadius: theme("borderRadius.md"),
      fontWeight: theme("fontWeight.medium"),
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
    },
    ".btn-lg": {
      padding: `${theme("padding.3")} ${theme("padding.5")}`,
      fontSize: theme("fontSize.lg"),
    },
    ".btn-sm": {
      padding: `${theme("padding.1")} ${theme("padding.2")}`,
      fontSize: theme("fontSize.xs"),
    },
    ".btn-primary": {
      backgroundColor: `rgb(var(--primary-500) / 1)`,
      color: theme("colors.white"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--primary-500) / .2)`,
      },
      "&:hover": {
        backgroundColor: `rgb(var(--primary-600) / 1)`,
      },
      "&.btn-outline": {
        backgroundColor: "transparent",
        color: `rgb(var(--primary-500) / 1)`,
        borderColor: `rgb(var(--primary-500) / 1)`,
        "&:hover": {
          backgroundColor: `rgb(var(--primary-500) / 1)`,
          color: theme("colors.white"),
          borderColor: `rgb(var(--primary-500) / 1)`,
        },
      },
    },
    ".btn-secondary": {
      backgroundColor: `rgb(var(--secondary-500) / 1)`,
      color: theme("colors.white"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) rgb(var(--secondary-500) / .2)`,
      },
      "&:hover": {
        backgroundColor: `rgb(var(--secondary-600) / 1)`,
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
    ".btn-dark": {
      backgroundColor: theme("colors.slate.800"),
      color: theme("colors.white"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) theme('colors.slate.800/20%')`,
      },
      "&:hover": {
        backgroundColor: theme("colors.slate.900"),
      },
      "&.btn-outline": {
        backgroundColor: "transparent",
        color: theme("colors.slate.800"),
        borderColor: theme("colors.slate.800"),
        "&:hover": {
          backgroundColor: theme("colors.slate.800"),
          color: theme("colors.white"),
          borderColor: theme("colors.slate.800"),
        },
      },
      "@media (prefers-color-scheme: dark)": {
        "&:hover": {
          color: theme("colors.slate.100"),
          backgroundColor: theme("colors.slate.700"),
        },
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) theme('colors.slate.800')`,
        },
      },
    },
    ".btn-light": {
      backgroundColor: theme("colors.slate.200"),
      backgroundOpacity: theme("opacity.90"),
      color: theme("colors.slate.700"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) theme('colors.slate.300/20%')`,
      },
      "&:hover": {
        backgroundColor: theme("colors.slate.300"),
        backgroundOpacity: theme("opacity.80"),
        borderColorOpacity: theme("opacity.80"),
      },
      "&.btn-outline": {
        backgroundColor: "transparent",
        borderColor: theme("colors.slate.200"),
        borderOpacity: theme("opacity.90"),
        "&:hover": {
          backgroundColor: theme("colors.slate.300"),
          backgroundOpacity: theme("opacity.80"),
          borderColor: theme("colors.slate.300"),
          borderOpacity: theme("opacity.80"),
        },
      },
    },
    ".btn-white": {
      backgroundColor: theme("colors.white"),
      color: theme("colors.slate.700"),
      border: `1px solid ${theme("colors.slate.300")}`,
      boxShadow: theme("boxShadow.sm"),
      shadowColor: theme("colors.slate.300"),
      shadowOpacity: theme("opacity.20"),
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) theme('colors.slate.300/20%')`,
      },
      "&:hover": {
        backgroundColor: theme("colors.white"),
        borderColor: theme("colors.slate.400"),
      },
      "&.btn-outline": {
        backgroundColor: "transparent",
        color: theme("colors.slate.700"),
        borderColor: theme("colors.white"),
        "&:hover": {
          backgroundColor: theme("colors.white"),
          color: theme("colors.slate.800"),
          borderColor: theme("colors.white"),
        },
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.200"),
        borderColor: theme("colors.slate.700"),
        boxShadow: "none",
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) theme('colors.slate.600/30%')`,
        },
        "&:hover": {
          borderColor: theme("colors.slate.600"),
          backgroundColor: theme("colors.slate.800"),
        },
      },
    },
    ".btn-transparent": {
      backgroundColor: "transparent",
      color: theme("colors.slate.700"),
      border: `1px solid transparent`,
      boxShadow: "none",
      "&:focus": {
        boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) theme('colors.slate.300/20%')`,
      },
      "&:hover": {
        backgroundColor: theme("colors.slate.100"),
        backgroundOpacity: theme("opacity.90"),
        color: theme("colors.slate.800"),
        borderColor: theme("colors.slate.300"),
      },
      "@media (prefers-color-scheme: dark)": {
        color: theme("colors.slate.300"),
        "&:hover": {
          backgroundColor: theme("colors.slate.700"),
          color: theme("colors.slate.100"),
          borderColor: theme("colors.slate.700"),
        },
        "&:focus": {
          boxShadow: `var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) theme('colors.slate.800/20%')`,
        },
      },
    },
    ".btn-link": {
      color: `rgb(var(--primary-600) / 1)`,
      fontWeight: theme("fontWeight.semibold"),
      "&:focus": {
        boxShadow: "none",
      },
      "&:hover": {
        color: `rgb(var(--primary-700) / 1)`,
      },
      "@media (prefers-color-scheme: dark)": {
        color: `rgb(var(--primary-400) / 1)`,
        "&:hover": {
          color: `rgb(var(--primary-500) / 1)`,
        },
      },
    },
  }
  addComponents(buttons)
})
