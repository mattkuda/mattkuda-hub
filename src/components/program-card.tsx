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

interface Program {
    id: string;
    title: string;
    description: string;
    price: number;
    difficulty: string;
    rating: number;
    image: string;
}

interface ProgramCardProps {
    program: Program;
    onBuyNow: (program: Program) => void;
}

export function ProgramCard({ program, onBuyNow }: ProgramCardProps) {
    return (
        <Card className="overflow-hidden">
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
                    <div className="flex gap-2">
                        <Button onClick={() => onBuyNow(program)}>Buy Now</Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
} 