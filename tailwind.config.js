/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.06)' },
          '66%': { transform: 'translate(-25px, 20px) scale(0.96)' },
        },
      },
      animation: {
        'drift-slow': 'drift 18s ease-in-out infinite',
        'drift-slow-reverse': 'drift 14s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [],
}
