
/** tailwind classes: base, components, utilities, classes */

// static function: addBase, addComponents, addUtilities, addVariant
// dynamic Function: matchBase, matchComponents, matchUtilities, matchVariant
// theme, config, e

const plugin = require('tailwindcss/plugin')
module.exports = {
    content: [
      "./src/**/*.{html, js, jsx}",
       
    ],
    theme: {

     circleSizes:{
        sm: '3rem',
        md: '5rem',
        lg: '7rem',
        xl: '10rem',
     },
      extend: {
  
      },
    },
    plugins: [
       plugin(function({matchComponents, theme}){

        matchComponents(

          {
            circle:(value)=>({
              width:value,
              height:value,
              borderRadius: theme('borderRadius.full')
            })
          },
          {
            // values:theme('spacing')
            values:theme('circleSizes')
          }
        )

       })

    ],
  }