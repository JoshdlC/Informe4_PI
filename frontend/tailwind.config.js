/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) white"
        }, 
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar": {
            width: "10px"
          },
          "&::-webkit-scrollbar-track": {
            background: "white"
          }, 
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgb(30 58 138)",
            borderRadius: "20px",
            border: "1px solid black"
          },     
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

