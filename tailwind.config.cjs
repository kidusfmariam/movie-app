/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      pink: '#F20746',
      blue: '#235789',
      green: '#0DAB76',
      darkGrey: '#222',
      red: '#f14d4d',
      blackOverlay: 'rgb(0, 0, 0, 0.3)'
    },
    extend: {
      boxShadow: {
        '3xl': '0 0 4px 5px rgb(13, 171, 118, 0.2)'
      }
    },
  },
  plugins: [],
}
