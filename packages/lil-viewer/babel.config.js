const path = require('path')

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: { node: 'current' },
        },
        'styled-jsx': {
          plugins: [
            [
              'styled-jsx-plugin-postcss',
              { path: path.join(__dirname, './postcss.config.js') },
            ],
          ],
        },
      },
    ],
  ],
  plugins: ['inline-react-svg'],
}
