/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'woman-talkin': "url(/src/img/woman-speaking.jpg)"
      }
    },
  },
  plugins: [],
}

