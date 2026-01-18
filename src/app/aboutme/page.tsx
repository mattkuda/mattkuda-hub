import Image from "next/image";
import { AnimatedEmojiSequence } from "../../components/animated-emoji-sequence";
import YouTubeVideoSection from "@/components/youtube-video-section";

export default function AboutMe() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
                <h2 className="mb-4 text-center text-3xl font-bold">
                    About Me
                </h2>
                <div className="mb-8 relative mx-auto flex justify-center">
                    <Image
                        src="/matt-kuda-gemini.png"
                        alt="Matt Kuda"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
                        priority
                    />
                </div>
                <div className="space-y-6 text-foreground">
                    <div className="text-xl md:text-2xl font-medium leading-relaxed">
                        Hi, I&apos;m Matt. I discovered both coding and fitness in high school and they&apos;ve been my two passions ever since.
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            From my earliest days writing code and hitting the gym, I&apos;ve always been drawn to building things: stronger software, a healthier body, and a more fulfilling life.
                        </p>

                        <p>
                            As a developer, I've spent years honing my skills in building applications, solving problems, and creating tools that make life easier and more impactful. Some of my projects include TabaFit, a Tabata workout app designed to bring the power of HIIT training to everyone, and various web development experiments that merge functionality with creative design. My approach to coding isn't just about writing great software. It's about using technology to make a difference.
                        </p>

                        <p>
                            But my mission extends beyond just tech. I see a real opportunity to inspire developers to embrace healthier lifestyles. Staying active and fit enables you to perform at your best, building confidence, and leading a stronger, more balanced life. I believe that when developers prioritize their health, they become sharper problem-solvers, more creative thinkers, and ultimately, better at what they do both in their careers and beyond.
                        </p>

                        <p>
                            Looking ahead, my goal is to continue creating tools and content that bridge the worlds of tech and fitness. I&apos;m building a community of like-minded developers and enthusiasts who want to live healthier, purpose-driven lives. Whether it&apos;s crafting more innovative apps, sharing fitness resources, or documenting my journey through projects and content, I&apos;m focused on pushing boundaries and helping others unlock their potential.
                        </p>

                        <YouTubeVideoSection
                            title="My Story as a Developer"
                            videoId="tmuXhWPLXOI"
                            className="pt-4"
                        />

                        <p className="text-xl md:text-2xl font-medium text-center italic mt-8">
                            Let&apos;s build something stronger together.
                        </p>
                        <div className="flex justify-center">
                            <AnimatedEmojiSequence />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}