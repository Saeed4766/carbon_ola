/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./node_modules/flowbite/**/*.js"
],
  
  theme: {
    extend: {

      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      },
      
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      

      backgroundImage:{
        'frame': "url('/src/assets/Frame.png')",
        'mainBG': "url('/src/assets/mainBG.png')"
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

