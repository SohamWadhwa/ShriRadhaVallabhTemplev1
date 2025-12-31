"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function LanguageGate({ children }: { children: React.ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if language was already selected in this session
    const savedLang = sessionStorage.getItem("temple-language")
    if (savedLang) {
      setSelectedLanguage(savedLang)
    }
    setMounted(true)
  }, [])

  const handleSelect = (lang: string) => {
    sessionStorage.setItem("temple-language", lang)
    setSelectedLanguage(lang)
  }

  if (!mounted) return null

  if (!selectedLanguage) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/temple-serene-water-ripples-background.jpg"
            alt="Background pattern"
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="relative z-10 w-full max-w-md text-center">
          <div className="mb-12">
            <h1 className="text-sm uppercase tracking-[0.4em] font-bold text-primary mb-2">Shri Radhavallabh Temple</h1>
            <h2 className="text-4xl md:text-5xl font-serif">Welcome</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Button
              onClick={() => handleSelect("en")}
              variant="outline"
              className="group relative flex flex-col items-center justify-center h-48 rounded-none border-border hover:border-primary transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-3xl font-serif mb-2 transition-colors">
                English
              </span>
              <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100 transition-all">
                Proceed in English
              </span>
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>

            <Button
              onClick={() => handleSelect("hi")}
              variant="outline"
              className="group relative flex flex-col items-center justify-center h-48 rounded-none border-border hover:border-primary transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-3xl font-serif mb-2 transition-colors">
                हिंदी
              </span>
              <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100 transition-all">
                आगे बढ़ें
              </span>
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-widest text-muted-foreground">
            A Sanctuary of Peace, Wisdom, and Spiritual Growth
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
