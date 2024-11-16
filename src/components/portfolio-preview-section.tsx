import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PortfolioCard } from "./portfolio-card";

const projects = [
    {
        title: "TabaFit",
        description: "A brief description of the project and what technologies were used to build it.",
        image: "/program-1.jpg",
        demoUrl: "https://tabafit.com",
        codeUrl: "https://github.com/mattkuda/tabafit",
    },
    {
        title: "Betcha Sports",
        description: "A brief description of the project and what technologies were used to build it.",
        image: "/program-2.jpg",
        codeUrl: "https://github.com/mattkuda/betcha",
    },
];

export function PortfolioPreviewSection() {
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
                    Developer Portfolio
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
                    {projects.map((project) => (
                        <motion.div key={project.title} variants={item}>
                            <PortfolioCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex justify-center">
                    <Button variant="outline" className="mt-12">
                        View Full Portfolio
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
} 