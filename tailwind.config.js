// const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D9C4C4',
        'bg' : '#080C14',
        'bg2': '#06090E',
        'bg3': '#161F31',
        'header' : '#EFBB9D',
        'littleBlack' : "#00000090"
      },
      backgroundImage: {
        'gradient-to-top': 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
      },
      fontFamily: {
        lexend: ['var(--font-lexend)'],
        poppins: ['var(--font-poppins)']
      },
      boxShadow:{
        squareShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
      }
    },
  },
  plugins: [require("daisyui")],
}

