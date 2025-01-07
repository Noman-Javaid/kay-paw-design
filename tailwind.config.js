/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        'darkBlue': '#008DDA',
        'carousel': '#30B6FF1A',
        'footer': '#FBFBFB',
        'alert-2': '#15803D',
        'neutral': '#1F1F1F',
        'neutral-2': '#545454',
        'neutral-3': '#8E8E8E',
        'neutral-4': '#CBCBCB',
        'neutral-5': '#DCDCDC',
        'neutral-6': '#F4F4F4',

      },
    },
  },
  plugins: [],
}

