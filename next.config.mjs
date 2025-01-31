import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
    ],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, if desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// module.exports = nextConfig
export default withMDX(nextConfig)
