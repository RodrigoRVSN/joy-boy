const withTM = require('next-transpile-modules')(['three'])

module.exports = withTM({
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: [
      'media.graphassets.com'
    ]
  }
})
