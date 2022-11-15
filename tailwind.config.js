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
        placeholder: "#B8B8B8",
        priBorder: "#A3A3A3",
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
        input: "390px",
        formBtn: "230px",
        span: "650px",
      },
      height: {
        box: "372px",
        boxImg: "265px",
        footer: "322px",
        70: "70px",
        13: "54px",
        span: "460px",
      },
      maxWidth: {
        frame: "1240px",
        input: "390px",
        span: "650px",
      },
      backgroundImage: {
        btn: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)",
      },
      margin: {
        43: "43px",
        67: "67px",
      },
      padding: {
        100: "100px",
        18: "18px",
      },
      borderRadius: {
        box: "15px",
      },
      gap: {
        places: "75px",
      },
      fontSize: {
        3.5: "32px",
        56: "56px",
      },
      spacing: {
        99: "99px",
        184: "184px",
        242: "242px",
      },
    },
  },
  plugins: [],
};
