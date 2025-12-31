import { templeData } from "@/lib/data"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-serif mb-6 uppercase tracking-tighter">{templeData.name}</h2>
          <p className="max-w-md text-muted-foreground leading-relaxed">{templeData.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Navigation</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-primary transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-primary transition-colors">
                News
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>{templeData.contact.address}</li>
            <li>{templeData.contact.email}</li>
            <li>{templeData.contact.phone}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
        <span>© 2025 {templeData.name}. All Rights Reserved.</span>
        <div className="flex gap-8">
          <Link href="#">Instagram</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
