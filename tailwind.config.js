/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ClickerScript: ["Clicker Script", "sans-serif"],
        Anton: ["Anton", "sansserif"],
        Alata: ["Alata", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Brittany: ["Brittany Signature", "sans-serif"],
        BebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
