/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#F8FF00" },
      fontFamily: { primary: ["Primary"], handwriting: ["Handwriting"] },
    },
  },
  plugins: [],
};
