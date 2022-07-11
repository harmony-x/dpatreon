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
        sm: "480px",
        md: "768px",
        lg: "1024px",
        lg2: "1280px",
        lg3: "1366px",
        xl: "1440px",
      },
      colors: {
        white: "#FFFFFF",
        black: "#333333",
        black2: "#000000",
        primary: "#8247E5",
        gray1: "#B0B3B5",
        gray2: "#4F5254",
        gray3: "#7B8084",
        gray4: "#F8F8F6",
        gray5: "#4A4D4F",
        gray6: "#C5CED3",
        gray6: "#C5CED3",
        gray7: "#FBFAF9",
        gray8: "#191A1A",
        gray9: "#ACB5BD",
        dark: "#1E1E1E",
        dark2: "#141414",
        dark3: "#0C0C0C",
        dark4: "#0A0A0A",
        footerBorderColor: "rgb(189, 189, 189)",
        primary: "#8247E5",
        lightPurple: "#F3EDFC",
        red: "#E23B49",
      },
      borderRadius: {
        xs: "0.03125rem",
        lg2: "0.625rem",
        "4xl": "1.875rem",
        "4.5xl": "2.5rem",
        "5xl": "3.125rem",
        "50%": "50%",
      },
      height: {
        "42px": "2.625rem",
        "50px": "3.125rem",
        "55px": "3.4375rem",
        "181px": "11.3125rem",
        "488px": "30.5rem",
        "588px": "36.75rem",
        "600px": "37.5rem",
        "734px": "45.875rem",
      },
      fontFamily: {
        Gilroy: "'Gilroy', sans-serif",
        Montserrat: "'Montserrat', sans-serif",
      },
      borderWidth: {
        xs: "0.03125rem",
        "10px": "0.625rem",
      },
      maxWidth: {
        "208px": "16rem",
        "477px": "29.8125rem",
        "612px": "38.35rem",
        "768px": "48rem",
      },
      fontSize: {
        xxs: "0.625rem",
        xs: "0.75rem",
      },
      minHeight: {
        "50vh": "50vh",
        "133px": "8.3125rem",
        "200px": "12.5rem",
        "253px": "15.8125rem",
        "314px": "19.625rem",
        "339px": "21.1875rem",
        "386px": "24.125rem",
        "489px": "30.5625rem",
        "588px": "36.75rem",
      },
      padding: {
        "1px": "0.0625rem",
        sm: "0.875rem",
      },
      width: {
        "7%": "7%",
        "25%": "25%",
        "39%": "39%",
        "41%": "41%",
        "65%": "65%",
        "70%": "70%",
        "90%": "90%",
        "1px": "0.03125rem",
        "181px": "11.3125rem",
        "445px": "27.8125rem",
        "768px": "48rem",
      },
      boxShadow: {
        "dropdown-shadow":
          "-2px -2px 5px 2px rgba(0, 0, 0, 0.05), 2px 2px 5px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
