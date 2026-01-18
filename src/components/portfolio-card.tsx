import { Button } from "./ui/button";
import { ExternalLink, Code, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "./ui/dialog";

interface PortfolioProject {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    codeUrl?: string;
    videoUrl?: string;
}

function VideoModal({ videoUrl }: { videoUrl: string }) {
    // Extract video ID from YouTube URL (including Shorts)
    const getYouTubeId = (url: string) => {
        // Handle YouTube Shorts URLs
        if (url.includes('youtube.com/shorts/')) {
            const shortsMatch = url.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]+)/);
            return shortsMatch ? shortsMatch[1] : null;
        }

        // Handle regular YouTube URLs
        const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/);
        return match ? match[1] : null;
    };

    const videoId = getYouTubeId(videoUrl);

    // Use a different embed URL for Shorts to maintain aspect ratio
    const isShort = videoUrl.includes('youtube.com/shorts/');
    const embedUrl = isShort
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`
        : `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Watch Demo
                    <Play className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className={`sm:max-w-[900px] p-0 ${isShort ? 'sm:max-w-[400px]' : ''}`}>
                <div className={`w-full ${isShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
                    <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export function PortfolioCard({ title, videoUrl, description, image, demoUrl, codeUrl, technologies }: PortfolioProject) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={`${title} preview`}
                    fill
                    className="object-cover object-top"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-muted-foreground mb-6">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    {demoUrl && (
                        <Button
                            asChild
                            className="bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-white border-0 hover:opacity-90"
                        >
                            <Link href={demoUrl} target="_blank">
                                Try it out
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                    {videoUrl && <VideoModal videoUrl={videoUrl} />}
                    {codeUrl && (
                        <Button variant="outline" asChild>
                            <Link href={codeUrl} target="_blank">
                                View code
                                <Code className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
} 