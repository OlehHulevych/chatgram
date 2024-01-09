/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter", "sans-serif"]
      },
      backgroundImage:{
        'custom-image':"url('./background_photo.jpg')"
      },
      backgroundColor:{
        'bar-opacity-color':'rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
}

