/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fbf3f4',
          100: '#f6e4e7',
          200: '#eeccd1',
          300: '#e0a7b0',
          400: '#cd7987',
          500: '#b24f60',
          600: '#973c4d',
          700: '#7a2d3b',
          800: '#5c222c',
          900: '#4c1d25',
          950: '#2b0c10', // Deepest velvet crimson
        },
        gold: {
          50: '#fbf9f1',
          100: '#f4eece',
          200: '#e8dc98',
          300: '#dac25c',
          400: '#cca734',
          500: '#b48c23', // Brass gold
          600: '#96701a',
          700: '#755416',
          800: '#563c13',
          900: '#412d11',
          950: '#d4af37', // Shiny leaf gold
        },
        turmeric: {
          50: '#fffbf0',
          100: '#fef5d6',
          200: '#fce7a2',
          300: '#fad363',
          400: '#f7b92c',
          500: '#df9c10',
          600: '#b8770a',
          700: '#8f5509',
          800: '#6f400b',
          900: '#5b340c',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse-slow': 'spin-reverse 18s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'flower-fall': 'flower-fall 8s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' }
        },
        'flower-fall': {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 0.7 },
          '90%': { opacity: 0.7 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}
