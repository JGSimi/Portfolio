import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        primary: {
          light: "#3B82F6",
          dark: "#60A5FA",
        },
        background: {
          light: "#F9F9F9",
          dark: "#111827",
        },
        text: {
          light: "#1F2937",
          dark: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
