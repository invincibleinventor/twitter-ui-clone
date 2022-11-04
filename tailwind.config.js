/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage:
         {
           'banner': "url('../banner.svg')"
         }
     }
  },
  plugins: [],
};
