import { Button } from "@/components/ui/button";
import { Dumbbell, ArrowRight } from "lucide-react";
import Image from "next/image";

export function OldHeroSection() {
    return (
        <section className="relative h-[80vh] w-full">
            <Image
                src="/hero-bg.jpeg"
                alt="Hero background"
                fill
                className="object-cover brightness-50"
                priority
            />
            <div className="container absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex items-center gap-2 mb-4">
                    <Dumbbell className="h-8 w-8" />
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">MATT KUDA</h1>
                </div>
                <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl">
                    Science-based training programs for transforming your physique
                </p>
                <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white text-lg py-6 px-8 rounded transition-transform hover:scale-105"
                >
                    View Programs
                    <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
            </div>
        </section>
    );
} 