/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollDisappear: {
          '0%': { opacity: 1, transform: 'translateX(100%) scale(1)' },
          '40%': { opacity: 1, transform: 'translateX(0%) scale(0.95)' },
          '60%': { opacity: 0, transform: 'translateX(-50%) scale(0.9)' },
          '100%': { opacity: 0, transform: 'translateX(-100%) scale(0.9)' },
        },
      },
      animation: {
        scrollDisappear: 'scrollDisappear 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
