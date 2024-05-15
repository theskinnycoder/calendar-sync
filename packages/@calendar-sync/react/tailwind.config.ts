import { type Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--calendar-sync-border))",
        input: "hsl(var(--calendar-sync-input))",
        ring: "hsl(var(--calendar-sync-ring))",
        background: "hsl(var(--calendar-sync-background))",
        foreground: "hsl(var(--calendar-sync-foreground))",
        primary: {
          DEFAULT: "hsl(var(--calendar-sync-primary))",
          foreground: "hsl(var(--calendar-sync-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--calendar-sync-secondary))",
          foreground: "hsl(var(--calendar-sync-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--calendar-sync-accent))",
          foreground: "hsl(var(--calendar-sync-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--calendar-sync-popover))",
          foreground: "hsl(var(--calendar-sync-popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--calendar-sync-radius)",
        md: "calc(var(--calendar-sync-radius) - 2px)",
        sm: "calc(var(--calendar-sync-radius) - 4px)",
      },
    },
  },
} satisfies Config

export default config
