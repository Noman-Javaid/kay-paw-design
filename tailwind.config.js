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
        // KAYPAW
        // 'alert1': '#DC2626',
        // 'alert2': '#2AA54B',
        // 'darkBlue': '#008DDA',
        // 'carousel': '#30B6FF1A',
        // 'footer': '#FBFBFB',
        // 'alert-2': '#15803D',
        // 'neutral': '#1F1F1F',
        // 'neutral-2': '#545454',
        // 'neutral-3': '#8E8E8E',
        // 'neutral-4': '#CBCBCB',
        // 'neutral-5': '#DCDCDC',
        // 'neutral-6': '#F4F4F4',

        //FOLDER FAIRY
        'DarkBlue': '#212066',
        'DarkSlateBlue': '#383682',
        'DarkIndigo': '#343380',
        'LightGray': '#E8E8E8',
        'MediumGray': '#8F8F8F',
        'Independence': '#42417C',
        'LavenderBlue': '#E6EAFF',
        'Gray': '#7A7A7A',
        'BlueViolet': '#5A57F2',
        'Charcoal': '#303030',
      },
    },
  },
  plugins: [],
}

