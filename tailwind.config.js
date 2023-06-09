/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',
            './*.js'
],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
      xxl: '2300px'
    },
  },
  plugins: [],
}

