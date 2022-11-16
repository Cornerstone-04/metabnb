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
        alt: "#333333",
        offWhite: "#F7F7F7",
        footer: "#1D1D1E",
        pale: "#4040404D",
        border: "#D7D7D7",
        borderAlt: "#B4B4B4",
        placeholder: "#B8B8B8",
        priBorder: "#A3A3A3",
        gray: "#CFD8DC",
      },
      fontFamily: {
        default: ["Red Rose", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
