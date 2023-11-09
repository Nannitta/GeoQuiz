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
      'primary-dark-color': '#101014',
      'primary-light-color': '#F5F5FA',
      'secondary-color': '#D81159'
    },
    fontFamily: {
      'lilita': ['Lilita'],
      'akshar': ['Akshar']
    },
    extend: {
      backgroundImage: {
        'background': 'url(./src/assets/images/background.svg)'
      },
      backgroundColor: {
        'bg-color': '#F5F5FA'
      },
      boxShadow: {
        'bt-sh': '0 4px 8px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
} satisfies Config;