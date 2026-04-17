import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        gowun: ['"Gowun Dodum"', 'sans-serif'],
      },
      colors: {
        'ondo-red': '#E8210A',
      },
    },
  },
  plugins: [],
}

export default config
