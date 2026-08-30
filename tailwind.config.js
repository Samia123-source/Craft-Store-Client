/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {},
    fontFamily: {
      cormorantGaramond:"'Cormorant Garamond',sans-serif",
      poiretOne:"'Poiret One', sans-serif"
    }
  },
  plugins: [require('daisyui'),],
}

