module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    colors: {
      /* accent color */
      cud_red: 'rgb(255, 75, 0)',
      cud_yellow: 'rgb(255, 241, 0)',
      cud_green: 'rgb(3, 175, 122)',
      cud_blue: 'rgb(0, 90, 255)',
      cud_sky: 'rgb(77, 196, 255)',
      cud_pink: 'rgb(255, 128, 130)',
      cud_orange: 'rgb(246, 170, 0)',
      cud_purple: 'rgb(153, 0, 153)',
      cud_blown: 'rgb(128, 64, 0)',

      /* base color */
      cud_blightpink: 'rgb(255, 202, 191)',
      cud_cream: 'rgb(255, 255, 128)',
      cud_brightyellowgreen: 'rgb(216, 242, 85)',
      cud_brightsky: 'rgb(191, 228, 255)',
      cud_beige: 'rgb(255, 202, 128)',
      cud_brightgreen: 'rgb(119, 217, 168)',
      cud_brightpurple: 'rgb(201, 172, 230)',

      /* monochrome color */
      cud_white: 'rgb(255, 255, 255)',
      cud_brightgrey: 'rgb(200, 200, 203)',
      cud_grey: 'rgb(132, 145, 158)',
      cud_black: 'rgb(0, 0, 0)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
