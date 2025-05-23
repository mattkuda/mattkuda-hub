'use client';

import { ProgramCard } from "./program-card";
import { getTrainingPrograms } from "../lib/programs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function ProgramsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const programs = getTrainingPrograms(4);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-12 md:py-16" ref={ref}>
            <div className="container">
                <h2 className="mb-4 text-center text-3xl font-bold">
                    Training Programs
                </h2>
                <p className="mb-8 text-lg text-center text-zinc-600">
                    Transform your fitness journey with my hand-crafted training programs
                </p>
                <motion.div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    {programs.map((program) => (
                        <motion.div key={program.id} variants={item}>
                            <ProgramCard
                                program={program}
                            />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex justify-center">
                    <Button asChild variant="outline" className="mt-12">
                        <Link href="/programs">
                            View All Programs <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
} 