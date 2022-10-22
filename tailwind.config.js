/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(223, 87%, 63%)",
        Gray: "hsl(0, 0%, 59%)",
        VeryDarkBlue: "hsl(209, 33%, 12%)",
        LightRed: "hsl(354, 100%, 66%)",
      },
      fontFamily: {
        Libre: ["Libre Franklin"],
      },
    },
  },
  plugins: [],
};
