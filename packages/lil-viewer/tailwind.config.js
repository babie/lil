module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    colors: {
      /* accent color */
      'cud-red': 'rgb(255, 75, 0)',
      'cud-yellow': 'rgb(255, 241, 0)',
      'cud-green': 'rgb(3, 175, 122)',
      'cud-blue': 'rgb(0, 90, 255)',
      'cud-sky': 'rgb(77, 196, 255)',
      'cud-pink': 'rgb(255, 128, 130)',
      'cud-orange': 'rgb(246, 170, 0)',
      'cud-purple': 'rgb(153, 0, 153)',
      'cud-blown': 'rgb(128, 64, 0)',

      /* base color */
      'cud-blightpink': 'rgb(255, 202, 191)',
      'cud-cream': 'rgb(255, 255, 128)',
      'cud-brightyellowgreen': 'rgb(216, 242, 85)',
      'cud-brightsky': 'rgb(191, 228, 255)',
      'cud-beige': 'rgb(255, 202, 128)',
      'cud-brightgreen': 'rgb(119, 217, 168)',
      'cud-brightpurple': 'rgb(201, 172, 230)',

      /* monochrome color */
      'cud-white': 'rgb(255, 255, 255)',
      'cud-brightgrey': 'rgb(200, 200, 203)',
      'cud-grey': 'rgb(132, 145, 158)',
      'cud-black': 'rgb(0, 0, 0)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
