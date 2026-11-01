/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '810px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: '#fffdf5',
          light: '#ffffff',
          dark: '#f4f1e8',
        },
        dark: {
          DEFAULT: '#0b0b0c',
          card: '#161616',
          surface: '#122020',
          elevated: '#171718',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        accent: {
          lime: '#9efc65',
          yellow: '#fde589',
          orange: '#ff742e',
          pink: '#ffbcfc',
        },
        muted: {
          DEFAULT: '#6a6e6e',
          light: '#8b8b8b',
          subtle: '#b7bcbc',
          border: '#edebe3',
          card: '#f0f0f0',
        }
      },
      fontFamily: {
        sans: ['Switzer', 'Inter', 'Geist', 'system-ui', 'sans-serif'],
        display: ['Switzer', 'Inter Display', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'badge': '100px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}

