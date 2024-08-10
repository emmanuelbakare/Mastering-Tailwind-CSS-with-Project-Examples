const plugin = require("tailwindcss/plugin");


module.exports =  plugin(function({addBase, addUtilities, addComponents,matchComponents, theme}){
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
      });

      // addUtilities({
      //   '.bg-blue-white':{
      //     // backgroundColor:'#0350ff',
      //     // color:'white'
          
      //   }
      // })
      
      // addUtilities({
      //   '.bg-blue-white':{
      //     backgroundColor:theme('colors.blue.700'),
      //     color: theme('colors.white')
          
      //   }
      // }) 

    const newUtilities = {
    '.bg-gradient-orange':{
        backgroundImage: `linear-gradient(to right, ${theme('colors.orange.300')}, ${theme('colors.orange.500')})`,
        color:'white'
    },
    '.border-orange-glow':{
        boxShadow:`0 0 5px ${theme('colors.orange.500')}, 0 0 10px ${theme('colors.orange.100')}`
    }

    }

    addUtilities(newUtilities, ['responsive','hover']);


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