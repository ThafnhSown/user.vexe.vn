/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'banner': "url('./assets/banner.png')"
      }
    },
    screens: {
      'mobile': '300px',
      'desktop': '900px'
    },
    colors: {
      'green': "#006D38",
      'neutral': "#F3F3F3",
      'background': '#498428',
      'white': '#fff'
    }
  },
  plugins: [],
}