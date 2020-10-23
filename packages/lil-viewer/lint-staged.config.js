module.exports = {
  '*.@(js|jsx|ts|tsx)': (filenames) => {
    const wrapped = filenames.map((filename) => `'${filename}'`)
    return [
      `eslint --ext .js,.jsx,.ts,.tsx ${wrapped.join(' ')}`,
      `prettier --write ${wrapped.join(' ')}`,
    ]
  },
}
