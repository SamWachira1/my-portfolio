/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a4e69',
        secondary: '#9a8c98',
        accent: '#f2e9e4',
      },
      animation: {
        'carousel-right': 'carousel-right 30s linear infinite',
        'carousel-left': 'carousel-left 30s linear infinite',
      },
      keyframes: {
        'carousel-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'carousel-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
