/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '8rem',
      },
      screens: {
        sm: "740px",
        md: "968px",
        lg: "1124px",
        xl: "1280px", 
      },
    },
    extend: {
      colors: {
        'main': '#35AFA0',
      }
    },
  },
  plugins: [],
}
