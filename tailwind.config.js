/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "custom-red": "#CD1818",
        "custom-blue": "#0F2C67",
        "custom-yellow": "#F3950D",
        "yellow-pastel":"#F4E185"
      }
    },
  },
  plugins: [],
}