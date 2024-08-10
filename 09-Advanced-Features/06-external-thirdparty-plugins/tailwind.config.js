module.exports = {
    content: [
      "./src/**/*.{html, js, jsx}",
      "./node_modules/flowbite/**/*.js",
       ],
    theme: {
      extend: {
  
      },
    },
    plugins: [
      require('flowbite/plugin'),
    ],
  }