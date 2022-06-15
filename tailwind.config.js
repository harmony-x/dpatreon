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
        gray2: "#4F5254",
        dark: "#1E1E1E",
        dark2: "#141414",
        dark3: "#0C0C0C",
        dark4: "#0A0A0A",
        footerBorderColor: "rgb(189, 189, 189)",
        primary: "#8247E5",
      },
      borderRadius: {
        'xs': '0.03125rem',
        'lg2': '0.625rem',
        '4xl': '1.875rem',
        '5xl': '3.125rem',
      },
      height: {
        '55px': '3.4375rem',
        '600px': '37.5rem'
      },
      fontFamily: {
        Gilroy: "'Gilroy', sans-serif",
        Montserrat: "'Montserrat', sans-serif"
      },
      borderWidth: {
        'xs': '0.03125rem'
      },
      maxWidth: {
        '208px': '16rem',
      },
    },
  },
  plugins: [],
}
