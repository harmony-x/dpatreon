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
        gray3: "#7B8084",
        gray4: "#F8F8F6",
        gray5: "#4A4D4F",
        dark: "#1E1E1E",
        dark2: "#141414",
        dark3: "#0C0C0C",
        dark4: "#0A0A0A",
        footerBorderColor: "rgb(189, 189, 189)",
        primary: "#8247E5",
        lightPurple: "#F3EDFC"
      },
      borderRadius: {
        'xs': '0.03125rem',
        'lg2': '0.625rem',
        '4xl': '1.875rem',
        '4.5xl': '2.5rem',
        '5xl': '3.125rem',
      },
      height: {
        '42px': '2.625rem',
        '50px': '3.125rem',
        '55px': '3.4375rem',
        '488px': '30.5rem',
        '600px': '37.5rem',
        '734px': '45.875rem',
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
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
      },
      minHeight: {
        '200px': '12.5rem',
        '386px': '24.125rem',
      },
      padding: {
        'sm': '0.875rem',
      }
    },
  },
  plugins: [],
}
