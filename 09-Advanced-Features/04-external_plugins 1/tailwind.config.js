
const customPlugin = require('./src/plugins/testplugin')

module.exports = {
    content: [
      "./src/**/*.{html, js, jsx}"],
      
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
      customPlugin, 
    ],
  }