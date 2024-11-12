import { Button } from "@/components/ui/button"

const AboutSection = () => {
    return (
        <section className="bg-muted py-12">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-4">About Me</h3>
                <p className="text-xl mb-6">
                    I build things that combine my love for tech and fitness, helping people create better habits and lead intentional lives.
                </p>
                <Button size="lg">Read My Story</Button>
            </div>
        </section>
    )
}

export default AboutSection