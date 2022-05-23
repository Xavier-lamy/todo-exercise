module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green' : {
          'primary': '#00AD5B',
          'secondary': '#DFFFAE',
          'tertiary': '#3c9336',
        },
      },
    },
  },
  plugins: [],
}
