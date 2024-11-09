'use client'

import { HeroSection } from "@/components/hero-section";
import { ProgramsSection } from "@/components/programs-section";

export default function HomePage() {

  return (
    <>
      <HeroSection />
      <main className="min-h-screen bg-zinc-100 p-4">
        <div className="container mx-auto max-w-7xl">
          <ProgramsSection />
        </div>
      </main>
    </>
  )
}