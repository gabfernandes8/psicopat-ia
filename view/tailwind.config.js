/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./../../**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "branco": "#EFEBE8",
        "marromClaro": "#A79E8F",
        "marrom": "#231E1A",
        "cinzaMarrom": "#827F7B",
        "marronzinho": "#6F6A66",
        "cinza": "#777672",
        "greish": "#C0BFBB"
      },
      fontFamily: {
        fontTTPD: ["Libre Caslon Display", "serif"],
        fontTTPDT: ["Libre Caslon Text", "serif"],
        fontP: ["Poppins", "system-ui"]
      }
    },
  },
  plugins: [],
}

