import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { templeData } from "@/lib/data"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-sm uppercase tracking-[0.4em] font-bold text-primary mb-6">Our Legacy</h1>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">{templeData.about.title}</h2>
          </div>
          <div className="relative aspect-square">
            <Image src="/temple-entrance-architecture-detail.jpg" alt="About the temple" fill className="object-cover grayscale" />
          </div>
        </div>

        <div className="mt-24 max-w-3xl">
          <p className="text-2xl font-serif leading-relaxed mb-12 border-l-4 border-primary pl-12">
            {templeData.about.description}
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>
              The architecture of Eternal Light is a physical manifestation of our philosophy. Every stone, every arch,
              and every pathway is designed to guide the spirit towards introspection. We believe that physical space
              influences internal state, and our grounds are maintained with the utmost care to preserve this sanctity.
            </p>
            <p>
              Founded over three centuries ago, the temple has survived numerous transitions, yet its core mission
              remains unchanged: to provide a sanctuary for all who seek wisdom, regardless of their background or
              journey. We operate not as a closed institution, but as a living part of the global community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Founded", value: "1724" },
            { label: "Global Reach", value: "45+ Countries" },
            { label: "Community", value: "12k members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-primary text-5xl font-serif mb-2">{stat.value}</p>
              <p className="uppercase tracking-widest text-xs font-bold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
