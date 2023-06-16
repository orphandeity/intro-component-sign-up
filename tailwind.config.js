/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mobile: 'url("./assets/bg-intro-mobile.png")',
        desktop: 'url("./assets/bg-intro-desktop.png")',
        error: 'url("./assets/icon-error.svg")',
      },
      colors: {
        'fm-gray': '#3D3B48',
        'fm-green': '#38CC8B',
        'fm-purple': '#5E54A4',
        'fm-red': '#FF7979',
        'fm-blue-gray': '#BAB7D4',
      },
      boxShadow: {
        inset: 'inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)',
      },
      dropShadow: {
        custom: '0px 8px 0px rgba(0, 0, 0, 0.14688)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
