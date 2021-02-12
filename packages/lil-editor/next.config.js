const path = require('path')

const config = {
  webpack(config) {
    // override default transpiler
    config.module.rules[0].include.push(path.join(__dirname, '../lil-common'))
    return config
  },
}

module.exports = {
  ...config,
  ...{
    async rewrites() {
      return [
        {
          source: '/tree/:path*',
          destination: '/tree/:path*',
        },
        {
          source: '/blob/:path*',
          destination: '/blob/:path*',
        },
        {
          source: '/new/:path*',
          destination: '/new/:path*',
        },
        {
          source: '/edit/:path*',
          destination: '/edit/:path*',
        },
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
      ]
    },
  },
}
