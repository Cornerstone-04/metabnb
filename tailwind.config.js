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
        border: "#D7D7D7",
        borderAlt: "#B4B4B4",
      },
      fontFamily: {
        default: "Red Rose",
        openSea: "Poppins",
        token: "Inter",
      },
      width: {
        btn: "170px",
        box: "292px",
        boxImg: "260px",
        btnAlt: "161px",
      },
      height: {
        box: "372px",
        boxImg: "265px",
      },
      maxWidth: {
        frame: "1240px",
      },
      backgroundImage: {
        btn: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)",
      },
      margin: {
        43: "43px",
      },
      padding: {
        100: "100px",
      },
      borderRadius: {
        box: "15px",
      },
      gap: {
        places: "75px",
      },
    },
  },
  plugins: [],
};
