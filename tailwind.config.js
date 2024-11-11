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
        'color2': "rgb(35, 190, 10)",
        'color3': "rgb(89, 198, 210)",
      },
      fontFamily:{
        'WorkSans': "Work Sans",
        'PlayfairDisplay': "Playfair Display"
      },
      fontSize:{
        '18': "18px",
        '28': "28px",
      },
      padding:{
        '14': "14px",
      }
    },
  },
  plugins: [require('daisyui')],
}

