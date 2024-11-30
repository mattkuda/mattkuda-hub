import { ProgramCard } from "@/components/program-card";
import { getTrainingPrograms } from "../../lib/programs";

export default function ProgramsPage() {
    const trainingPrograms = getTrainingPrograms().filter(program => program.type === "training");
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto max-w-3xl px-4">
                <h2 className="mb-4 text-center text-3xl font-bold">
                    Programs
                </h2>
                <p className="mb-8 text-lg text-center text-zinc-600">
                    Transform your fitness journey with my hand-crafted training programs
                </p>
                <div className="grid gap-6 grid-cols-2">
                    {trainingPrograms.map((program) => (
                        <ProgramCard
                            key={program.id}
                            program={program}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 