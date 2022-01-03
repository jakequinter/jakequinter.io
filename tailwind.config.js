module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',

        'gray-900': '#11181C', // 12
        'gray-800': '#687076', // 11
        'gray-700': '#7E868c', // 10
        'gray-600': '#C1C8CD', // 8
        'gray-500': '#D7DBDF', // 7
        'gray-400': '#DFE3E6', // 6
        'gray-300': '#ECEEF0', // 4
        'gray-200': '#F8F9FA', // 2
        'gray-100': '#FBFCFD', // 1
        'darkgray-900': '#ECEDEE', // 12
        'darkgray-800': '#9BA1A6', // 11
        'darkgray-700': '#787F85', // 10
        'darkgray-600': '#4C5155', // 8
        'darkgray-500': '#3A3F42', // 7
        'darkgray-400': '#313538', // 6
        'darkgray-300': '#26292B', // 4
        'darkgray-200': '#1A1D1E', // 2
        'darkgray-100': '#151718', // 1
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '.9375rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
