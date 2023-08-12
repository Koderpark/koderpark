/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /grid-cols-%d/,
    },
    {
      pattern: /bg-(red|blue|yellow)-(100|200|300|400)/,
    },
  ],
};
