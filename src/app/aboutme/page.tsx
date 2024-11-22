import Image from "next/image";

export default function AboutMe() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-transparent bg-clip-text">
                    About Me
                </h1>

                <div className="mb-12 relative w-full max-w-md mx-auto aspect-square">
                    <Image
                        src="/matt-kuda-gemini.png"
                        alt="Matt Kuda"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
                        priority
                    />
                </div>

                <div className="space-y-6 text-zinc-800">
                    <div className="text-xl md:text-2xl font-medium leading-relaxed">
                        Hi, I&apos;m Matt Kuda. I discovered both coding and weightlifting in high school and they&apos;ve been my two passions ever since.
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            From my earliest days writing code and hitting the gym, I&apos;ve always been drawn to building things: stronger software, a healthier body, and a more fulfilling life.
                        </p>

                        <p>
                            As a developer, I&apos;ve spent years honing my skills in building applications, solving problems, and creating tools that make life easier and more impactful. Some of my projects include TabaFit, a Tabata workout app designed to bring the power of HIIT training to everyone, and various web development experiments that merge functionality with creative design. My approach to coding isn&apos;t just about writing great software—it&apos;s about using technology to make a difference.
                        </p>

                        <p>
                            But my mission extends beyond just tech. I see a real opportunity to inspire developers to embrace healthier lifestyles. Staying active and fit isn&apos;t just about looking good—it&apos;s about performing at your best, building confidence, and leading a stronger, more balanced life. I believe that when developers prioritize their health, they become sharper problem-solvers, more creative thinkers, and ultimately, better at what they do both in their careers and beyond.
                        </p>

                        <p>
                            Looking ahead, my goal is to continue creating tools and content that bridge the worlds of tech and fitness. I&apos;m building a community of like-minded developers and enthusiasts who want to live healthier, purpose-driven lives. Whether it&apos;s crafting more innovative apps, sharing fitness resources, or documenting my journey through projects and content, I&apos;m focused on pushing boundaries and helping others unlock their potential.
                        </p>

                        <p className="text-xl md:text-2xl font-medium text-center italic mt-8">
                            Let&apos;s build something stronger together.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}