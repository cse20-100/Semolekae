/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a4d65e", // EasyLend lime green
        accent: "#7cbc46",  // Rich green accent
        dark: "#0f172a",    // Deep navy for navs/footers
        light: "#f9fafb",   // Soft background / light text
        muted: "#64748b",   // Cool muted gray (optional)
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
