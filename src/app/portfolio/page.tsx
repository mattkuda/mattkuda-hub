'use client'

import { useRef, useState } from "react";
import { portfolioProjects } from "@/lib/portfolio";
import { ContactModal } from "@/components/contact-modal";
import { motion, useInView } from "framer-motion";
import { PortfolioCard } from "../../components/portfolio-card";

export default function PortfolioPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Portfolio
                    </h1>
                    <p className="text-lg text-muted-foreground mb-2">
                        A collection of applications I've built that showcase my expertise in web and mobile development.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Looking to hire me for freelance work?{" "}
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4"
                        >
                            Let's chat
                        </button>
                    </p>
                </div>
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

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </section>
    );
} 