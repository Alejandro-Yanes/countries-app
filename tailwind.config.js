/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-mode-el": "hsl(209, 23%, 22%)",
        "dark-mode-bg": "hsl(207, 26%, 17%)",
        "dark-mode-text": "hsl(0, 0%, 100%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
        "light-mode-bg": "hsl(0, 0%, 98%)",
        "light-mode-el": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        small: ["14px"],
        big: ["16px"],
      },
      fontFamily: {
        "nunito-sans": "Nunito Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
