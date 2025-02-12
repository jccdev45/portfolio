import { promises as fs } from "fs"
import path from "path"
import { Metadata, ResolvingMetadata } from "next"
import { compileMDX } from "next-mdx-remote/rsc"

interface Frontmatter {
  title: string
  date: string
  description?: string
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const content = await fs.readFile(
    path.join(process.cwd(), "articles", `${slug}.mdx`)
  )

  const { frontmatter } = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  })

  return {
    title: frontmatter.title,
    description:
      frontmatter.description ||
      "one of the articles of all time from one of the blogs of all time",
    openGraph: {
      title: frontmatter.title,
      description:
        frontmatter.description ||
        "one of the articles of all time from one of the blogs of all time",
      type: "article",
      publishedTime: frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description:
        frontmatter.description ||
        "one of the articles of all time from one of the blogs of all time",
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const content = await fs.readFile(
    path.join(process.cwd(), "articles", `${slug}.mdx`)
  )

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

  return <div className="pb-4">{data.content}</div>
}
