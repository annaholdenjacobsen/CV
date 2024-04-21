/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface", "cursive"], // Add the fallback font type
      },
    },
  },
  plugins: [],
};
