/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      belle: ['Bellefair'],
      bar: ['Barlow'],
      con: ['Barlow Condensed']
    },
    screens: {
      'tablet': '535px',
      'desktop': '1024px'
    }
  }
}

