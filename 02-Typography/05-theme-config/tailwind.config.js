module.exports = {
    content: [
      "./src/**/*.{html, js, jsx}",
       
    ],
    theme: {
      extend: {
        'fontSize':{
          '10xl':'10rem'
        },
        colors:{
          primary: '#b83975',
          secondary:{
            100:'#aeff83',
            400:'#abdcc68',
            600:'#8e994e',
            800:'#5f6634',
            900:'#2f331a',
            950:'#181a0d'
          }
        }
      },
    },
    plugins: [
    ],
  }