import { Button } from "./ui/button";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PortfolioPreviewSection() {
    return (
        <section className="py-12 md:py-24">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Developer Portfolio
                </h2>
                {/* Project 1 */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                            src="/program-1.jpg"
                            alt="Project 1 preview"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">TabaFit</h3>
                        <p className="text-muted-foreground mb-6">
                            A brief description of the project and what technologies were used to build it.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href="https://demo-url.com" target="_blank">
                                    Try it out
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="https://github.com/username/repo" target="_blank">
                                    View code
                                    <Code className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                            src="/program-2.jpg"
                            alt="Project 2 preview"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">Betcha Sports</h3>
                        <p className="text-muted-foreground mb-6">
                            A brief description of the project and what technologies were used to build it.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href="https://demo-url.com" target="_blank">
                                    Try it out
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="https://github.com/username/repo" target="_blank">
                                    View code
                                    <Code className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 