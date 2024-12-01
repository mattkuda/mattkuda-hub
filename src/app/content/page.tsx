'use client'

import NewsletterSection from "@/components/newsletter-section";
import SocialLinksSection from "@/components/social-links-sections";

export default function ContentPage() {
    return (
        <>
            <section className="py-12 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    <SocialLinksSection />
                    <NewsletterSection />
                </div>
            </section>
        </>
    )
}