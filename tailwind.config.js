/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/images/bg.svg')"
      },
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
        'site-gold-100': '#e8b11e',
        'site-black': '#0D0B0B',
        'site-gray': '#262626',
      }
    },
  },
  plugins: [],
}
