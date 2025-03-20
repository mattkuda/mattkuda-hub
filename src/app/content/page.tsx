'use client'

import NewsletterSection from "@/components/newsletter-section";
import SocialLinksSection from "@/components/social-links-sections";
import YouTubeVideoSection from "@/components/youtube-video-section";

export default function ContentPage() {
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Content
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        What I've shared with the world on tech, fitness, and life.
                    </p>
                </div>
                {/* YouTube section */}
                <YouTubeVideoSection
                    title="Latest YouTube Video"
                    description="Check out my most recent content on YouTube:"
                    className="mb-16"
                />
                <div className="space-y-16">
                    <SocialLinksSection />
                    <NewsletterSection />
                </div>
            </div>
        </section>
    )
}