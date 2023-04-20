/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// configure MDX
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const remarkHtml = import('remark-html')
const remarkPrism = import('remark-prism')

module.exports = withMDX({
  options: {
    remarkPlugins: [remarkHtml, remarkPrism],
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
})
