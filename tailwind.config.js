/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "rgb(94, 131, 252)",
        "theme-lb": "rgb(150, 173, 250)",
        "theme-purple": "rgb(162, 151, 255)",
      },
      fontFamily: {
        header: ["Ubuntu", "sans serif"],
        normal: ["Roboto Mono", "serif"],
      },
    },
  },
  plugins: [],
};
