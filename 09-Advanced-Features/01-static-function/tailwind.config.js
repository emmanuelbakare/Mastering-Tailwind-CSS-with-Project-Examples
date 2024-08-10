
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
      extend: {
  
      },
    },
    plugins: [
      plugin(function({addBase, addComponents, addUtilities}){
        addBase({
          'h1':{fontSize:'35px'},
          'h2':{fontSize: '25px'}
        });
        addComponents({
          '.btn': {
            padding: '8px 16px',
            borderRadius:'7px',
            borderWidth:'2px'
             
          }
        })

      })

    ],
  }