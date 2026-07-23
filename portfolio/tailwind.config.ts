import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7FAEB5",
        secondary: "#A9CDD2",
        accent: "#7FAEB5",
        "accent-hover": "#D7ECEF",
        background: "#0A0A0A",
        foreground: "#F4F4F4",
        card: "rgba(255,255,255,0.03)",
        "card-border": "rgba(127,174,181,0.24)",
        muted: "#A5A5A5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #7FAEB5 0%, #A9CDD2 100%)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        gradientShift: "gradientShift 8s ease infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "blur(16px)" },
          "50%": { opacity: "0.7", filter: "blur(22px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(127,174,181,0.18), 0 0 18px rgba(127,174,181,0.08), 0 12px 32px rgba(0,0,0,0.42)",
        "glow-accent": "0 0 18px rgba(127,174,181,0.10)",
        "inset-frost": "inset 0 1px 0 rgba(127,174,181,0.12)",
        depth: "0 8px 32px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
