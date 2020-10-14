module.exports = {
  '*.@(ts|tsx)': (filenames) => {
    const wraped = filenames.map((filename) => `'${filename}'`)
    return [
      `eslint --ext .js,.jsx,.ts,.tsx ${wraped.join(' ')}`,
      `prettier --write ${wraped.join(' ')}`,
    ]
  },
}
