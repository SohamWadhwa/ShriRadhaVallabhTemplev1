import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { templeData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function BlogsPage() {
  const featuredPost = templeData.blogs[0]
  const remainingPosts = templeData.blogs.slice(1)

  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="pt-32 pb-16 px-4 md:px-6 max-w-7xl mx-auto border-b border-foreground/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-6xl md:text-9xl font-serif uppercase tracking-tighter">The Journal</h1>
            <p className="text-xs uppercase tracking-[0.5em] font-bold mt-4 text-primary">
              Voices from the Eternal Light Temple
            </p>
          </div>
          <div className="hidden md:block text-right max-w-xs">
            <p className="text-sm italic text-muted-foreground">
              "Words are the arrows of the soul. When directed with wisdom, they heal the world."
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        {featuredPost && (
          <div className="mb-24">
            <Link
              href={`/blogs/${featuredPost.id}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-8 relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-0 left-0 bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-6 py-3">
                  Featured: {featuredPost.category}
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4">Latest Insight</div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-[1.1] group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-foreground/20"></div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{featuredPost.date}</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-x-12 lg:gap-y-24">
          {remainingPosts.map((blog, idx) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 bg-background/90 backdrop-blur-sm text-foreground text-[10px] uppercase tracking-widest font-bold px-4 py-2 border-t border-l border-foreground/10">
                  {blog.category}
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-3xl font-serif text-border/40">0{idx + 2}</span>
                <div>
                  <h3 className="text-2xl font-serif mb-4 leading-tight group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{blog.excerpt}</p>
                  <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
                    {blog.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 border border-foreground/10 bg-primary/5 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-tight">Stay Connected</h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-10">
            Receive monthly wisdom, meditation practices, and temple updates directly in your sanctuary.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-background border border-foreground/20 px-6 py-4 text-xs uppercase tracking-widest focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-foreground hover:text-background transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
