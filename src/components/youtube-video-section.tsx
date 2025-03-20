'use client';

import { cn } from "@/lib/utils";

interface YouTubeVideoSectionProps {
    title?: string;
    description?: string | null;
    playlistId?: string;
    videoId?: string;
    className?: string;
}

export function YouTubeVideoSection({
    title = "Latest Video",
    description = null,
    playlistId = "UUNZBcrGY3VFAJfNG-UnSHnA",
    videoId,
    className,
}: YouTubeVideoSectionProps) {
    // Determine the YouTube embed URL based on whether we're showing a playlist or a single video
    const embedUrl = videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}`
        : `https://www.youtube-nocookie.com/embed?listType=playlist&list=${playlistId}`;

    return (
        <section className={cn("py-12", className)}>
            <div className="container mx-auto max-w-5xl text-center">
                {title && <h1 className="mb-4 text-center text-3xl font-bold">{title}</h1>}
                {description && <p className="text-lg text-center text-muted-foreground mb-8">{description}</p>}
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-video w-full">
                        <iframe
                            src={embedUrl}
                            className="w-full h-full"
                            allowFullScreen
                            title={title}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YouTubeVideoSection; 