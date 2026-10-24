import type { Config } from "tailwindcss";

/**
 * BRAND COLOURS (taken from the Fidinda Financial Solutions logo)
 * brand  = Deep Navy / Dark Indigo  #1C095A  (RGB 28 9 90, CMYK 69 90 0 65)
 * accent = Bright Red              #E1041C  (RGB 225 4 28, CMYK 0 98 88 12)
 */
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        brand: {
          50: "#F3F2FA",
          100: "#E6E3F4",
          200: "#C9C3E6",
          300: "#9C93CF",
          600: "#3A2690",
          700: "#2A1478",
          800: "#22096B",
          900: "#1C095A",
          950: "#12053F",
        },
        accent: { 50: "#FDECEE", 100: "#FAD0D5", 500: "#F0263C", 600: "#E1041C", 700: "#B80317" },
        // Theme tokens: values live in app/globals.css and switch between light and dark
        surface: "rgb(var(--surface) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        tint: "rgb(var(--tint) / <alpha-value>)",
        field: "rgb(var(--field) / <alpha-value>)",
        line: { DEFAULT: "rgb(var(--line) / <alpha-value>)", strong: "rgb(var(--line-strong) / <alpha-value>)" },
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        heading: "rgb(var(--heading) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
        "accent-ink": "rgb(var(--accent-ink) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        draw: { to: { strokeDashoffset: "0" } },
        rise: { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "none" } },
      },
      animation: {
        draw: "draw 1.6s cubic-bezier(.65,0,.35,1) forwards",
        rise: "rise .8s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
