/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni-moda': ['"Bodoni Moda"', 'sans-serif'],
      },
    
      Color:{
        primary: "#088AB2"
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundColor:{
        'myBlue' : '#D1E9FF'
      },

      width:{
        '123px': '126px' 
      }
    },
  },
  plugins: [],
}

