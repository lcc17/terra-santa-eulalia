/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sand-light": "#D8CC9A",
        "sand-dark": "#C4B480",
        "olive-green": "#9A8F3D",
        "olive-dark": "#7A7030",
        "earth-brown": "#4A3A24",
        cream: "#F4F1E6",
        terracotta: "#B87A5E",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "texture-sand":
          "url('https://images.unsplash.com/photo-1604689598793-b6547190d67a?q=80&w=2069&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};
