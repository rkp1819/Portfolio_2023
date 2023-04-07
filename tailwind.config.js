/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
