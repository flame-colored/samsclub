/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Sam \'s Workspaces',
    description: 'Sam \'s workspaces Club.',
    icon: 'https://www.pngkit.com/png/full/715-7154118_png.png',
    listUrl: 'https://github.com/flame-colored/samsclub/',
    contactUrl: 'https://github.com/flame-colored/samsclub/issues',
  },
  reactStrictMode: true,
  basePath: '/samsclub/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
