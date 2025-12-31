import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { templeData } from "@/lib/data"
import Image from "next/image"

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="pt-32 pb-16 px-4 md:px-6 max-w-7xl mx-auto border-b">
        <h1 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter">The Bulletin</h1>
        <p className="text-xs uppercase tracking-[0.4em] font-bold mt-4 text-primary">Temple Announcements & Updates</p>
      </header>

      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="space-y-32">
          {templeData.news.map((item, idx) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={idx % 2 !== 0 ? "md:order-2" : ""}>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4 block">
                  {item.date}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">{item.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{item.content}</p>
                <div className="h-px w-24 bg-primary"></div>
              </div>
              <div className={`relative aspect-[4/3] ${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
