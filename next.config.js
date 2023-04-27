const isProd = process.env.NODE_ENV === 'production';
const repo = '/porcfest-schedule'
const basePath = isProd ? repo : '';
const assetPrefix = isProd ? repo : '';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix
}

module.exports = nextConfig