const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#4FBA6F',
      secondary: '#F3D55B',
      white: '#FFFFFF',
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue
    },
    fontFamily: {
      body: ['Raleway', 'sans-serif']
    },
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
