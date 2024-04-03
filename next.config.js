/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', //export | standalone
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
