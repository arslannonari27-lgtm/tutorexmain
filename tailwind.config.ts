import type { Config } from 'tailwindcss';
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: { center: true, padding: '1.25rem', screens: { '2xl': '1200px' } },
    extend: {
      colors: {
        navy: '#102C4E',
        deep: '#0B213C',
        teal: '#16A6B6',
        gold: '#D5B36A',
        cloud: '#F7F9FC',
        ink: '#16314F',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        heading: ['var(--font-manrope)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 14px 38px rgba(16,44,78,0.065)',
        soft: '0 22px 70px rgba(16,44,78,0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
