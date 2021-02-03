module.exports = {
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
}
