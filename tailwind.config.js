const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('aria-current-page', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`aria-current-page${separator}${className}`)}[aria-current="page"]`;
        });
      });
    }),
  ],
};
