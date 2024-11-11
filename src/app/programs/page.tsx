import { ProgramCard } from "@/components/program-card";
import { getNutritionPrograms, getTrainingPrograms } from "../../lib/programs";

export default function ProgramsPage() {
    const trainingPrograms = getTrainingPrograms().filter(program => program.type === "training");
    const nutritionPrograms = getNutritionPrograms().filter(program => program.type === "nutrition");
    return (
        <main className="min-h-screen bg-zinc-100 p-4">
            <div className="container mx-auto max-w-7xl">
                {/* Training Programs Section */}
                <section className="container mb-16">
                    <h1 className="mb-8 text-4xl font-bold">Training Programs</h1>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {trainingPrograms.map((program) => (
                            <ProgramCard
                                key={program.id}
                                program={program}
                                showBuyButton={false}
                            />
                        ))}
                    </div>
                </section>
                {/* Nutrition Programs Section */}
                <section className="container">
                    <h2 className="mb-8 text-4xl font-bold">Nutrition Programs</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {nutritionPrograms.map((program) => (
                            <ProgramCard
                                key={program.id}
                                program={program}
                                showBuyButton={false}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
} 