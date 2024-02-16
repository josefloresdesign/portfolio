/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'transparent': 'rgba(125, 73, 248, 0) !important',
      'surface-50': '#FFFFFF',
      'surface-100': '#F7F9FD',
      'surface-200': '#ECEDEE',
      'surface-300': '#CBCFD2',
      'surface-400': '#A7AEB4',
      'surface-500': '#8E979F',
      'surface-600': '#6B767F',
      'surface-700': '#4F575E',
      'surface-800': '#33383D',
      'surface-900': '#202327',
      'primary-50': '#F8F5FF',
      'primary-100': '#B89CFC',
      'primary-200': '#7D49F8',
      'primary-300': '#6528F7',
      'primary-400': '#501BCE',
      'secondary-50': '#E8F1FC',
      'secondary-100': '#77A9EE',
      'secondary-200': '#1B6DDF',
      'secondary-300': '#1450A3',
      'secondary-400': '#114388',
      'success-50': '#F6FEFB',
      'success-100': '#1BC590',
      'success-200': '#12825F',
      'success-300': '#0E674B',
      'success-400': '#0A4834',
      'opacity-primary': 'rgba(125, 73, 248, 0.15)',
      'opacity-modal': 'rgba(18, 18, 18, 0.92)',
      'dark-50': '#0C0D0F',
      'dark-100': '#161616',
      'dark-200': '#1A1A1A',
      'dark-300': '#1C1C1C',
      'dark-400': '#1E1E1E',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif']
    },
  },
  plugins: [],
}
