import { Button } from "@/components/ui/button"
import Link from "next/link"
const AboutSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-4">About Me</h3>
                <p className="text-xl mb-6">
                    I build things that combine my love for tech and fitness, helping people create better habits and lead intentional lives.
                </p>
                <Button className="bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-white border-0 hover:opacity-90"
                    size="lg">
                    <Link href="/aboutme">
                        Read My Story
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default AboutSection