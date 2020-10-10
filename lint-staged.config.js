module.exports = {
  '*.@(ts|tsx)': (filenames) => {
    const wraped = filenames.map((filename) => `'${filename}'`)
    return [`yarn lint ${wraped.join(' ')}`, `yarn format ${wraped.join(' ')}`]
  },
}
