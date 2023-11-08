import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      'mb': '360px',
      'tb': '768px',
      'lp': '1366px',
      'ds': '1920px'
    },
    colors: {
      'prueba': '#ff23d6'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;