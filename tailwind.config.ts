import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        "surface-elevated": "#161616",
        primary: "#C9A96E",
        "primary-muted": "#8B6F47",
        "text-base": "#F0EDE8",
        "text-muted": "#666666",
        border: "#1E1E1E",
        success: "#4ADE80",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-cabinet)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "'JetBrains Mono'", "monospace"],
        persian: ["'Vazirmatn'", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
