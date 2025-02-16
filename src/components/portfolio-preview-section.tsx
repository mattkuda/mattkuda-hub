import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PortfolioCard } from "./portfolio-card";
import { portfolioProjects } from "@/lib/portfolio";
import { ContactModal } from "./contact-modal";

export function PortfolioPreviewSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "100px" });
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
                    Portfolio
                </h2>
                <p className="text-lg text-center text-muted-foreground mb-8">
                    Looking to hire me for freelance work?{" "}
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4"
                    >
                        Let's chat
                    </button>
                </p>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="space-y-12"
                >
                    {portfolioProjects.slice(0, 2).map((project) => (
                        <motion.div key={project.title} variants={item}>
                            <PortfolioCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex justify-center">
                    <Button asChild variant="outline" className="mt-12">
                        <Link href="/portfolio">
                            View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </section>
    );
} 