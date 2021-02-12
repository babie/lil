const path = require('path')

module.exports = {
  webpack: (config) => {
    // override default transpiler
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.test('.tsx')) {
        rule.include.push(path.join(__dirname, '../lil-common'))
      }
    })
    return config
  },
  rewrites: () => {
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
}
