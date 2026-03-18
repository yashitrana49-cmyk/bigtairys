/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],  // paragraphs, prices
        button: ['Anton', 'sans-serif'], // buttons / CTAs
        },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        zoomSlow: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "zoom-slow": "zoomSlow 10s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}