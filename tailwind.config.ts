import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      danger: "#ff774d",
      success: "#c6ff4d",
      light: {
        100: "#f5f2ef",
        400: "#d9bfa6",
      },
      dark: {
        800: "#221f1c",
        900: "#110f0e",
      },
      accent: {
        400: "#e28c36",
      },
      glass: {
        primary: "#585552", // 32%
        secondary: "#c4bfbb", // 100%
        tertiary: "#f5f2ef", // 30%
        border: "#f5f2ef", // 5%
        dark: "#110f0e", // 32%
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
