/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        '100%': '100%'
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
      backgroundImage: {
        'img-logo': "url('./assets/img-logo.png')"
      },
      colors: {
        'primary-gray': '#323538',
        'primary-gold': '#BC9C57',
        'primary-gold-clicked': '#A08240',
        'gold-light': '#EDCF75',

      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
