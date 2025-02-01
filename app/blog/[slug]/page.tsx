import { promises as fs } from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

// import type { JSX } from "react"

// interface PageProps {
//   params: { slug: string }
// }

// export default async function Page({
//   params,
// }: PageProps): Promise<JSX.Element> {
//   const { slug } = await params
//   const { default: Post } = await import(`@/articles/${slug}.mdx`)

//   return <Post />
// }

// export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
//   const articlesDir = path.join(process.cwd(), "articles")
//   const filenames = await fs.readdir(articlesDir)
//   return filenames
//     .filter((name) => name.endsWith(".mdx"))
//     .map((name) => ({
//       slug: name.replace(/\.mdx$/, ""),
//     }))
// }

// export const dynamicParams = false

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = await fs.readFile(
    path.join(process.cwd(), "articles", `${slug}.mdx`)
  )

  interface Frontmatter {
    title: string
    date: string
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: {
      h1: ({ children }) => (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {children}
        </h4>
      ),
      p: ({ children }) => (
        <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {children}
        </blockquote>
      ),
      ul: ({ children }) => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
      ),
      code: ({ children }) => (
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {children}
        </code>
      ),
    },
  })

  return <div className="container">{data.content}</div>
}
