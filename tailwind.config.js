/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html, jsx,css}",
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "rgb(117, 148, 250)",
        "theme-lb": "rgb(138, 160, 237)",
        "theme-yellow": "rgb(234, 188, 7)",
        "theme-gray": "rgb(59, 63, 69)",
        "yellow-hover": "rgb(209, 168, 5)",
      },
      fontFamily: {
        header: ["Ubuntu", "sans serif"],
        normal: ["Roboto Mono", "serif"],
      },
    },
  },
  plugins: [],
};
