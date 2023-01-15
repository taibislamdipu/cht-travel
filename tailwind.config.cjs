/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#098e2b",
      },
      screens: {
        xs: "411px",
        sm: "540px",
        smd: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1920px",
        halfXL: "1200px",
        halfLg: "1124px",
        sm2: "460px",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
