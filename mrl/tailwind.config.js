/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0400ff',
        'primary-dark': '#0300cc',
        'primary-light': '#4d4aff',
        secondary: '#ffffff',
        'light-bg': '#f8f9ff',
        'dark-text': '#0a0a0a',
        'gray-text': '#5a5a5a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease forwards',
        'dash': 'dash 3s linear infinite',
        'float-particle': 'floatParticle 4s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dash: {
          to: { 'stroke-dashoffset': '-10' },
        },
        floatParticle: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) scale(1.5)', opacity: '0.8' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-180px * 6 - 60px * 5))' },
        },
      },
    },
  },
  plugins: [],
}

