/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0D0D0D',
          50: '#F7F7F5',
          100: '#EEEDE9',
          200: '#D9D7CF',
          300: '#B8B4A8',
          400: '#8F8A7A',
          500: '#6B6558',
          600: '#4A4640',
          700: '#2E2C28',
          800: '#1A1916',
          900: '#0D0D0D',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C478',
          dark: '#9E7A2A',
        },
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};