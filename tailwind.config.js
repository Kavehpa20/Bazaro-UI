import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["peyda",...defaultTheme.fontFamily.sans],
        IRANSans:["IRANSans",...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '28.25': '7.25rem',
        '22': '5.02rem',

      },
      colors:{
        primary:"#0c79f8",
        heading:{
          secondary:"#1E385f"
        },
        active:"#54c5d0",
        disbale:"#A5A6F6",
        arrow:"#879DBF",
      }
    },
  },
  plugins: [],
}