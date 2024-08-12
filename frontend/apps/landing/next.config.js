const path = require('path')

module.exports = {
  basePath: '/employee',
  reactStrictMode: true,
  transpilePackages: ['@repo/shared'],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
  eslint: {
    // TODO: Потом исправить все ошибки ESLint и удалить эту настройку
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })
    return config
  },
}
