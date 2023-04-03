/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './mdx/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      ...colors,
      gray: colors.stone,
    },
    extend: {},
  },
  plugins: [],
};
