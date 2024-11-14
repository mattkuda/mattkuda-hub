/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react'

const HeroSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const subscribeUrl = `https://mattkuda.substack.com/subscribe?email=${encodeURIComponent(email)}`;

        window.open(subscribeUrl, '_blank', 'noopener,noreferrer');

        setEmail('');
    };

    return (
        <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-transparent bg-clip-text">
                    Hi, I'm Matt Kuda —
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    The Healthy Developer.
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Through tech and fitness, I'm on a mission to inspire healthier lives, documenting the journey along the way.
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Join my newsletter to get the latest updates each month.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-16 text-xl placeholder:text-xl px-6"
                    />
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-md opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-l from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Button
                            type="submit"
                            size="lg"
                            className="relative w-full h-16 text-xl font-medium text-white border-0 z-10 bg-transparent hover:bg-transparent"
                        >
                            SUBSCRIBE
                        </Button>
                    </div>
                </form>
            </div>
            <div className="md:w-1/2 p-4">
                <div className="relative w-fit mx-auto">
                    {/* Gradient border container */}
                    <div
                        className="absolute -inset-[3px] rounded-lg"
                        style={{
                            backgroundImage: 'linear-gradient(119.87deg, #4f87ed00 24.67%, #4f87ed 30.41%, #9476c5 46.53%, #bc688e 57.45%, #d6645d 73.84%, #d6645d00 79.3%)',
                            padding: '3px',
                        }}
                    >
                        <div className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm" />
                    </div>
                    {/* Image container */}
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/matt-kuda-gemini.png"
                            alt="Matt Kuda"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection