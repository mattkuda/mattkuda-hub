import { Button } from "./ui/button";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioProject {
    title: string;
    description: string;
    image: string;
    demoUrl?: string;
    codeUrl?: string;
}

export function PortfolioCard({ title, description, image, demoUrl, codeUrl }: PortfolioProject) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={`${title} preview`}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-muted-foreground mb-6">
                    {description}
                </p>
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