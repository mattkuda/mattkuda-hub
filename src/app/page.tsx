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
      <main className="min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <HeroSection />
          <PortfolioPreviewSection />
          <AboutSection />
          <ProgramsSection />
          <SocialLinksSection />
          <NewsletterSection />
        </div>
      </main>
    </>
  )
}