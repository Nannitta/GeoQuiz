import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      'mb': '390px',
      'tb': '768px',
      'lp': '1366px',
      'ds': '1920px'
    },
    colors: {
      'primary-dark-color': '#101014',
      'primary-light-color': '#F5F5FA',
      'secondary-color': '#D81159',
      'skeleton': '#D1D5DB'
    },
    fontFamily: {
      'lilita': ['Lilita'],
      'akshar': ['Akshar'],
      'placeholder': ['Akshar-light'],
      'highlight': ['Akshar-bold']
    },
    extend: {
      backgroundColor: {
        'bg-color': '#F5F5FA'
      },
      boxShadow: {
        'bt-sh': '0 4px 8px rgba(0, 0, 0, 0.2)',
        'container-sh': '0px 4px 4px 0px rgba(0, 0 ,0, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'flag': '0px -4px 4px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.15);'
      },
      gridTemplateColumns: {
        'homepage-col': '40% 60%',
      },
      gridTemplateRows: {
        'homepage-row': '1fr',
      }      
    },
  },
  plugins: [],
} satisfies Config;