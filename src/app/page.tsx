'use client'

import { loadStripe } from "@stripe/stripe-js"
import Header from '@/components/header';
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProgramsSection } from "@/components/programs-section";
import { Program } from "@/types/program";
import { Button } from "../components/ui/button";
import Image from "next/image";

const programs: Program[] = [
  {
    id: "1",
    title: "Pure Bodybuilding Program",
    description: "Build muscle and strength with science-based training",
    price: 49.99,
    difficulty: "Intermediate/Advanced",
    rating: 5,
    image: "/program-2.jpg",
  },
  {
    id: "2",
    title: "Hypertrophy Fundamentals",
    description: "Master the basics of muscle growth",
    price: 39.99,
    difficulty: "Beginner/Intermediate",
    rating: 4,
    image: "/program-1.jpg",
  },
  {
    id: "3",
    title: "Ultimate Push Pull Legs",
    description: "Optimize your training split for maximum gains",
    price: 44.99,
    difficulty: "Intermediate/Advanced",
    rating: 5,
    image: "/program-3.jpg",
  },
  {
    id: "4",
    title: "Full Body Frequency",
    description: "High-frequency training for rapid results",
    price: 39.99,
    difficulty: "Intermediate/Advanced",
    rating: 4,
    image: "/program-4.jpg",
  },
]

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function HomePage() {
  const handleBuyNow = async (program: Program) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          programTitle: program.title,
          price: program.price,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { url } = await response.json();
      window.location.href = url;

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-100 p-4">
        <HeroSection />
        <ProgramsSection programs={programs} onBuyNow={handleBuyNow} />
        <section className="border-t bg-muted py-12 md:py-24">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="/program-1.jpg"
                  alt="Training programs"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold">Training Programs</h2>
                <p className="text-muted-foreground">
                  World-class training programs backed by science and proven to
                  deliver results. Choose from a variety of programs tailored to
                  your goals and experience level.
                </p>
                <Button size="lg" className="w-fit">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold">Nutrition Plan</h2>
                <p className="text-muted-foreground">
                  Get a customized nutrition plan designed to support your training
                  goals. Based on scientific research and optimized for your needs.
                </p>
                <Button size="lg" className="w-fit">
                  Learn More
                </Button>
              </div>
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="/program-4.jpg"
                  alt="Nutrition plan"
                  className="object-cover"
                  width={1920}
                  height={1080} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}