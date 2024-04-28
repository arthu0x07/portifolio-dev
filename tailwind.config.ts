import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        dotgothic: ['var(--font-dotgothic16)'],
      },
      fontSize: {
        xs: '0.5rem', // 8px
        sm: '0.625rem', // 10px
        md: '0.75rem', // 12px
        lg: '0.875rem', // 14px
        base: '1rem', // 16px
        xl: '1.125rem', // 18px
        '2xl': '1.25rem', // 20px
        '3xl': '1.5rem', // 24px
        '4xl': '1.875rem', // 30px
        '5xl': '2.25rem', // 36px
        '6xl': '2.8125rem', // 45px
      },
      colors: {
        'gray-300': '#808080',
        'gray-400': '#c4c4c4',
        'gray-600': '#5d5d5d',
      },
    },
  },
  plugins: [],
}
export default config
