/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handjet: ['"Handjet"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        vt323: ['"VT323"', 'monospace'],
        win98: ['"MS Sans Serif"', '"Inter"', 'Tahoma', 'sans-serif'],
      },
      colors: {
        win98: {
          bg: 'rgb(192, 192, 192)',
          dark: '#808080',
          darker: '#0A0A0A',
          light: '#FFFFFF',
          lighter: '#DEDEDE',
          blue: '#000080',
          blueLight: '#1084D0',
          teal: '#008080',
          selection: '#000080',
        }
      },
      boxShadow: {
        'win98-raised': 'inset -1px -1px 0 0 #0A0A0A, inset 1px 1px 0 0 #FFFFFF, inset -2px -2px 0 0 #808080, inset 2px 2px 0 0 #DEDEDE',
        'win98-sunken': 'inset -1px -1px 0 0 #DEDEDE, inset 1px 1px 0 0 #808080, inset -2px -2px 0 0 #FFFFFF, inset 2px 2px 0 0 #0A0A0A',
        'win98-sunken-sm': 'inset -1px -1px 0 0 #DEDEDE, inset 1px 1px 0 0 #808080',
        'win98-button-pressed': 'inset 1px 1px 0 0 #0A0A0A, inset -1px -1px 0 0 #FFFFFF, inset 2px 2px 0 0 #808080, inset -2px -2px 0 0 #DEDEDE',
      }
    },
  },
  plugins: [],
}
