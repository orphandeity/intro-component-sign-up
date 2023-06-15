/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        desktop: 'url("./assets/bg-intro-desktop.png")',
        mobile: 'url("./assets/bg-intro-mobile.png")',
      },
      colors: {
        'fm-black': '#3D3B48',
        'fm-green': '#38CC8B',
        'fm-purple': '#5E54A4',
        'fm-red': '#FF7979',
      },
    },
  },
  plugins: [],
}
