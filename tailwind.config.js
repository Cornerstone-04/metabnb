/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#A02279",
        secondary: "FFC089",
        text: "#434343",
        offWhite: "#F7F7F7",
        footer: "#1D1D1E",
        pale: "#4040404D",
      },
      fontFamily: {
        default: "Red Rose",
        openSea: "Poppins",
        token: "Inter",
      },
    },
  },
  plugins: [],
};
