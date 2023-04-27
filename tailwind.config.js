/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["manrope", "sans"],
    },
    colors: {
      bgPrimary: "#B4EE91",
      buttonBg: "#013106",
      buttonSecondaryBg: "#D9D9D9",
    },
  },
  plugins: [],
};
