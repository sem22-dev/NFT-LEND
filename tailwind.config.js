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
        'header' : '#FCC153',
        'littleBlack' : "#00000090",
        'discord' : "#5865f2",
        'twitter' : "#1DA1F2",
        'youtube' : "#FF0000",
        'pinkBg' : "#FFF8EC",
        'bgGray' : '#DFE0DF'
      },
      fontFamily: {
        lexend: ['var(--font-lexend)'],
        poppins: ['var(--font-poppins)'],
        comic : ['var(--font-comic)']
      },
      boxShadow:{
        squareShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
      }
    },
  },
  plugins: [require("daisyui")],
}

