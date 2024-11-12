'use client'

import HeroSection from "@/components/hero-section";
import { ProgramsSection } from "@/components/programs-section";
import NewsletterSection from "@/components/newsletter-section";
import AboutSection from "../components/about-section";
import SocialLinksSection from "../components/social-links-sections";
import { PortfolioPreviewSection } from "../components/portfolio-preview-section";

export default function HomePage() {

  return (
    <>
      <main className="min-h-screen bg-zinc-100 p-4">
        <div className="container mx-auto max-w-7xl">
          <HeroSection />
          {/* <NewsletterSection /> */}
          <ProgramsSection />
          <PortfolioPreviewSection />
          <AboutSection />
          <NewsletterSection />
          <SocialLinksSection />
        </div>
      </main>
    </>
  )
}