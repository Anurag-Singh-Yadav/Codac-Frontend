/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  {
        'wave': "url('/wave.svg')",
      },
      colors:{
        'primary-bg': '#eef5f8',
      }

    },
  },
  plugins: [],
}