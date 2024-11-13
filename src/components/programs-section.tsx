import { ProgramCard } from "./program-card";
import { getAllPrograms } from "../lib/programs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function ProgramsSection() {
    const programs = getAllPrograms();
    return (
        <section className="py-12 md:py-24">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Training Programs
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {programs.map((program) => (
                        <ProgramCard
                            key={program.id}
                            program={program}
                        />
                    ))}
                </div>
                <div className="flex justify-end">
                    <Button className="mt-12">View All Programs <ArrowRight className="w-4 h-4" /></Button>
                </div>
            </div>
        </section>
    );
} 