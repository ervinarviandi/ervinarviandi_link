/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora"', "sans-serif"],
        mplus: ['"M PLUS Rounded 1c"', "sans-serif"],
        figtree: ['"Figtree"', "sans-serif"],
      },
      colors: {
        primary: "#6d6d6d",
        secondary: "#B6A8A8",
      },
    },
  },
  plugins: [],
};
