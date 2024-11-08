import { Program } from "@/types/program";
import { ProgramCard } from "./program-card";

interface ProgramsSectionProps {
    programs: Program[];
    onBuyNow: (program: Program) => void;
}

export function ProgramsSection({ programs, onBuyNow }: ProgramsSectionProps) {
    return (
        <section className="py-12 md:py-24">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Most Popular Programs
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {programs.map((program) => (
                        <ProgramCard
                            key={program.id}
                            program={program}
                            onBuyNow={onBuyNow}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 