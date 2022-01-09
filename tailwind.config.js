module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {},
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
