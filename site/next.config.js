/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Sam \'s workspaces',
    description: 'Sam \'s workspaces Club.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/flame-colored/samsclub/',
    contactUrl: 'https://github.com/flame-colored/samsclub/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
