/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'goofy-1': "#FFA500",
        'goofy-2' : "#ffe49a",
        'goofy-primary' : "#2c2c2c",
      }
    },
  },
  plugins: [],
};
