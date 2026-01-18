'use client';

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Program } from "@/types/program";
import { handleProgramPurchase } from "@/lib/stripe-utils";

interface ProgramDetailsProps {
    program: Program;
}

export function ProgramDetails({ program }: ProgramDetailsProps) {
    const handleBuyClick = async () => {
        try {
            await handleProgramPurchase(program);
        } catch (error) {
            console.error('Purchase failed:', error);
        }
    };

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Left Column - Image */}
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src={program.image}
                            alt={program.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right Column - Details */}
                    <div className="flex flex-col space-y-6">
                        <h1 className="text-4xl font-bold">{program.title}</h1>

                        <div className="flex items-center space-x-2">
                            {Array.from({ length: program.rating }).map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-current text-yellow-400"
                                />
                            ))}
                        </div>

                        <div className="text-2xl font-bold">${program.price}</div>

                        <p className="text-lg text-muted-foreground">
                            {program.description}
                        </p>

                        <div className="rounded-md bg-secondary p-4">
                            <h3 className="font-semibold">Difficulty Level</h3>
                            <p>{program.difficulty}</p>
                        </div>

                        <Button size="lg" className="w-full md:w-auto" onClick={handleBuyClick}>
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 