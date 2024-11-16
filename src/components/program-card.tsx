'use client';

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Program } from "@/types/program";
import { handleProgramPurchase } from "@/lib/stripe-utils";
import { useRouter } from "next/navigation";

interface ProgramCardProps {
    program: Program;
    showBuyButton?: boolean;
}

export function ProgramCard({ program, showBuyButton = true }: ProgramCardProps) {
    const router = useRouter();

    const handleBuyClick = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await handleProgramPurchase(program);
        } catch (error) {
            console.error('Purchase failed:', error);
        }
    };

    const handleViewClick = () => {
        router.push(`/programs/${program.id}`);
    };

    return (
        <Card
            className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={handleViewClick}
        >
            <CardHeader className="p-0">
                <Image
                    src={program.image}
                    alt={program.title}
                    width={600}
                    height={400}
                    className="aspect-video object-cover"
                />
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="line-clamp-1">{program.title}</CardTitle>
                <div className="mt-2 flex items-center">
                    {Array.from({ length: program.rating }).map((_, i) => (
                        <Star
                            key={i}
                            className="h-4 w-4 fill-current text-yellow-400"
                        />
                    ))}
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {program.description}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                    {program.difficulty}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <div className="flex w-full items-center justify-between">
                    <span className="text-lg font-bold">${program.price}</span>
                    {showBuyButton && (
                        <Button
                            className="bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-white border-0 hover:opacity-90"
                            onClick={handleBuyClick}
                        >
                            Buy Now
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
} 