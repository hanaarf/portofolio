/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'banner': "url('asset/banner-bg.png')",
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2E236C',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      animation: {
        'slide': 'slide 5s ease-in-out infinite'
      },
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}