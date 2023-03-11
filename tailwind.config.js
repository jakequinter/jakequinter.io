/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['0.9285714286rem', '1.125rem'],
      base: ['0.875rem', '1.25rem'],
      lg: ['1rem', '1.5rem'],
      xl: ['1.125rem', '1.75rem'],
      '2xl': ['1.25rem', '1.75rem'],
      '3xl': ['1.5rem', '2rem'],
      '4xl': ['1.875rem', '2.25rem'],
      '5xl': ['2.25rem', '2.5rem'],
      '6xl': ['3rem', '1'],
      '7xl': ['3.75rem', '1'],
      '8xl': ['4.5rem', '1'],
      '9xl': ['6rem', '1'],
    },

    colors: {
      ...colors,
      gray: colors.stone,
    },
    extend: {},
  },
  plugins: [],
};
