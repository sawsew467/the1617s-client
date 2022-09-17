/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F29B8D',
        'blackText': '#2E373E',
      },
      dropShadow: {
        'inset': 'inset 0 0 10px #000000',
      }
    },
  },
  plugins: [],
}
