/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3d52a0',
        secondary: '#7091e6',
        background: '#8697c4',
        text: '#ede8f5',
      }
    },
  },
  plugins: [],
}
