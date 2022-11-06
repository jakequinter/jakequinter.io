module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f8f8f8',
          100: '#f3f3f3',
          200: '#e8e8e8',
          300: '#e2e2e2',
          400: '#dbdbdb',
          500: '#c7c7c7',
          600: '#8f8f8f',
          700: '#858585',
          800: '#6f6f6f',
          900: '#171717',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
  ],
};
