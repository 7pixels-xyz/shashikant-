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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--bg-primary)",
        footer: "var(--bg-footer)",
        txt: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      }
    },
  },
  plugins: [],
};
export default config;
