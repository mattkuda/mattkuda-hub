'use client'

import HeroSectionNew from "@/components/here-section-new";
import { ProgramsSection } from "@/components/programs-section";
import NewsletterSection from "@/components/newsletter-section";
import AboutSection from "../components/about-section";
import SocialLinksSection from "../components/social-links-sections";

export default function HomePage() {

  return (
    <>
      <main className="min-h-screen bg-zinc-100 p-4">
        <div className="container mx-auto max-w-7xl">
          <HeroSectionNew />
          {/* <NewsletterSection /> */}
          <ProgramsSection />
          <AboutSection />
          <SocialLinksSection />
        </div>
      </main>
    </>
  )
}