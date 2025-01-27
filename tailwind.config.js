/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1.5rem))' }
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(calc(-100% - 1.5rem))' },
          to: { transform: 'translateX(0)' }
        }
      },
    },
  },
  plugins: [],
};