/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1': "rgb(19, 19, 19)",
        'color1.8': "rgba(19, 19, 19,0.8)",
        'color1.15': "rgba(19, 19, 19,0.15)",
        'color2': "rgb(35, 190, 10)",
        'color2.05': "rgba(35, 190, 10,0.05)",
        'color3': "rgb(89, 198, 210)",
        'color4': "rgb(243, 243, 243)",
      },
      fontFamily:{
        'WorkSans': "Work Sans",
        'PlayfairDisplay': "Playfair Display"
      },
      fontSize:{
        '18': "18px",
        '28': "28px",
        '40': "40px",
      },
      lineHeight:{
        '53': '53px'
      },
      padding:{
        '14': "14px",
      }
    },
  },
  plugins: [require('daisyui')],
}

