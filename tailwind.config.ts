import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        'charcoal-light': '#2d2d2d',
        gold: '#d4af37',
        'gold-light': '#f4d03f',
        'spicy-red': '#c41e3a',
        'off-white': '#faf9f6',
      },
      fontFamily: {
        display: ['system-ui', '-apple-system', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

