import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ondo: {
          red: '#e8210a',
          bg: '#141414',
          card: '#1c1c1c',
          card2: '#222',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        kr: ['"Gowun Dodum"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
