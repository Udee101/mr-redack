/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['Brittany-signature'],
        headerFont: ['The-seasons'],
        mainFont: ['Poppins', 'sans-serif']
      },
      maxWidth: {
        'site-w': '1200px'
      },
      colors: {
        'site-gold': '#BE8C07',
        'site-black': '#0D0B0B',
        'site-gray': '#262626',
        'input-gray': '#707070'
      }
    },
  },
  plugins: [],
}
