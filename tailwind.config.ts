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
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "skeleton-shine":
          "linear-gradient(90deg, rgba(74,35,90,0.15) 0%, rgba(74,35,90,0.35) 50%, rgba(74,35,90,0.15) 100%)",
        "skeleton-shine-dark":
          "linear-gradient(90deg, rgba(74,35,90,0.25) 0%, rgba(120,70,140,0.45) 50%, rgba(74,35,90,0.25) 100%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
