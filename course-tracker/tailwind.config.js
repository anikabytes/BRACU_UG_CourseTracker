/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode with class strategy
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      animation: {
        'border-pulse': 'border-pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(0, 255, 255, 1)' },
          '50%': { borderColor: 'rgba(0, 255, 255, 0.5)' },
        },
      },
      colors: {
        cyan: {
          300: '#67e8f9',
          500: '#22d3ee',
        },
        slate: {
          800: '#1e293b',
        },
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};


