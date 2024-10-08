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
        greeny : {
          900 : '#1A5319',
          500 : '#D3EE98',
          300 : '#DEF9C4',
        },
        reddish : {
          900 : '#821131',
          500 : '#FFB996',
          300 : '#FF8080',
        },
        yellowish : {
          900 : '#706233',
          500 : '#EEDF7A',
          300 : '#FEFF9F',
        },
        headerNote : {
          300 : "#C5705D",
          500 : "#B5C18E",
          700 : "#C7B7A3",
          900 : "#EADBC8",
        },
        choco : {
          900 : '#561C24',
          700 : '#957777',
          500 : '#795757',
          550 : '#664343',
        },
        coffee : {
          950 : '#343131',
          900 : '#3B3030',
          300 : '#FFEEAD',
          200 : '#FFF0D1',
          100 : '#F0EBE3',
        },
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


