/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        heroImage: 'url(./src/assets/heroImage.jpg)',
        spinner:
          'conic-gradient(from 90deg at 50% 50%, #A20000 0deg, rgba(162, 0, 0, 0.08) 360deg)',
      },
    },
  },
  plugins: [],
};
