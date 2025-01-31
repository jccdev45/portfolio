import { promises as fs } from "fs"
import path from "path"
import type { JSX } from "react"

interface PageProps {
  params: { slug: string }
}

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const { slug } = await params
  const { default: Post } = await import(`@/articles/${slug}.mdx`)

  return <Post />
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const articlesDir = path.join(process.cwd(), "articles")
  const filenames = await fs.readdir(articlesDir)
  return filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      slug: name.replace(/\.mdx$/, ""),
    }))
}

export const dynamicParams = false
