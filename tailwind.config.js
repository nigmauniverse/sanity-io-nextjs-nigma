/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-container': '#FFE083',
      },
      fontFamily: {
        // Montserrat
        "montserrat": ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
