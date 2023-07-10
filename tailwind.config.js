/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./node_modules/flowbite/**/*.js"
],
  
  theme: {
    extend: {

      backgroundImage:{
        'frame': "url('/src/assets/Frame.png')",
        'mainBG': "url('/src/assets/mainBG.png')",
        'LoginPana': "url('/src/assets/LoginPana.png');",
        'signUp_bg': "url('/src/assets/signUp_bg.png');",
        'landingBG': "url('/src/assets/landingBG.png')",
        'otpBg': "url('/src/assets/otpBg.png')",
        'compBg': "url('/src/assets/compBg.png')"
      },

      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

