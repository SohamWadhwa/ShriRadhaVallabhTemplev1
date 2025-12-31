import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { templeData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Share2, Bookmark } from "lucide-react"

interface BlogPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { id } = await params
  const blog = templeData.blogs.find((b) => b.id.toString() === id)

  if (!blog) {
    notFound()
  }

  // Related posts (excluding current)
  const relatedPosts = templeData.blogs.filter((b) => b.id.toString() !== id).slice(0, 2)

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-24 pb-32">
        {/* Header Section */}
        <header className="px-4 md:px-6 max-w-4xl mx-auto mb-16 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={12} />
            Back to Journal
          </Link>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">{blog.category}</div>
          <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-[1.1] tracking-tight">{blog.title}</h1>
          <div className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            <span>{blog.date}</span>
            <span className="h-1 w-1 bg-foreground/20 rounded-full"></span>
            <span>By the Temple Council</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="px-4 md:px-6 max-w-7xl mx-auto mb-20">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority />
          </div>
        </div>

        {/* Content Layout */}
        <div className="px-4 md:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar / Tools */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-4">
                <span className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  Share
                </span>
                <div className="flex flex-col gap-4">
                  <button className="h-10 w-10 border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <Share2 size={16} />
                  </button>
                  <button className="h-10 w-10 border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <Bookmark size={16} />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Body */}
          <div className="lg:col-span-7 lg:col-start-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl md:text-2xl text-muted-foreground font-serif italic mb-12 leading-relaxed">
                {blog.excerpt}
              </p>
              <div className="space-y-8 text-foreground/80 leading-loose">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <h3 className="text-3xl font-serif text-foreground mt-12 mb-6">The Path of Stillness</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <div className="my-16 p-8 border-l-4 border-primary bg-primary/5 italic text-xl md:text-2xl font-serif">
                  "Silence is not the absence of sound, but the presence of self. In the temple of the mind, every
                  thought is a prayer."
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-20 pt-10 border-t border-foreground/10 flex flex-wrap gap-4">
              {["Meditation", "Wisdom", "Zen", "Tradition"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest font-bold px-4 py-2 border border-foreground/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* More from Journal */}
      <section className="py-24 bg-secondary/30 border-t border-foreground/10">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-serif uppercase tracking-tight">Further Reading</h2>
            <Link
              href="/blogs"
              className="text-[10px] uppercase tracking-widest font-bold border-b border-primary pb-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blogs/${related.id}`}
                className="group grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={related.image || "/placeholder.svg"}
                    alt={related.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary mb-2">
                    {related.category}
                  </span>
                  <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                    {related.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
