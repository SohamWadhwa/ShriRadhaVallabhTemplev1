import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { templeData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Plus } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/Radhavallabh.jpeg"
          alt="Temple atmosphere"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight animate-fade-in">
            {templeData.hero.title}
          </h1>
          <Button
            size="lg"
            className="rounded-none bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-xs px-10 py-6 cursor-pointer"
          >
            {templeData.hero.cta}
          </Button>
        </div>
      </section>

      {/* Blogs Section - Magazine Style */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">The Journal</h2>
            <h3 className="text-4xl md:text-6xl font-serif">Ancient Wisdom</h3>
          </div>
          <Link
            href="/blogs"
            className="hidden md:flex items-center gap-2 group uppercase text-xs font-bold tracking-widest"
          >
            View All Journals <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-border">
          {templeData.blogs.map((blog, idx) => (
            <div key={blog.id} className="bg-background p-8 flex flex-col h-full group">
              <span className="text-6xl font-serif text-border mb-8 group-hover:text-primary transition-colors duration-500">
                {idx + 1}
              </span>
              <div className="flex-grow">
                <h4 className="text-2xl font-serif mb-4 leading-snug">{blog.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{blog.excerpt}</p>
              </div>
              <Link
                href={`/blogs/${blog.id}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-primary pb-1 self-start"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* High Contrast Visual Section */}
      <section className="bg-foreground text-background py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-snug">
            Allier tradition, spiritualité et communauté au cœur de la sagesse.
          </h2>
          <div className="relative aspect-video w-full mb-12 grayscale hover:grayscale-0 transition-all duration-1000">
            <Image src="/Radhavallabh2.jpg" alt="Temple Life" fill className="object-cover" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 italic">
            "Eternal Light serves as a catalyst for personal transformation, fostering projects of spiritual growth in
            the heart of our community."
          </p>
          <Button
            variant="outline"
            className="rounded-none border-background text-background hover:bg-background hover:text-foreground bg-transparent"
          >
            Explore Our History
          </Button>
        </div>
      </section>

      {/* News Section - Grid Layout */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">The Bulletin</h2>
          <h3 className="text-4xl md:text-6xl font-serif">Current Events</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templeData.news.map((item) => (
            <div key={item.id} className="group relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-6">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-background/90 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={20} />
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{item.date}</span>
              <h4 className="text-2xl font-serif mt-2 group-hover:text-primary transition-colors">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Connect with us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm uppercase tracking-widest font-bold mb-16">
            <div>
              <p className="text-primary mb-2">Location</p>
              <p className="text-muted-foreground">{templeData.contact.address}</p>
            </div>
            <div>
              <p className="text-primary mb-2">Inquiries</p>
              <p className="text-muted-foreground">{templeData.contact.email}</p>
            </div>
            <div>
              <p className="text-primary mb-2">Phone</p>
              <p className="text-muted-foreground">{templeData.contact.phone}</p>
            </div>
          </div>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-none bg-foreground text-background hover:bg-primary transition-colors uppercase tracking-widest px-12"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
