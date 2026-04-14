import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#4A235A",
        /** Higher luminosity accent for dark mode (FT-style purple on charcoal) */
        brandPurpleLight: "#C9A3D9",
        editorial: {
          ink: "#F8FAFC",
          muted: "#94A3B8",
          charcoal: "#121212",
          deep: "#0F1115",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "skeleton-shine":
          "linear-gradient(90deg, rgba(74,35,90,0.06) 0%, rgba(74,35,90,0.14) 45%, rgba(74,35,90,0.06) 100%)",
        "skeleton-shine-dark":
          "linear-gradient(90deg, #2a2438 0%, #3a3248 35%, #1e1c26 70%, #252030 100%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
