import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'hard': '12px 12px 0px 0px rgba(0, 0, 0, 1)'
      },
      dropShadow: {
        'hard': '3px 3px 0px rgba(255, 255, 255, 0.6)',
        'small': '1px 1px 0px rgba(255, 255, 255, 0.6)',
      },
      backgroundColor: {
        'navigation': '#a52175' //Add Navigation background color here
      }
    },
  },
  plugins: [],
}
export default config
