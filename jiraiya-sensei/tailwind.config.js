/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        pureWhite: "#FFFFFF",
        red: "#FC4747",
        darkBlue: "#10141E",
        greyishBlue: "#5A698F",
        semiDarkBlue: "#161D2F",
      },
    },
  },
  plugins: [],
};
