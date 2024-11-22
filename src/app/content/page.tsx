'use client'

import NewsletterSection from "@/components/newsletter-section";
import SocialLinksSection from "@/components/social-links-sections";

export default function ContentPage() {
    return (
        <>
            <main className="min-h-screen">
                <div className="container mx-auto max-w-6xl">
                    <SocialLinksSection />
                    <NewsletterSection />
                </div>
            </main>
        </>
    )
}