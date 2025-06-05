/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-light': '#8BA989',
        'green-medium': '#4A7856',
        'green-dark': '#2D5E40',
      },
      backgroundImage: {
        'camo-pattern': `repeating-conic-gradient(
          #8BA989 0% 25%, 
          #4A7856 0% 50%, 
          #2D5E40 0% 75%,
          #4A7856 0% 100%
        )`,
      },
      fontSize: {
        'code': '0.9rem',
      },
      boxShadow: {
        'eco': '0 4px 14px 0 rgba(45, 94, 64, 0.1)',
      },
      animation: {
        'leaf-sway': 'leaf-sway 3s ease-in-out infinite',
      },
      keyframes: {
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};