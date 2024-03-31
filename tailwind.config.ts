import type { Config } from "tailwindcss";

const hsl = (variable: string) => {
  return `hsl(var(--${variable}))`;
};

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        danger: hsl("colors-danger"),
        success: hsl("colors-success"),
        light: {
          100: hsl("colors-light-100"),
          400: hsl("colors-light-400"),
        },
        dark: {
          800: hsl("colors-dark-800"),
          900: hsl("colors-dark-900"),
        },
        glass: {
          primary: hsl("colors-glass-primary"), // 32%
          secondary: hsl("colors-glass-secondary"), // 100%
          tertiary: hsl("colors-glass-tertiary"), // 30%
          border: hsl("colors-glass-border"), // 5%
          dark: hsl("colors-glass-dark"), // 32%
        },
        border: hsl("border"),
        input: hsl("input"),
        ring: hsl("ring"),
        background: hsl("colors-dark-900"),
        foreground: hsl("colors-light-100"),
        primary: {
          DEFAULT: hsl("colors-accent-400"),
          foreground: hsl("colors-light-100"),
        },
        secondary: {
          DEFAULT: hsl("secondary"),
          foreground: hsl("colors-light-100"),
        },
        destructive: {
          DEFAULT: hsl("destructive"),
          foreground: hsl("colors-light-100"),
        },
        muted: {
          DEFAULT: hsl("muted"),
          foreground: hsl("colors-light-100"),
        },
        accent: {
          400: hsl("colors-accent-400"),
          DEFAULT: hsl("accent"),
          foreground: hsl("colors-light-100"),
        },
        popover: {
          DEFAULT: hsl("popover"),
          foreground: hsl("colors-light-100"),
        },
        card: {
          DEFAULT: hsl("card"),
          foreground: hsl("colors-light-100"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
