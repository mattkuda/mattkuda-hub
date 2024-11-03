'use client'

import Link from "next/link"
import { Star, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js"

interface Program {
  id: string
  title: string
  description: string
  price: number
  difficulty: string
  rating: number
  image: string
}

const programs: Program[] = [
  {
    id: "1",
    title: "Pure Bodybuilding Program",
    description: "Build muscle and strength with science-based training",
    price: 49.99,
    difficulty: "Intermediate/Advanced",
    rating: 5,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Hypertrophy Fundamentals",
    description: "Master the basics of muscle growth",
    price: 39.99,
    difficulty: "Beginner/Intermediate",
    rating: 4,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Ultimate Push Pull Legs",
    description: "Optimize your training split for maximum gains",
    price: 44.99,
    difficulty: "Intermediate/Advanced",
    rating: 5,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Full Body Frequency",
    description: "High-frequency training for rapid results",
    price: 39.99,
    difficulty: "Intermediate/Advanced",
    rating: 4,
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Move this outside the component to avoid recreating on every render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Home() {
  const handleBuyNow = async (program: Program) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Get Checkout Session from API
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          programId: program.id,
          price: program.price,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { sessionId } = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Here you might want to show an error message to the user
      // using a toast notification or similar
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MATT KUDA FITNESS</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="ml-auto md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="#" className="text-lg font-semibold">
                  Programs
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  Nutrition
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  Transformations
                </Link>
                <Link href="#" className="text-lg font-semibold">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="mx-6 hidden items-center space-x-4 md:flex md:space-x-6">
            <Link href="#" className="text-sm font-medium">
              Programs
            </Link>
            <Link href="#" className="text-sm font-medium">
              Nutrition
            </Link>
            <Link href="#" className="text-sm font-medium">
              Transformations
            </Link>
            <Link href="#" className="text-sm font-medium">
              About
            </Link>
          </nav>
          <div className="ml-auto hidden md:flex">
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <section className="py-12 md:py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">Most Popular Programs</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <Card key={program.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={600}
                      height={400}
                      className="aspect-video object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="line-clamp-1">{program.title}</CardTitle>
                    <div className="mt-2 flex items-center">
                      {Array.from({ length: program.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {program.description}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {program.difficulty}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-lg font-bold">${program.price}</span>
                      <div className="flex gap-2">
                        <Button variant="outline">Learn More</Button>
                        <Button onClick={() => handleBuyNow(program)}>Buy Now</Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t bg-muted py-12 md:py-24">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="/placeholder.svg?height=800&width=800"
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
                  src="/placeholder.svg?height=800&width=800"
                  alt="Nutrition plan"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2024 Matt Kuda Fitness. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}