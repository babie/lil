module.exports = {
  '*.@(ts|tsx)': (filenames) => {
    const wraped = filenames.map((filename) => `'${filename}'`)
    return [
      `yarn workspace lil-viewer eslint --ext .js,.jsx,.ts,.tsx ${wraped.join(' ')}`,
      `yarn workspace lil-viewer prettier --write ${wraped.join(' ')}`,
    ]
  },
}
