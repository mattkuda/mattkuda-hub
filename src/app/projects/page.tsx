'use client'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PortfolioCard } from "@/components/portfolio-card";
import { portfolioProjects } from "@/lib/portfolio";

export default function ProjectsPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "100px" });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-12 md:py-24" ref={ref}>
            <div className="container">
                <h2 className="mb-4 text-center text-3xl font-bold">
                    Projects
                </h2>
                <p className="mb-8 text-lg text-center text-zinc-600">
                    Applications I&apos;ve built and shipped to the public
                </p>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="space-y-12"
                >
                    {portfolioProjects.map((project) => (
                        <motion.div key={project.title} variants={item}>
                            <PortfolioCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 