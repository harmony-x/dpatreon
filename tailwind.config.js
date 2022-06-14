/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      lg2: '1280px',
      lg3: '1366px',
      xl: '1440px',
    },
      colors: {
        white: "#FFFFFF",
        black: "#333333",
        primary: "#8247E5",
        gray1: "#B0B3B5",
      },
      borderRadius: {
        '4xl': '1.875rem',
        '5xl': '3.125rem',
      },
      height: {
        '55px': '3.4375rem'
      },
      fontFamily: {
        Gilroy: "'Gilroy', sans-serif",
        Montserrat: "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
}
