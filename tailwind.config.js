/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#333333",
        primary: "#8247E5"
      },
      borderRadius: {
        '4xl': '1.875rem'
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
