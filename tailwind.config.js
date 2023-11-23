/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'body': '#F9F7F5',
        'pink': '#FEF0E5',
        'bar': '#101630',
        'yellow': '#FDD400',
        'button': '#3B10E3'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

