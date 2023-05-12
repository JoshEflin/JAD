/** @type {import('tailwindcss').Config} */

module.exports = {

  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

theme: {
  extend: {
    fontFamily: {
      'recipe':['Comic Neue' ]
    },
    animation: {
      puffOut: 'puffOut 1s forwards',
    },
    transformOrigin: {
      '50': '50%',
    },
    scale: {
      '2': '2',
    },
    blur: {
      '2': '2px',
    },
  },
},
variants: {
  extend: {
    animation: ['hover'],
  },
},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

