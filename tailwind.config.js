/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9ff',
          100: '#f0f4ff',
          200: '#e1e8ff',
          300: '#c7d2ff',
          400: '#a8b5ff',
          500: '#8b9dff',
          600: '#6b7bff',
          700: '#4a5aee',
          800: '#132F5B',
          900: '#0B1F3A',
          950: '#08162A',
        },
        accent: {
          50: '#fefef0',
          100: '#fffde0',
          200: '#fffcc1',
          300: '#fff9a0',
          400: '#fff47d',
          500: '#ffd700',
          600: '#d4a700',
          700: '#a87d00',
          800: '#7d5c00',
          900: '#5c4400',
          950: '#3a2a00',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
