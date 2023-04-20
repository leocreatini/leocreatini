/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const remarkReact = import('remark-react')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkReact],
  },
})

module.exports = nextConfig
module.exports = withMDX({})
