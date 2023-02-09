/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['satoshi', 'cursive', 'sans-serif'],
      },
      colors: {
        primaryOne: "#003E29",
        primaryTwo: "#E4BBA1",
        primaryThree: "#D9D9D9",
        borderColor: "#787878",
        bgColor: "#EDEDED",
        bgFooter: "#023423" 
      },
    },
  },
  plugins: [],
}