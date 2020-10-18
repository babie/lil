module.exports = {
  '*.@(ts|tsx)': (filenames) => {
    const wrapped = filenames.map((filename) => `'${filename}'`)
    return [
      `yarn eslint --ext .js,.jsx,.ts,.tsx ${wrapped.join(' ')}`,
      `yarn prettier --write ${wrapped.join(' ')}`,
    ]
  },
}
