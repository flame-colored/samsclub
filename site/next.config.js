/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Sam \'s workspaces',
    description: 'Sam \'s workspaces Club.',
    icon: 'https://www.pngkit.com/png/full/715-7154118_png.png',
    listUrl: 'https://github.com/flame-colored/samsclub/',
    contactUrl: 'https://github.com/flame-colored/samsclub/issues',
  },
  reactStrictMode: true,
  basePath: '/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
